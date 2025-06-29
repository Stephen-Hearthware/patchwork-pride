import React from "react";
import FlagGrid from "./components/FlagGrid";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <header className="rounded-b-2xl bg-white/60 py-6 shadow-sm backdrop-blur-sm">
        <h1 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-indigo-800">
          Patchwork Pride
        </h1>
      </header>
      <main className="pb-12">
        <FlagGrid />
      </main>
    </div>
  );
}

export default App;
