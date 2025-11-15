import React from "react";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="w-full max-w-md flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">Tudu App ✅</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition"
      >
        {darkMode ? "🌞 Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}
