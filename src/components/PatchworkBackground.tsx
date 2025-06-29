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
    class: 'col-start-1 col-span-3 row-start-1 row-span-2',
    color: 'bg-coral',
    border: 'border-coral',
    name: 'Rainbow',
    image: '/flags/rainbow.svg',
  },
  {
    class: 'col-start-4 col-span-3 row-start-1 row-span-3',
    color: 'bg-teal',
    border: 'border-teal',
    name: 'Transgender',
    image: '/flags/transgender.svg',
  },
  {
    class: 'col-start-1 col-span-2 row-start-3 row-span-2',
    color: 'bg-periwinkle',
    border: 'border-periwinkle',
    name: 'Bisexual',
    image: '/flags/bisexual.svg',
  },
  {
    class: 'col-start-3 col-span-2 row-start-3 row-span-1',
    color: 'bg-mustard',
    border: 'border-mustard',
    name: 'Asexual',
    image: '/flags/asexual.svg',
  },
  {
    class: 'col-start-3 col-span-3 row-start-4 row-span-2',
    color: 'bg-offwhite',
    border: 'border-periwinkle',
    name: 'Pansexual',
    image: '/flags/pansexual.svg',
  },
  {
    class: 'col-start-6 col-span-1 row-start-4 row-span-2',
    color: 'bg-coral',
    border: 'border-coral',
    name: 'Non-binary',
    image: '/flags/non-binary.svg',
  },
]

function PatchworkBackground() {
  const [selected, setSelected] = useState<Patch | null>(null)

  return (
    <div className="grid grid-cols-6 grid-rows-6 gap-1 p-2 md:gap-2">
      {patches.map((patch) => (
        <div
          key={patch.name}
          className={`${patch.class} flex items-center justify-center rounded-lg border border-dashed ${patch.border} ${patch.color} p-2`}
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
