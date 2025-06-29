import React from "react";

interface FlagCardProps {
  name: string;
  image: string;
  onClick?: () => void;
}

function FlagCard({ name, image, onClick }: FlagCardProps) {
  return (
    <div
      className="mx-auto w-full max-w-xs overflow-hidden rounded-xl bg-white/80 p-5 shadow-sm ring-1 ring-gray-200 transition-transform duration-200 hover:z-10 hover:scale-105 hover:shadow-md"
      onClick={onClick}
    >
      <img
        src={image}
        alt={`${name} flag`}
        className="aspect-[3/2] w-full max-w-[240px] object-cover rounded-md mx-auto"
      />
      <p className="mt-2 text-center text-sm font-medium text-gray-700">{name}</p>
    </div>
  );
}

export default FlagCard;
