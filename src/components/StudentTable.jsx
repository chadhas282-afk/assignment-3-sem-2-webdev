import React from 'react';
import StudentRow from './StudentRow';

const StudentTable = ({ students, onUpdate }) => {
  return (
    <div className="overflow-x-auto rounded border border-gray-700">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-800 text-gray-300 uppercase text-sm tracking-wider">
            <th className="p-4 border-b border-gray-700">Name</th>
            <th className="p-4 border-b border-gray-700">Score</th>
            <th className="p-4 border-b border-gray-700 text-center">Status</th>
            <th className="p-4 border-b border-gray-700 text-center">Update</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <StudentRow 
              key={student.id} 
              student={student} 
              onUpdate={onUpdate} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;