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
        className="max-w-md space-y-4 rounded-xl bg-white/80 p-6 shadow-lg ring-1 ring-gray-300"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={flag.image}
          alt={`${flag.name} flag large`}
          className="mx-auto w-full rounded"
        />
        <h2 className="text-center text-xl font-semibold">{flag.name}</h2>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default FlagModal;
