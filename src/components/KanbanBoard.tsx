import React from 'react';
import TaskCard from './TaskCard';

interface Task {
  id: number;
  title: string;
  description: string;
  status: 'To Do' | 'In Progress' | 'Done';
}

interface KanbanBoardProps {
  tasks: Task[];
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ tasks }) => {
  const columns = {
    'To Do': tasks.filter(task => task.status === 'To Do'),
    'In Progress': tasks.filter(task => task.status === 'In Progress'),
    'Done': tasks.filter(task => task.status === 'Done'),
  };

  return (
    <div className="kanban-board">
      {Object.entries(columns).map(([status, tasks]) => (
        <div key={status} className="kanban-column">
          <h2 className="font-bold text-xl mb-2">{status}</h2>
          {tasks.map(task => (
            <TaskCard key={task.id} title={task.title} description={task.description} status={task.status} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
