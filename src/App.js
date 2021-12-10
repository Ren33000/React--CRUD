// import './App.css';
import React from 'react';
import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import EditUser from './components/EditUser';
import AddUser from './components/AddUser';


function App() {
  return (
    <div className="App">
      <Router> 
        <h1>Nav</h1>
        <Routes>
          <Route path ="/" component= {Home} />
          <Route path ="/add" component= {AddUser} />
          <Route path ="/edit/:id" component= {EditUser}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
