import React from 'react';

const StudentRow = ({ student, onUpdate }) => {
  const isPass = student.score >= 40;

  return (
    <tr className="border-b border-gray-700 hover:bg-gray-800/50 transition">
      <td className="p-4 text-gray-100 font-medium">{student.name}</td>
      <td className={`p-4 font-mono font-bold ${isPass ? 'text-emerald-400' : 'text-rose-400'}`}>
        {student.score}
      </td>
      <td className="p-4 text-center">
        <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
          isPass 
            ? 'bg-emerald-950/50 text-emerald-400 border border-emerald-500 shadow-lg shadow-emerald-500/20' 
            : 'bg-rose-950/50 text-rose-400 border border-rose-500 shadow-lg shadow-rose-500/20'
        }`}>
          {isPass ? 'PASS' : 'FAIL'}
        </span>
      </td>
      <td className="p-4 text-center">
        <input 
          type="number" 
          className="w-20 p-2 bg-gray-900 border border-gray-700 text-cyan-300 rounded text-center focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
          value={student.score}
          onChange={(e) => onUpdate(student.id, e.target.value)}
          min="0"
          max="100"
        />
      </td>
    </tr>
  );
};

export default StudentRow;