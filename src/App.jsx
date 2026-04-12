import React, { useState } from 'react';
import Header from './components/Header';
import StudentTable from './components/StudentTable';
import AddStudentForm from './components/AddStudentForm';

const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Lalit Arya", score: 85 },
    { id: 2, name: "Garry Singh", score: 32 },
  ]);

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: parseInt(score),
    };
    setStudents([...students, newStudent]);
  };

  const updateScore = (id, newScore) => {
    setStudents(students.map(s => 
      s.id === id ? { ...s, score: parseInt(newScore) || 0 } : s
    ));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
       {/* <div className="max-w-4xl mx-auto bg-gray-900 shadow-xl rounded-lg p-6 border border-cyan-800/50 shadow-cyan-900/40"> */}
         {/* <Header title="Student Report Card" /> */}
         {/* <AddStudentForm onAdd={addStudent} /> */}
         {/* <StudentTable students={students} onUpdate={updateScore} /> */}
       </div>
     </div>
  );
};

// export default App;