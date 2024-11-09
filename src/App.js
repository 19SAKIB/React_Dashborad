import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Dashboard from './Dashboard.js'; 
import Sidebar from './Component/Sidebar';
import './App.css';
import Navbar from './Component/Navbar.js';

 
function App() {
  return (
    <>
     <div className='App'>
       <Navbar/>         
       <div className='content'>
       <Sidebar />
      <Dashboard />
      </div>
     </div>  
    </>
  );
}

export default App;