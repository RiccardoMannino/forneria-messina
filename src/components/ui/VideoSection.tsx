import React from 'react'

export default function VideoSection({ src }: any) {
  return (
    <section className="w-full">
      <video
        playsInline
        disablePictureInPicture
        autoPlay
        muted
        loop
        controls={false}
        preload="none"
        className="h-screen w-full object-cover brightness-[0.40]"
      >
        <source src={src} type="video/mp4" />
      </video>
    </section>
  )
}
