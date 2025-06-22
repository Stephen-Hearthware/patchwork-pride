import React from "react";

interface FlagCardProps {
  name: string;
}

function FlagCard({ name }: FlagCardProps) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow">
      <div className="h-24 rounded bg-gray-200" />
      <p className="mt-2 text-center text-sm font-medium text-gray-700">
        {name}
      </p>
    </div>
  );
}

export default FlagCard;
