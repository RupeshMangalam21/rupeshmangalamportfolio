import React from 'react';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;
