import React from 'react';
import ProfileCard from '../Components/ProfileCard';
import RandomUserBG from '../Asset/RandomUserBG.png'
export default function Home() {
  return (
    <div className='h-screen w-screen bg-black flex justify-center items-center ' style={{
      backgroundImage: `url(${RandomUserBG})`,
      backgroundSize: 'cover', // Cover the entire div
      backgroundPosition: 'center', // Center the image
    }}>
      <ProfileCard />
    </div>
  );
}