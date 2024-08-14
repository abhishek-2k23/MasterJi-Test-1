import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';


function ProfileCard() {
    const [userData, setUserData] = useState(null);

    const loadUser = async() => {
    const res = await fetch('https://api.freeapi.app/api/v1/public/randomusers/user/random');
    const userdata = await res.json();

    //set the user data
    setUserData(userdata?.data);
    console.log(userdata);
}
    useEffect(() => {
        loadUser();
    },[])

    if(userData === null){
        return(
            <div className='text-white'>Loading</div>
        )
    }
  return (
    <div className='text-black text-opacity-70 w-[358px] bg-[#B6B3F3] h-[610px] border-8  border-white p-4 rounded-xl flex flex-col'>
            <div className='flex justify-between items-center'>
                <div>Ar</div>
                <div className='w-[117px] h-[22px] text-center'>
                    <p >Profile Overview</p>
                </div>
                <div>re</div>
            </div>

            {/* image  */}
            <div className=' flex justify-center items-center w-full'>
                <img src={userData?.picture?.medium}  alt='profile pic' className='rounded-full w-[100px] h-[100px] pt-[189px]'/>
            </div>

            {/* name  */}
            <div className=' w-[137px] h-[30px] '>
                <p className=''>{userData?.name?.first + ' ' + userData?.name?.last} </p>
            </div>
    </div>
  )
}

export default ProfileCard