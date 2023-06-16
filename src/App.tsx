import React from "react";
import "./App.css";
import ToDo from "./features/todo/ToDo";
import { NavLink, Route, Routes } from "react-router-dom";
import reduxImg from './img/Redux1.png';
import firebaseImg from './img/firebase1.png';
import TodosFirebase from "./features/todoFirebase/TodosFirebase";

function App(): JSX.Element {
  
  return (
    <div className="App">
      <nav className="navigation">
        <NavLink to={"todo-redux"}>
        <img className="navIco" src={reduxImg} alt="redux" />
        </NavLink>
        <NavLink to={"todo-firebase"}>
        <img className="navIco" src={firebaseImg} alt="redux" />
        </NavLink>
      </nav>
      <h1 className="h1title">To Do List</h1>
      <Routes>
      <Route path="/" element={<TodosFirebase />} />
      <Route path="todo-redux" element={<ToDo />} />
      <Route path="todo-firebase" element={<TodosFirebase />} />
      </Routes>
    </div>
  );
}

export default App;
