import React, { useState, useEffect } from 'react';
import './Todo.css';
import axios from 'axios';
import Fill from "../../assets/Fill 1.png";
import Ellipse from "../../assets/Ellipse 1.png";
import Vector from "../../assets/Vector (2).png";

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [newTaskText, setNewTaskText] = useState('');

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('https://full-stack-test-api.cyclic.app/tasks');
                setTasks(response.data);
            } catch (error) {
                console.error('Erro ao carregar as tarefas:', error);
            }
        };

        fetchTasks();
    }, []);

    const handleTaskCompletion = async (taskId) => {
        try {
            await axios.put(`https://full-stack-test-api.cyclic.app/tasks/${taskId}`);
            const updatedTasks = tasks.map(task => {
                if (task.id === taskId) {
                    return { ...task, status: 'done' };
                }
                return task;
            });
            setTasks(updatedTasks);
        } catch (error) {
            console.error('Erro ao concluir a tarefa:', error);
        }
    };

    const handleAddTask = async () => {
        if (newTaskText.trim() !== '') {
            try {
                const response = await axios.post('https://full-stack-test-api.cyclic.app/tasks', { text: newTaskText, status: 'todo' });
                const newTask = response.data;
                setTasks([...tasks, newTask]);
                setNewTaskText('');
            } catch (error) {
                console.error('Erro ao adicionar a tarefa:', error);
            }
        }
    };

    const handleDeleteTask = async (taskId) => {
        try {
            await axios.delete(`https://full-stack-test-api.cyclic.app/tasks/${taskId}`);
            const updatedTasks = tasks.filter(task => task.id !== taskId);
            setTasks(updatedTasks);
        } catch (error) {
            console.error('Erro ao excluir a tarefa:', error);
        }
    };

    
    const handleDeleteAllTasks = async (status) => {
        try {
            await axios.delete(`https://full-stack-test-api.cyclic.app/tasks/status`, { params: { status } });
            const updatedTasks = tasks.filter(task => task.status !== status);
            setTasks(updatedTasks);
        } catch (error) {
            console.error('Erro ao excluir todas as tarefas com status:', status, error);
        }
    };

    const handleClickOnTaskText = (taskId) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, editing: true };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const handleTaskTextChange = (taskId, newText) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, text: newText };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const completedTasksCount = tasks.filter(task => task.status === 'done').length;

    return (
        <div className="todo">
            <img src={Fill} alt="Fill" className="background-img" />
            <div className="box">
                <div className="tabela">
                    <div className="overlap-group">
                        <div className="rectangle" />
                        <div className="text-wrapper">To-do</div>
                        <div className="take-a-breath-start">
                            Take a breath. Start doing.
                            {tasks.map(task => {
                                if (task.status === 'todo') {
                                    return (
                                        <div key={task.id} className="task">
                                            <img src={Ellipse} alt="Icon" className="task-icon" />
                                            {task.editing ? (
                                                <input
                                                    type="text"
                                                    value={task.text}
                                                    onChange={(e) => handleTaskTextChange(task.id, e.target.value)}
                                                    onBlur={() => handleClickOnTaskText(task.id)}
                                                    autoFocus
                                                    className="editing-input"
                                                />
                                            ) : (
                                                <div onClick={() => handleClickOnTaskText(task.id)}>
                                                    {task.text}
                                                </div>
                                            )}
                                            <button className='delete' onClick={() => handleDeleteTask(task.id)}>delete</button>
                                            <button className="conclude" onClick={() => handleTaskCompletion(task.id)}>Concluir</button>
                                        </div>
                                    );
                                }
                                return null;
                            })}
                            <div className="task">
                                <input
                                    type="text"
                                    placeholder="Nova Tarefa"
                                    value={newTaskText}
                                    onChange={(e) => setNewTaskText(e.target.value)}
                                />
                                <button className="add-button" onClick={handleAddTask}>Adicionar</button>
                                <button className="delete-all-button" onClick={() => handleDeleteAllTasks('todo')}>erase all</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-done">
                <div className="tabela-done">
                    <div className="overlap-done">
                        <div className="rectangle-done" />
                        <div className="div-done" />
                        <div className="text-wrapper-done">Done</div>
                        <div className="dropdown-done">
                            <p>Congratulations! You have done {completedTasksCount} tasks</p>
                            {tasks.map(task => {
                                if (task.status === 'done') {
                                    return (
                                        <div key={task.id} className="task-done">
                                            <img src={Vector} alt="Vector" className="vector-image" />
                                            <span>{task.text}</span>
                                        </div>
                                    );
                                }
                                return null;
                            })}
                            <div className="task">
                                <button className="delete-all-button-done" onClick={() => handleDeleteAllTasks('done')}>erase all</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Todo;
