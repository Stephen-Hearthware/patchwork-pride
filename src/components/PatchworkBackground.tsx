import React, { useState } from 'react'
import FlagCard from './FlagCard'
import FlagModal from './FlagModal'
import flagDetails from '../data/flagDetails'

interface Patch {
  class: string
  color: string
  border: string
  name: string
  image: string
}

const patches: Patch[] = [
  {
    class:
      'col-span-3 row-span-2 md:col-start-1 md:col-span-3 md:row-start-1 md:row-span-2',
    color: 'bg-coral',
    border: 'border-coral',
    name: 'Rainbow',
    image: '/flags/rainbow.svg',
  },
  {
    class:
      'col-span-3 row-span-3 md:col-start-4 md:col-span-3 md:row-start-1 md:row-span-3',
    color: 'bg-teal',
    border: 'border-teal',
    name: 'Transgender',
    image: '/flags/transgender.svg',
  },
  {
    class:
      'col-span-2 row-span-2 md:col-start-1 md:col-span-2 md:row-start-3 md:row-span-2',
    color: 'bg-periwinkle',
    border: 'border-periwinkle',
    name: 'Bisexual',
    image: '/flags/bisexual.svg',
  },
  {
    class:
      'col-span-2 row-span-1 md:col-start-3 md:col-span-1 md:row-start-3 md:row-span-1',
    color: 'bg-mustard',
    border: 'border-mustard',
    name: 'Asexual',
    image: '/flags/asexual.svg',
  },
  {
    class:
      'col-span-3 row-span-2 md:col-start-3 md:col-span-3 md:row-start-4 md:row-span-2',
    color: 'bg-offwhite',
    border: 'border-periwinkle',
    name: 'Pansexual',
    image: '/flags/pansexual.svg',
  },
  {
    class:
      'col-span-1 row-span-2 md:col-start-6 md:col-span-1 md:row-start-4 md:row-span-2',
    color: 'bg-coral',
    border: 'border-coral',
    name: 'Non-binary',
    image: '/flags/non-binary.svg',
  },
]

function PatchworkBackground() {
  const [selected, setSelected] = useState<Patch | null>(null)

  return (
    <div
      className="grid auto-flow-dense grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))] auto-rows-[minmax(120px,_1fr)] gap-2 p-2 sm:gap-3 sm:p-4 md:p-2 md:auto-flow-row md:grid-cols-6 md:grid-rows-6 md:auto-rows-auto"
    >
      {patches.map((patch) => (
        <div
          key={patch.name}
          className={`${patch.class} flex items-center justify-center rounded-lg border border-dashed ${patch.border} ${patch.color} p-2 sm:p-3 md:p-2 min-h-[120px]`}
        >
          <FlagCard
            name={patch.name}
            image={patch.image}
            blurb={flagDetails[patch.name].blurb}
            onClick={() => setSelected(patch)}
          />
        </div>
      ))}
      {selected && (
        <FlagModal
          flag={{ name: selected.name, image: selected.image }}
          description={flagDetails[selected.name].description}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  )
}

export default PatchworkBackground
