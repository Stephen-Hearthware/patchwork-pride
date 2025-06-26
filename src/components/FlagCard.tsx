import React from "react";

export interface Flag {
  name: string;
  image?: string;
}

interface FlagCardProps {
  flag: Flag;
}

function FlagCard({ flag }: FlagCardProps) {
  return (
    <div className="m-2 rounded-lg border bg-white p-4 transition-transform hover:scale-105 hover:shadow-lg">
      <p className="text-center font-medium">{flag.name}</p>
    </div>
  );
}

export default FlagCard;
