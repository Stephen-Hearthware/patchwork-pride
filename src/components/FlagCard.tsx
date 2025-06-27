import React from "react";

interface FlagCardProps {
  name: string;
  image: string;
}

function FlagCard({ name, image }: FlagCardProps) {
  return (
    <div className="overflow-hidden rounded-md bg-white p-4 shadow transition-transform duration-200 hover:z-10 hover:scale-105">
      <img
        src={image}
        alt={`${name} flag`}
        className="mb-2 h-32 w-full rounded-md object-cover"
      />
      <p className="text-center text-sm font-medium text-gray-700">{name}</p>
    </div>
  );
}

export default FlagCard;
