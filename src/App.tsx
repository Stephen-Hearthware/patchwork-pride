import React from "react";
import PatchworkBackground from "./components/PatchworkBackground";

function App() {
  return (
    <div className="relative min-h-screen">
      <header className="relative rounded-b-3xl bg-offwhite/70 py-8 shadow-md backdrop-blur-sm">
        <div className="pointer-events-none absolute inset-x-0 top-2 flex justify-between px-6 text-2xl">
          <span role="presentation">✨</span>
          <span role="presentation">✨</span>
        </div>
        <h1 className="text-center text-5xl font-extrabold tracking-tight text-coral drop-shadow-md">
          Patchwork Pride
        </h1>
      </header>
      <main className="py-6">
        <PatchworkBackground />
      </main>
    </div>
  );
}

export default App;
