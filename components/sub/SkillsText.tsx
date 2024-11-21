"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromRight} from '@/utils/motion'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
           Skills
        </motion.div>
    </div>
  )
}

export default SkillText