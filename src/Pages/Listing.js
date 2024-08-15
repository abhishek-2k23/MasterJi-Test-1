import React from 'react'
import catsBG from '../Asset/catsBG.png'
import CatsListing from '../Components/CatsListing'
import ChaiLogo from '../Components/ChaiLogo'
function Listing() {
  return (
    <div className='w-screen h-screen 'style={{
      backgroundImage: `url(${catsBG})`,
      backgroundSize: 'cover', // Cover the entire div
      backgroundPosition: 'center', // Center the image
    }}>

<div className='absolute inset-0 bg-gray-700 opacity-50'></div>
      <h1 className='text-gray-100 text-5xl font-dmsans font-semibold absolute left-10 top-4'>Cats around us</h1>
      <div className='w-full absolute top-16'>
        <CatsListing />
      </div>
      <div className='absolute top-2 right-2 '>
        <ChaiLogo />
      </div>
    </div>
  )
}

export default Listing