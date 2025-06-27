import React from "react";
import FlagCard from "./FlagCard";

const placeholderFlags = [
  { id: 1, name: "Rainbow", image: "/flags/rainbow.svg" },
  { id: 2, name: "Transgender", image: "/flags/transgender.svg" },
  { id: 3, name: "Bisexual", image: "/flags/bisexual.svg" },
  { id: 4, name: "Asexual", image: "/flags/asexual.svg" },
  { id: 5, name: "Pansexual", image: "/flags/pansexual.svg" },
  { id: 6, name: "Non-binary", image: "/flags/non-binary.svg" },
];

function FlagGrid() {
  return (
    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-6 py-8 md:grid-cols-2 lg:grid-cols-3">
      {placeholderFlags.map((flag) => (
        <FlagCard key={flag.id} name={flag.name} image={flag.image} />
      ))}
    </div>
  );
}

export default FlagGrid;
