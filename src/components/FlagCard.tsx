import React from "react";

interface FlagCardProps {
  name: string;
  image: string;
  onClick?: () => void;
}

function FlagCard({ name, image, onClick }: FlagCardProps) {
  return (
    <div
      className="mx-auto w-full max-w-xs overflow-hidden rounded-lg bg-white/90 p-5 shadow-md ring-1 ring-gray-200 transition-transform duration-200 hover:z-10 hover:scale-105 hover:shadow-lg"
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
