import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';

interface Task {
  id: number;
  title: string;
  description: string;
  status: 'To Do' | 'In Progress' | 'Done';
}

const useTaskStore = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const updateTaskStatus = (id: number, status: 'To Do' | 'In Progress' | 'Done') => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, status } : task)));
  };

  return { tasks, addTask, updateTaskStatus };
};

export default useTaskStore;
