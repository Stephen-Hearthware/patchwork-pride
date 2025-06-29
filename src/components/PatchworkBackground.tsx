import React from 'react'

function PatchworkBackground() {
  const patches = [
    {
      class: 'col-start-1 col-span-3 row-start-1 row-span-2',
      src: '/flags/rainbow.svg',
      border: 'border-coral',
    },
    {
      class: 'col-start-4 col-span-3 row-start-1 row-span-3',
      src: '/flags/transgender.svg',
      border: 'border-teal',
    },
    {
      class: 'col-start-1 col-span-2 row-start-3 row-span-2',
      src: '/flags/bisexual.svg',
      border: 'border-periwinkle',
    },
    {
      class: 'col-start-3 col-span-2 row-start-3 row-span-1',
      src: '/flags/asexual.svg',
      border: 'border-mustard',
    },
    {
      class: 'col-start-3 col-span-3 row-start-4 row-span-2',
      src: '/flags/pansexual.svg',
      border: 'border-periwinkle',
    },
    {
      class: 'col-start-6 col-span-1 row-start-4 row-span-2',
      src: '/flags/non-binary.svg',
      border: 'border-coral',
    },
  ]

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 grid grid-cols-6 grid-rows-6 gap-1 md:gap-2 p-2"
    >
      {patches.map((patch) => (
        <div
          key={patch.src}
          className={`${patch.class} relative rounded-lg border border-dashed ${patch.border} overflow-hidden`}
        >
          <img src={patch.src} alt="" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      ))}
    </div>
  )
}

export default PatchworkBackground
