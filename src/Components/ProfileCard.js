import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { IoCallOutline } from "react-icons/io5"
import { SlLocationPin } from "react-icons/sl"
import { FaArrowLeft } from "react-icons/fa"
import { IoMdRefresh } from "react-icons/io"
import { LuCopyright } from "react-icons/lu"
import { formatDate } from "../utility/helpers.js"
import Flag from "react-flagkit"
import ChaiLogo from "./ChaiLogo.js"
import RandomUserShimmer from "./Shimmer/RandomUserShimmer.js"

function ProfileCard() {
  const [userData, setUserData] = useState(null)
  const [countryCode, setCountryCode] = useState("")
  const [loading, setLoading] = useState(false);

  const loadUser = async () => {

    setLoading(true);
    const res = await fetch(
      "https://api.freeapi.app/api/v1/public/randomusers/user/random",
    )
    const userdata = await res.json()

    //set the user data
    setUserData(userdata?.data)
    setLoading(false);
    if (userData?.data) {
        const code = getCountryCode(userData?.location?.country)
        console.log(code);
        setCountryCode(code)
    }

  }

  const loadNewTab = () => {
    window.open("about:blank", "_blank")
  }

const getCountryCode = async(countryName) =>{
    
    const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const data = await res.json();
    console.log(data[0]?.cca2)
    setCountryCode(data[0]?.cca2);
}
  useEffect(() => {
    loadUser()
  }, [])

  useEffect(() => {
    if(userData){

        getCountryCode(userData?.location?.country);
    }
  }, [userData])

  if (userData === null || loading) {
    return <RandomUserShimmer/>
  }
  return (
    <div className="text-black text-opacity-70 w-[358px] bg-[#B6B3F3] h-[610px] border-8  border-white p-4 rounded-xl flex flex-col items-center gap-5 font-dmsans">
      <div className="flex justify-between items-center w-full font-semibold ">
        <div>
          <FaArrowLeft className="cursor-pointer" onClick={loadNewTab}/>
        </div>
        <div className="h-[22px] text-center font-dmserif font-[500]">
          <p>Profile Overview</p>
        </div>
        <div onClick={loadUser}>
          <IoMdRefresh className="text-lg cursor-pointer" />
        </div>
      </div>

      {/* image  */}
      <div className="relative w-[100px] h-[100px] ">
        <img
          src={userData?.picture?.medium}
          alt="profile pic"
          className="rounded-full w-[100px] h-[100px] shadow-md"
        />
        <div className="absolute -right-3 -top-2 bg-black w-[22px] h-[15px] rounded-xl text-white">
          <p className="text-[10px] text-center">
            {userData?.name?.title.substring(0, 2)}
          </p>
        </div>
      </div>

      {/* name  */}
      <div>
        <p className="text-2xl font-[400] font-donegal">
          {userData?.name?.first + " " + userData?.name?.last}{" "}
        </p>
      </div>
      {/* username  */}
      <div>
        <p className="text-xs font-[400]">{userData?.login?.username} </p>
      </div>

      {/* button */}
      <div className="flex gap-1 items-center">
        {/* location */}

        <div className="bg-black w-[22px] h-[22px] rounded-full text-white flex justify-center items-center">
          <SlLocationPin onClick={loadNewTab} className="cursor-pointer"/>
        </div>
        <div>
          <p className="w-[37px] h-[12px] text-[9px] text-center font-[500] cursor-pointer" onClick={loadNewTab}>
            Location
          </p>
        </div>

        {/* callme button  */}
        <div className="bg-black w-[22px] h-[22px] rounded-full text-white ml-3 flex justify-center items-center">
          <IoCallOutline onClick={loadNewTab} className="cursor-pointer"/>
        </div>
        <div>
          <p className="w-[37px] h-[12px] text-[9px] text-center font-[500] cursor-pointer" onClick={loadNewTab}>
            call me
          </p>
        </div>
      </div>

      {/* city & Nationality */}
      <div className="flex items-center  w-full">
        <div className="flex flex-col gap-1 w-[55%]">
          <div className="text-[9px] font-[400]">City</div>
          <div className="text-[18px] h-[25px] text-opacity-70 capitalize font-dmserif font-semibold">
            {userData?.location?.city}
          </div>
        </div>
        <div className="flex flex-col gap-1 ">
          <div className="text-[9px] font-[400] flex gap-1">
            <p>Nationality</p>
          </div>
          <div className="text-[18px]  h-[25px] text-opacity-70 capitalize font-dmserif font-semibold flex items-center gap-2">
            <div>
                
              <Flag country={countryCode} size={22} />
            </div>
            {countryCode}
          </div>
        </div>
      </div>
      <div className="flex items-center  w-full">
        <div className="flex flex-col gap-1 w-[55%]">
          <div className="text-[9px] font-[400]">Date of birth</div>
          <div className="text-[18px] h-[25px] text-opacity-70 capitalize font-dmserif font-semibold">
            {formatDate(userData?.dob?.date.substring(0, 10))}
          </div>
        </div>
        <div className="flex flex-col gap-1 ">
          <div className="text-[9px] font-[400]">Phone No.</div>
          <div className="text-[18px]  h-[25px] text-opacity-70 capitalize font-dmserif font-semibold">
            {userData?.phone}
          </div>
        </div>
      </div>

      <div className="flex items-center  w-full">
        <div className="flex flex-col gap-1 w-[55%]">
          <div className="text-[9px] font-[400]">Time Zone</div>
          <div className="text-[18px]  h-[25px] text-opacity-70 capitalize font-dmserif font-semibold">
            {userData?.location?.timezone?.offset}
          </div>
        </div>
        <div className="flex flex-col gap-1 ">
          <div className="text-[9px] font-[400]">Registered Since</div>
          <div className="text-[18px] h-[25px] text-opacity-70 capitalize font-dmserif font-semibold">
            {formatDate(userData?.registered?.date?.substring(0, 10))}
          </div>
        </div>
      </div>

      {/* footer  */}
      <div className="w-full flex justify-end items-end text-white">
        <div className="mr-8 flex  items-center gap-1 text-[8px] font-[700]">
          <LuCopyright />
          <p>chai aur code</p>
        </div>
        <ChaiLogo />
      </div>
    </div>
  )
}

export default ProfileCard
