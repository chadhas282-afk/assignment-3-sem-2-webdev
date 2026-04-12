import React, { useState } from 'react';

const AddStudentForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || score === '') return;
    onAdd(name, score);
    setName('');
    setScore('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mb-8 bg-gray-800 p-5 rounded-md border border-gray-700">
      <input 
        type="text" 
        placeholder="Student Name" 
        className="flex-1 p-3 bg-gray-900 border border-gray-700 text-gray-100 rounded focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input 
        type="number" 
        placeholder="Score" 
        className="w-28 p-3 bg-gray-900 border border-gray-700 text-gray-100 rounded focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        required
      />
      <button 
        type="submit" 
        className="bg-transparent text-cyan-400 border border-cyan-500 px-6 py-3 rounded font-bold uppercase tracking-wider hover:bg-cyan-500 hover:text-gray-950 transition duration-300 shadow-md hover:shadow-cyan-500/50"
      >
        Add Student
      </button>
    </form>
  );
};

export default AddStudentForm;