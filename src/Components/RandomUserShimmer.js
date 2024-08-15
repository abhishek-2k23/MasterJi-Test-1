import React from 'react'

function RandomUserShimmer() {
  return (
    <div className="w-[358px] bg-[#555556] h-[610px] border-8  border-white p-4 rounded-xl flex flex-col items-center gap-5 font-dmsans">
        <div className="flex justify-between items-center w-full font-semibold ">
          <div className="h-[22px] w-24">
            {/* <FaArrowLeft className="cursor-pointer" onClick={loadNewTab}/> */} <div class="animate-pulse h-[22px] bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4"></div>
          </div>
          <div className="h-[22px] w-24">
            {/* <p>Profile Overview</p> */}<div class="animate-pulse h-[22px] bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4"></div>
          </div>
          <div className="h-[22px] w-24">
            {/* <IoMdRefresh className="text-lg cursor-pointer" /> */}<div class="animate-pulse h-[22px] bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4"></div>
          </div>
        </div>

        {/* image  */}
        <div className="relative w-[100px] h-[100px] ">
        <div class="animate-pulse rounded-full w-[100px] h-[100px] shadow-md bg-gray-300  dark:bg-gray-700"></div>
        <div class="animate-pulse absolute -right-3 -top-2 w-[22px] h-[15px] rounded-xl bg-gray-200 dark:bg-gray-700"></div>
          {/* <img
            src={userData?.picture?.medium}
            alt="profile pic"
            className="rounded-full w-[100px] h-[100px] shadow-md"
          />
          <div className="absolute -right-3 -top-2 bg-black w-[22px] h-[15px] rounded-xl text-white">
            <p className="text-[10px] text-center">
              {userData?.name?.title.substring(0, 2)}
            </p>
          </div> */}
        </div>

        {/* name  */}
        <div>.
        <div class="animate-pulse h-[22px] bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4"></div>
          {/* <p className="text-2xl font-[400] font-donegal">
            {userData?.name?.first + " " + userData?.name?.last}{" "}
          </p> */}
        </div>
        {/* username  */}
        <div>
        <div class="animate-pulse h-[22px] bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4"></div>
          {/* <p className="text-xs font-[400]">{userData?.login?.username} </p> */}
        </div>

        {/* button */}
        <div className="flex gap-1 items-center">
          {/* location */}
          <div class="animate-pulse w-[22px] h-[22px] rounded-full bg-gray-200 dark:bg-gray-700"></div>

          {/* <div className="bg-black w-[22px] h-[22px] rounded-full text-white flex justify-center items-center">
            <SlLocationPin onClick={loadNewTab} className="cursor-pointer"/>
          </div> */}
          <div> 
          <div class="animate-pulse w-[37px] h-[12px] bg-gray-200 rounded-full dark:bg-gray-700 mr-2"></div>

            {/* <p
              className="w-[37px] h-[12px] text-[9px] text-center font-[500] cursor-pointer"
              onClick={loadNewTab}
            >
              Location
            </p> */}
          </div>

          {/* callme button  */}
          <div class="animate-pulse w-[22px] h-[22px] rounded-full bg-gray-200 dark:bg-gray-700"></div>

          {/* <div className="bg-black w-[22px] h-[22px] rounded-full text-white ml-3 flex justify-center items-center">
            <IoCallOutline onClick={loadNewTab} className="cursor-pointer"/>
          </div> */}
          <div>
          <div class="animate-pulse w-[37px] h-[12px] bg-gray-200 rounded-full dark:bg-gray-700"></div>

            {/* <p
              className="w-[37px] h-[12px] text-[9px] text-center font-[500] cursor-pointer"
              onClick={loadNewTab}
            >
              call me
            </p> */}
          </div>
        </div>

        {/* city & Nationality */}
        <div className="flex items-center  w-full">
          <div className="animate-pulse flex flex-col gap-1 w-[55%]">
            {/* <div className="text-[9px] font-[400]">City</div> */}
            <div class="animate-pulse w-[37px] h-[12px] bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div class="animate-pulse w-[50px] h-[25px] bg-gray-200 rounded-full dark:bg-gray-700"></div>

            {/* <div className="text-[18px] h-[25px] text-opacity-70 capitalize font-dmserif font-semibold">
              {userData?.location?.city}
            </div> */}
          </div>
          <div className="flex flex-col gap-1 ">
          <div class="animate-pulse w-[37px] h-[12px] gap-1 bg-gray-200 rounded-full dark:bg-gray-700"></div>

            {/* <div className="text-[9px] font-[400] flex gap-1">
              <p>Nationality</p>
            </div> */}
            <div class="animate-pulse w-[37px] h-[25px] gap-2 bg-gray-200 dark:bg-gray-700"></div>

            {/* <div className="text-[18px]  h-[25px] text-opacity-70 capitalize font-dmserif font-semibold flex items-center gap-2">
              <div><Flag country={countryCode} size={22} /></div>
              {countryCode}
            </div> */}
          </div>
        </div>
        <div className="flex items-center  w-full">
          <div className="flex flex-col gap-1 w-[55%]">
          <div class="animate-pulse w-[37px] h-[12px] bg-gray-200 rounded-full dark:bg-gray-700"></div>

            {/* <div className="text-[9px] font-[400]">Date of birth</div> */}
            <div className="animate-pulse text-[18px] h-[25px] text-opacity-70 capitalize font-dmserif font-semibold">
              {/* {formatDate(userData?.dob?.date.substring(0, 10))} */}
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
          <div class="animate-pulse w-[37px] h-[12px] bg-gray-200 rounded-full dark:bg-gray-700"></div>

            {/* <div className="text-[9px] font-[400]">Phone No.</div> */}
            <div class="animate-pulse w-[90px] h-[25px] bg-gray-200 rounded-full dark:bg-gray-700"></div>

            {/* <div className="text-[18px]  h-[25px] text-opacity-70 capitalize font-dmserif font-semibold">
              {userData?.phone}
            </div> */}
          </div>
        </div>

        <div className="flex items-center  w-full">
          <div className="flex flex-col gap-1 w-[55%]">
          <div class="animate-pulse w-[37px] h-[12px] bg-gray-200 rounded-full dark:bg-gray-700"></div>

            {/* <div className="text-[9px] font-[400]">Time Zone</div> */}
            <div class="animate-pulse w-[50px] h-[25px] bg-gray-200 rounded-full dark:bg-gray-700"></div>

            {/* <div className="text-[18px]  h-[25px] text-opacity-70 capitalize font-dmserif font-semibold">
              {userData?.location?.timezone?.offset}
            </div> */}
          </div>
          <div className="flex flex-col gap-1 ">
          <div class="animate-pulse w-[80px] h-[18px] bg-gray-200 rounded-full dark:bg-gray-700"></div>

            {/* <div className="text-[9px] font-[400]">Registered Since</div> */}
            <div className="animate-pulse text-[18px] h-[25px] text-opacity-70 capitalize font-dmserif font-semibold">
              {/* {formatDate(userData?.registered?.date?.substring(0, 10))} */}
            </div>
          </div>
        </div>

        {/* footer  */}
        <div className="w-full flex justify-end items-end text-white">
          <div className="mr-8 flex  items-center gap-1 text-[8px] font-[700]">
          <div class="animate-pulse w-[37px] h-[16px] bg-gray-200 rounded-full dark:bg-gray-700"></div>

            {/* <LuCopyright /> */}
            <div class="animate-pulse w-[60px] h-[16px] bg-gray-200 rounded-full dark:bg-gray-700"></div>

            {/* <p>chai aur code</p> */}
          </div>
          <div class="animate-pulse w-[30px] h-[24px] bg-gray-200 rounded-full dark:bg-gray-700"></div>

          {/* <ChaiLogo /> */}
          
        </div>
      </div>
  )
}

export default RandomUserShimmer