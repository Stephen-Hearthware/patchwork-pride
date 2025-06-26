import React from "react";
import FlagCard from "./FlagCard";

const placeholderFlags = [
  { id: 1, name: "Rainbow" },
  { id: 2, name: "Transgender" },
  { id: 3, name: "Bisexual" },
  { id: 4, name: "Asexual" },
  { id: 5, name: "Pansexual" },
  { id: 6, name: "Non-binary" },
];

function FlagGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {placeholderFlags.map((flag) => (
        <FlagCard key={flag.id} flag={flag} />
      ))}
    </div>
  );
}

export default FlagGrid;
