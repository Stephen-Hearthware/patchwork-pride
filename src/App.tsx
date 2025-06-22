import React from "react";
import FlagGrid from "./components/FlagGrid";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-pink-500 to-purple-600 py-4 text-white">
        <h1 className="text-center text-2xl font-bold">Patchwork Pride</h1>
      </header>
      <main className="p-4">
        <FlagGrid />
      </main>
    </div>
  );
}

export default App;
