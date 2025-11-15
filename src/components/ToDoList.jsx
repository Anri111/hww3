import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text }]);
    setText("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter a task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-grow px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:outline-none"
        />
        <button
          onClick={addTodo}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg"
          >
            <span>{todo.text}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              ✖
            </button>
          </li>
        ))}
        {todos.length === 0 && (
          <p className="text-gray-500 dark:text-gray-400 text-center">
            No tasks yet. Add one above!
          </p>
        )}
      </ul>
    </div>
  );
}
