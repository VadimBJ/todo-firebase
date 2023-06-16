import React from "react";
import "./App.css";
import ToDo from "./features/todo/ToDo";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import reduxImg from "./img/Redux.png";
import firebaseImg from "./img/firebase.png";
import TodosFirebase from "./features/todoFirebase/TodosFirebase";

function App(): JSX.Element {
  return (
    <div className="App">
      <nav className="navigation">
        <NavLink to={"todo--redux"}>
          <img className="navIco" src={reduxImg} alt="redux" />
        </NavLink>
        <NavLink to={"todo-firebase"}>
          <img className="navIco" src={firebaseImg} alt="redux" />
        </NavLink>
      </nav>
      <h1 className="h1title">To Do List</h1>
      <Outlet />
      <Routes>
        <Route path="todo--redux" element={<ToDo />} />
        <Route path="todo-firebase" element={<TodosFirebase />} />
        <Route path="*" element={<TodosFirebase />} />
      </Routes>
    </div>
  );
}

export default App;
