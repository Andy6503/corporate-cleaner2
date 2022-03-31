import Homepage from "./components/Homepage"
import {Route, Redirect} from 'react-router-dom'
import NavBar from './components/NavBar.js'
import CompanyChart from './components/CompanyChart'
import AccountDetails from './components/AccountDetails.js'
import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import './App.css';

function App() {
   const [employees, setEmployees] = useState([]);

  useEffect(()=> {
    fetch("http://localhost:9292/employees")
    .then(res => res.json())
    .then(employees => {
      setEmployees(employees)
    })
  }, []);

 
  
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/">
         <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Homepage />
      </Route>
      <Route path="/your-company">
        <CompanyChart employees={employees} />
      </Route>
      <Route path="/account-details">
        <AccountDetails />
      </Route>
    </div>
  );
  // Everything up is what is rendered when user visits page and where the navbar routes the user to
}

export default App;
