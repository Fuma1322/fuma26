"use client"

import React from 'react'
import { Cover } from '../ui/cover'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <h3 className="text-4xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700">
        <Cover>Technologies</Cover>
      </h3>
    </div>
  )
}

export default SkillText