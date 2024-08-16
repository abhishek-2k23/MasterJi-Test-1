import React from "react"
import { IoMdImages } from "react-icons/io";
function CatsListingShimmer() {
  return (
    //Third
    <div className=" w-[375px] h-[643px] rounded-[18px] bg-black text-white">
      {/* thumbnail */}
      <div className=" animate-pulse bg-slate-800  dark:bg-gray-700  rounded-t-[18px] w-[375px] h-[325px] flex justify-center items-center">
        
        <div >
            <IoMdImages className="animate-pulse  w-[150px] h-[300px] "/>
        </div>
      </div>

      {/* info  */}
      <div className="flex flex-col space-y-1 p-2 mt-2">
      <div className="animate-pulse w-[300px] h-[10px] rounded-full bg-gray-200  dark:bg-gray-700 mb-2.5"></div>
        {/* description */}
        <div className="h-[90px] w-345px]">
          <div className=" animate-pulse bg-gray-200  dark:bg-gray-700 w-[100px] h-2 rounded-full my-2"></div>
          <div className=" animate-pulse bg-gray-200  dark:bg-gray-700 w-[150px] h-2 rounded-full my-4">
            {" "}
          </div>
          <div className=" animate-pulse bg-gray-200  dark:bg-gray-700 w-[200px] h-2 rounded-full my-4">
            {" "}
          </div>
        </div>
        <div className="flex gap-3 items-center ">
          <div className="animate-pulse h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[150px] mb-2.5"></div>
          <div className="animate-pulse h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[150px] mb-2.5"></div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="animate-pulse h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[150px] mb-2.5"></div>
          <div className="animate-pulse h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[150px] mb-2.5"></div>
        </div>
        <div className="flex gap-3 items-center my-3">
          <div className="animate-pulse h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[150px] mb-2.5"></div>
          <div className="animate-pulse h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[150px] mb-2.5"></div>
        </div>

        <div className="align-middle space-x-5 flex ">
          <p className="animate-pulse bg-gray-200  dark:bg-gray-700  italic max-w-16 h-2"></p>
          <p className="animate-pulse bg-gray-200  dark:bg-gray-700  max-w-16 h-2"></p>
        </div>

        <p className=" w-32 rounded-full animate-pulse bg-gray-200  dark:bg-gray-700  max-w-16 h-2"></p>
        
      </div>
    </div>
  )
}

export default CatsListingShimmer
