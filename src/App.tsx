import React from "react";
import FlagGrid from "./components/FlagGrid";

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,rgba(255,237,249,0.7),rgba(224,231,255,0.7))]">
      <header className="rounded-b-3xl bg-white/70 py-8 shadow-md backdrop-blur-sm">
        <h1 className="mb-8 text-center text-5xl font-extrabold tracking-tight text-indigo-700">
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
