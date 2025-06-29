import React, { useEffect } from "react";

interface FlagModalProps {
  flag: { name: string; image: string };
  description: string;
  onClose: () => void;
}

function FlagModal({ flag, description, onClose }: FlagModalProps) {
  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-md space-y-4 rounded-3xl border-2 border-dashed border-indigo-300 bg-white/80 p-6 shadow-xl ring-2 ring-indigo-200 ring-offset-2 ring-offset-pink-50"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="pointer-events-none absolute -top-3 right-4 text-xl" role="presentation">✨</span>
        <img
          src={flag.image}
          alt={`${flag.name} flag large`}
          className="mx-auto w-full rounded"
        />
        <h2 className="text-center text-2xl font-bold text-indigo-800">{flag.name}</h2>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default FlagModal;
