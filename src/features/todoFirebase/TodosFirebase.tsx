import React, { useEffect, useState } from "react";
import {
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../api/firebase";
import { AiOutlineDelete } from "react-icons/ai";
import { smilesArr } from "./smiles";
import "./TodosFirebase.css";

export default function TodosFirebase(): JSX.Element {
  const [todos, setTodos] = useState<DocumentData[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [input, setInput] = useState("");
  const [showSmiles, setShowSmiles] = useState(false);
  const q = query(collection(db, "todos"), orderBy("timestamp", "desc"));
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setTodos(
        snapshot.docs.map((document: DocumentData) => ({
          id: document.id,
          item: document.data(),
        }))
      );
    });
  }, [input]);

  const addTodo = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    addDoc(collection(db, "todos"), {
      todo: input,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };
  console.log(smilesArr);

  return (
    <>
      <form onSubmit={addTodo} name="add_todo" className="todoFormFb">
        <div
          title="Click for smiles :)"
          className={showSmiles ? "smileTogle active" : "smileTogle"}
          onClick={() => setShowSmiles(!showSmiles)}
        >
          🙂
        </div>
        <input
          className="todoInput"
          type="text"
          value={input}
          required
          placeholder="Enter your task here.."
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="todoButton" type="submit">
          Add Task
        </button>
      </form>
      {showSmiles && (
        <div className="smileContainer">
          {smilesArr.map((smile, index) => {
            return (
              <div
                key={index}
                className="smile"
                onClick={() => {
                  setInput(input + smile);
                }}
              >
                {smile}
              </div>
            );
          })}
        </div>
      )}
      <div className="todoListContainer">
        {todos.map((el) => (
          <div key={el.id}>
            <button
              title="Delete task"
              className="deleteButton"
              type="button"
              onClick={() => {
                deleteDoc(doc(db, "todos", el.id));
              }}
            >
              <AiOutlineDelete />
            </button>{" "}
            <span className="task">{el.item.todo}</span>
          </div>
        ))}
      </div>
    </>
  );
}
