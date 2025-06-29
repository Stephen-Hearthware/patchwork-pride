import React from "react";

interface FlagCardProps {
  name: string;
  image: string;
  blurb: string;
  onClick?: () => void;
}

function FlagCard({ name, image, blurb, onClick }: FlagCardProps) {
  return (
    <div
      className="mx-auto w-full max-w-xs overflow-hidden rounded-3xl bg-offwhite/80 p-6 shadow-sm ring-2 ring-periwinkle ring-offset-2 ring-offset-coral border border-dashed border-periwinkle transition-transform duration-300 hover:z-10 hover:scale-105 hover:-rotate-1 hover:shadow-lg hover:ring-mustard focus:outline-none focus:ring-4 focus:ring-coral"
      onClick={onClick}
    >
      <img
        src={image}
        alt={`${name} flag`}
        className="aspect-[3/2] w-full max-w-[240px] object-cover rounded-md mx-auto"
      />
      <p className="mt-2 flex items-center justify-center text-center text-sm font-medium text-teal">
        <span aria-hidden="true" className="mr-1">✨</span>
        {name}
      </p>
      <p className="mt-1 text-center text-xs text-periwinkle">{blurb}</p>
    </div>
  );
}

export default FlagCard;
