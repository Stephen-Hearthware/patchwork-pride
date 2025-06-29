import React from "react";
import FlagGrid from "./components/FlagGrid";
import PatchworkBackground from "./components/PatchworkBackground";

function App() {
  return (
    <div className="relative min-h-screen">
      <PatchworkBackground />
      <div className="pointer-events-none absolute" />
      <header className="relative rounded-b-3xl bg-offwhite/70 py-8 shadow-md backdrop-blur-sm">
        <div className="pointer-events-none absolute inset-x-0 top-2 flex justify-between px-6 text-2xl">
          <span role="presentation">✨</span>
          <span role="presentation">✨</span>
        </div>
        <h1 className="text-center text-5xl font-extrabold tracking-tight text-coral">
          Patchwork Pride
        </h1>
      </header>
      <main className="py-12">
        <FlagGrid />
      </main>
    </div>
  );
}

export default App;
