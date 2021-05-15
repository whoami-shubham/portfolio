import React from 'react';
import { HashRouter as Router,Route } from 'react-router-dom'
import Home from './views/home/Home';
import './App.css'
import Resume from './views/resume/Resume';
function App() {
  return (
    <Router>
        <Route exact path='/' component={Home}/>
        <Route exact path='/resume' component={Resume}/>
    </Router>
  );
}

export default App;
