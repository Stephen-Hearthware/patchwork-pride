import React from "react";

interface FlagCardProps {
  name: string;
  image: string;
  onClick?: () => void;
}

function FlagCard({ name, image, onClick }: FlagCardProps) {
  return (
    <div
      className="mx-auto w-full max-w-xs overflow-hidden rounded-md bg-white p-4 shadow transition-transform duration-200 hover:z-10 hover:scale-105"
      onClick={onClick}
    >
      <img
        src={image}
        alt={`${name} flag`}
        className="aspect-[3/2] w-full max-w-[240px] object-cover rounded-md mx-auto"
      />
      <p className="text-center text-sm font-medium text-gray-700">{name}</p>
    </div>
  );
}

export default FlagCard;
