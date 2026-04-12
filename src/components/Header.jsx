import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="border-b border-gray-700 pb-4 mb-8 text-center">
      <h1 className="text-4xl font-extrabold text-cyan-400 uppercase tracking-widest style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.7)' }}">
        {title}
      </h1>
    </header>
  );
};

export default Header;