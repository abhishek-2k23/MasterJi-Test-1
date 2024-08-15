import React from 'react'
import RandomJokes from '../Components/RandomJokes'
import ChaiLogo from '../Components/ChaiLogo'
import twitter from '../Asset/twitter.png'
function Jokes() {
  return (
    <div className='w-screen h-screen 'style={{
      backgroundImage: `url(${twitter})`,
      backgroundSize: 'cover', // Cover the entire div
      backgroundPosition: 'center', // Center the image
    }}>
      
<div className='absolute inset-0 bg-gray-500 opacity-50'></div>
      <div className='w-full h-full flex justify-center items-center z-10'>
        <RandomJokes />
      </div>
      <div className='absolute bottom-2 right-2 z-10'>
        <ChaiLogo />
      </div>
    </div>
  )
}

export default Jokes