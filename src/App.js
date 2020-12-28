import React from "react";
import "./styles.css";

export default function App() {
  const username = "";
  const todos = [
    { id: 1, title: "buy groceries" },
    { id: 2, title: "buy newspaper" }
  ];

  return (
    <div className="App">
      <h1>Part 1: Rendering</h1>

      {username ? <h2>Hello, {username}</h2> : <h2>Hello, Stranger</h2>}

      {username && <p>logout</p>}

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
