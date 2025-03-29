import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Login'
import UsersList from "./UsersList";
import EditUser from "./EditUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} /> 
        <Route path="/users" element={<UsersList/>} /> 
        <Route path="/users/edit/:id" element={<EditUser />} />
      </Routes>
    </Router>  
  );
}

export default App;