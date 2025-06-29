import React from "react";
import FlagGrid from "./components/FlagGrid";

function App() {
  return (
    <div className="relative min-h-screen bg-[radial-gradient(ellipse_at_top_left,rgba(255,237,249,0.7),rgba(224,231,255,0.7))]">
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay" />
      <header className="relative rounded-b-3xl bg-white/70 py-8 shadow-md backdrop-blur-sm">
        <div className="pointer-events-none absolute inset-x-0 top-2 flex justify-between px-6 text-2xl">
          <span role="presentation">✨</span>
          <span role="presentation">✨</span>
        </div>
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
