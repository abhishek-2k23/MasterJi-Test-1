import React from 'react'
import { LuCopyright } from "react-icons/lu"

function RandomJokesShimmer() {
  return (
    <div className="min-w-[524px]  max-auto rounded-xl bg-black drop-shadow p-5 space-y-2">
      {/* header  */}
    <div className="animate-pulse h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[100px] mb-2.5"></div>
      <div className="flex gap-3 items-center">
      <div className="animate-pulse h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[50px] mb-2.5"></div>
      <div className="animate-pulse h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[50px] mb-2.5"></div>
    </div>

    {/* UserInfo */}
    <div className="flex justify-between items-start">
      <div className="flex gap-2 items-center ">
      <div className="animate-pulse w-[45px] h-[45px] rounded-full bg-gray-200  dark:bg-gray-700 mb-2.5"></div>
        <div className="flex flex-col ">
          <div className="animate-pulse h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[100px] mb-2.5"></div>
          <div className="animate-pulse h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[70px] mb-2.5"></div>

        </div>
      </div>
      <div className="animate-pulse h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[50px] mb-2.5"></div>
    </div>

    {/* joke section  */}
    <div>
      <div className="animate-pulse h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[300px] mb-2.5"></div>
      <div className="animate-pulse h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[370px] mb-2.5"></div>
      <div className="animate-pulse h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[477px] mb-2.5"></div>
      <div className="animate-pulse h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[70px] mb-2.5 mt-2"></div>
    </div>

    {/* line  */}
    <div className="w-[477px] h-[0.1px] bg-[#71767B] "></div>
    {/* buttons */}
    <div className="w-[477px] px-1 flex justify-between">
      <div className="animate-pulse h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-5 mb-2.5"></div>
      <div className="animate-pulse h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-5 mb-2.5"></div>
      <div className="animate-pulse h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-5 mb-2.5"></div>
      <div className="animate-pulse h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-5 mb-2.5"></div>
      <div className="animate-pulse h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-5 mb-2.5"></div>
    </div>

    {/* line  */}
    <div className="w-[477px] h-[0.1px] bg-[#71767B]"></div>

    <div className="w-full flex gap-1 items-center justify-center text-[#71767B] text-[10px]">
        <LuCopyright />
        <p>chai aur code</p>
      </div>
  </div>
  )
}

export default RandomJokesShimmer
