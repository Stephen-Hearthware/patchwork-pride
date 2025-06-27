import React from "react";
import FlagGrid from "./components/FlagGrid";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-indigo-100">
      <header>
        <h1 className="mt-8 mb-4 text-center text-4xl font-bold">Patchwork Pride</h1>
      </header>
      <main>
        <FlagGrid />
      </main>
    </div>
  );
}

export default App;
