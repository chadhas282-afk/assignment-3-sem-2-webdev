import React from 'react';

const Footer = ({ students }) => {
  const totalStudents = students.length;
  const totalPass = students.filter((s) => s.score >= 50).length;
  const totalFail = totalStudents - totalPass;
  
  const averageMarks = totalStudents > 0 
    ? (students.reduce((acc, s) => acc + s.score, 0) / totalStudents).toFixed(1) 
    : 0;

  return (
    <footer className="grid grid-cols-2 md:grid-cols-4 bg-gray-800/50 mt-6 py-6 px-4 gap-4 rounded-lg border border-cyan-800/30">
      <div className="flex flex-col items-center border-r border-gray-700">
        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">
          Total Students
        </span>
        <span className="text-2xl font-bold text-white">
          {totalStudents}
        </span>
      </div>

      <div className="flex flex-col items-center border-r border-gray-700">
        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">
          Total Pass
        </span>
        <span className="text-2xl font-bold text-cyan-400">
          {totalPass}
        </span>
      </div>

      <div className="flex flex-col items-center border-r border-gray-700">
        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">
          Total Fail
        </span>
        <span className="text-2xl font-bold text-pink-500">
          {totalFail}
        </span>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">
          Avg Marks
        </span>
        <span className="text-2xl font-bold text-yellow-400">
          {averageMarks}
        </span>
      </div>
    </footer>
  );
};

export default Footer;