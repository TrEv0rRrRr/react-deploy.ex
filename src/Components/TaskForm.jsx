import React from 'react'
import { useState, useContext } from 'react';
import { TaskContext } from '../Context/TaskContext';

function TaskForm() {
  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState(" ");
  const { createTask } = useContext(TaskContext)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({title, description});
    setTitle(" ")
    setDescription(" ")
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>

        <input
          type="text"
          placeholder='Escribe tu tarea.'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate-500 p-3 w-full mb-2 outline-none placeholder:text-slate-300"
        />

        <textarea
        placeholder='Escribe la descripción.'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-500 p-3 w-full mb-2 outline-none placeholder:text-slate-300"
        ></textarea>

        <button className="bg-indigo-500 px-3 py-1 text-white outline-none">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm