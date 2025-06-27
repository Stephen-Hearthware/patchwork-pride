import React from "react";

interface FlagCardProps {
  name: string;
  image: string;
}

function FlagCard({ name, image }: FlagCardProps) {
  return (
    <div className="overflow-hidden rounded-md border bg-white shadow transition-transform duration-200 hover:scale-105">
      <img
        src={image}
        alt={`${name} flag`}
        className="h-40 w-full rounded-t-md object-cover"
      />
      <p className="p-4 text-center text-sm font-medium text-gray-700">{name}</p>
    </div>
  );
}

export default FlagCard;
