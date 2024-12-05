import React from 'react'

export default function Something() {
  return (
      <video
        className="w-full h-auto"
        preload="false"
        playsInline
        loop
        muted
        autoPlay
        src="/encryption.webm"
      />
  )
}
