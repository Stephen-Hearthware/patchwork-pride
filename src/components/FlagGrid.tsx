import React, { useState } from "react";
import FlagCard from "./FlagCard";
import FlagModal from "./FlagModal";
import flagDetails from "../data/flagDetails";

const placeholderFlags = [
  { id: 1, name: "Rainbow", image: "/flags/rainbow.svg" },
  { id: 2, name: "Transgender", image: "/flags/transgender.svg" },
  { id: 3, name: "Bisexual", image: "/flags/bisexual.svg" },
  { id: 4, name: "Asexual", image: "/flags/asexual.svg" },
  { id: 5, name: "Pansexual", image: "/flags/pansexual.svg" },
  { id: 6, name: "Non-binary", image: "/flags/non-binary.svg" },
];

function FlagGrid() {
  const [selectedFlag, setSelectedFlag] = useState<{
    name: string;
    image: string;
  } | null>(null);

  return (
    <>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {placeholderFlags.map((flag) => (
          <FlagCard
            key={flag.id}
            name={flag.name}
            image={flag.image}
            onClick={() => setSelectedFlag(flag)}
          />
        ))}
      </div>
      {selectedFlag && (
        <FlagModal
          flag={selectedFlag}
          description={flagDetails[selectedFlag.name] ?? ""}
          onClose={() => setSelectedFlag(null)}
        />
      )}
    </>
  );
}

export default FlagGrid;
