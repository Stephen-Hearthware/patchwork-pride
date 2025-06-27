import React from "react";

interface FlagCardProps {
  name: string;
  image: string;
}

function FlagCard({ name, image }: FlagCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-white shadow transition-transform duration-200 hover:z-10 hover:scale-105">
      <img
        src={image}
        alt={`${name} flag`}
        className="h-32 w-full object-cover"
      />
      <p className="p-3 text-center text-sm font-medium text-gray-700">{name}</p>
    </div>
  );
}

export default FlagCard;
