import React from 'react'

function PatchworkBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 grid grid-cols-6 grid-rows-6 gap-1 md:gap-2 p-2"
    >
      <div className="col-start-1 col-span-3 row-start-1 row-span-2 rounded-lg border border-dashed border-coral bg-coral" />
      <div className="col-start-4 col-span-3 row-start-1 row-span-3 rounded-lg border border-dashed border-teal bg-teal" />
      <div className="col-start-1 col-span-2 row-start-3 row-span-2 rounded-lg border border-dashed border-periwinkle bg-periwinkle" />
      <div className="col-start-3 col-span-2 row-start-3 row-span-1 rounded-lg border border-dashed border-mustard bg-mustard" />
      <div className="col-start-3 col-span-3 row-start-4 row-span-2 rounded-lg border border-dashed border-periwinkle bg-offwhite/50" />
      <div className="col-start-6 col-span-1 row-start-4 row-span-2 rounded-lg border border-dashed border-coral bg-coral" />
    </div>
  )
}

export default PatchworkBackground
