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
].map((flag) => ({
  ...flag,
  blurb: flagDetails[flag.name].blurb,
}));

function FlagGrid() {
  const [selectedFlag, setSelectedFlag] = useState<{
    name: string;
    image: string;
    blurb: string;
  } | null>(null);

  return (
    <>
      <div className="mx-auto max-w-4xl rounded-3xl border-2 border-dashed border-indigo-200 bg-white/50 p-6 shadow-inner">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {placeholderFlags.map((flag) => (
          <FlagCard
            key={flag.id}
            name={flag.name}
            image={flag.image}
            blurb={flag.blurb}
            onClick={() => setSelectedFlag(flag)}
          />
        ))}
        </div>
      </div>
      {selectedFlag && (
        <FlagModal
          flag={selectedFlag}
          description={flagDetails[selectedFlag.name].description}
          onClose={() => setSelectedFlag(null)}
        />
      )}
    </>
  );
}

export default FlagGrid;
