import React, { useState } from 'react';
import './index.css';
import Header from './components/Header.jsx';
import StudentTable from './components/StudentTable.jsx';
import AddStudentForm from './components/AddStudentForm.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Lalit Arya", score: 85 },
    { id: 2, name: "Garry Singh", score: 32 },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8 font-mono">
      <div className="max-w-4xl mx-auto bg-gray-900 shadow-xl rounded-lg p-6 border border-cyan-800/50 shadow-cyan-900/40">
        
        <Header title="Student Report Card" />

        <div className="mb-6 print:hidden">
          <label htmlFor="search" className="block text-xs uppercase tracking-widest text-cyan-500 mb-2">
            Search Database
          </label>
          <div className="relative">
            <input
              id="search"
              type="text"
              placeholder="Enter student name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-950 border border-cyan-900 rounded py-2 px-4 text-cyan-100 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-2 text-cyan-700 hover:text-cyan-400"
              >
                ×
              </button>
            )}
          </div>
          <p className="text-[10px] text-gray-500 mt-1">
            Showing {filteredStudents.length} of {students.length} students
          </p>
        </div>

        <AddStudentForm onAdd={addStudent} />

        <StudentTable 
          students={filteredStudents} 
          onUpdate={updateScore} 
        />

        <Footer students={students} />

        <button 
          onClick={() => window.print()} 
          className="mt-6 w-full py-3 bg-cyan-600/20 border border-cyan-500 text-cyan-400 font-bold rounded hover:bg-cyan-500 hover:text-white transition-all print:hidden"
        >
          GENERATE PRINTABLE REPORT
        </button>
      </div>
    </div>
  );
};

export default App;