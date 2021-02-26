import './App.css';
import React from 'react';
import StudentList from './Student/Studentlist';
import AddStudent from './Student/Addstudent';
import Editstudent from './Student/Editstudent';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navheader">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><Link to={'/Addstudent'} className="nav-link">Addstudent</Link></li>
              <li className="nav-item"><Link to={'/Studentlist'} className="nav-link">Student List</Link></li>              
            </ul>
          </div>
        </nav><br />
        <Switch>
          <Route exact path='/AddStudent' component={AddStudent} />
          <Route path='/Editstudent/:id' component={Editstudent} />
          <Route path='/Studentlist' component={StudentList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

