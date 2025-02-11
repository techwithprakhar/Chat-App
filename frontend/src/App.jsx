import React from "react";
import Home from "./Home";

const App = () => {
  return (
    <div className="bg-gray-500 h-screen flex flex-col">
      <header className="p-4 bg-gray-700 text-white text-center font-bold text-2xl shadow-md">
        Chat App
      </header>
      <div className="flex-1">
        <Home />
      </div>
    </div>
  );
};

export default App;

