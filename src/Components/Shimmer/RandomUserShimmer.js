import React from 'react'

function RandomUserShimmer() {
  return (
    <div className="w-[358px] bg-gray-800 h-[610px] border-8 border-white p-4 rounded-xl flex flex-col items-center gap-5">
        <div className="flex justify-between items-center w-full font-semibold ">
          <div className="h-[22px] w-24">
           <div class="animate-pulse h-[22px] bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4"></div>
          </div>
          <div className="h-[22px] w-24">
           <div class="animate-pulse h-[22px] bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4"></div>
          </div>
          <div className="h-[22px] w-24">
           <div class="animate-pulse h-[22px] bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4"></div>
          </div>
        </div>

        {/* image  */}
        <div className="relative w-[100px] h-[100px] ">
        <div class="animate-pulse rounded-full w-[100px] h-[100px] shadow-md bg-gray-300  dark:bg-gray-700"></div>
        <div class="animate-pulse absolute -right-3 -top-2 w-[22px] h-[15px] rounded-xl bg-gray-200 dark:bg-gray-700"></div>
         
        </div>

        {/* name  */}
        <div>.
        <div class="animate-pulse h-[22px] bg-gray-200 rounded-full dark:bg-gray-700 w-24"></div>
          
        </div>
        {/* username  */}
        <div>
        <div class="animate-pulse h-[22px] bg-gray-200 rounded-full dark:bg-gray-700 w-24"></div>
        </div>

        {/* button */}
        <div className="flex gap-1 items-center">
          <div class="animate-pulse w-[22px] h-[22px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div> 
          <div class="animate-pulse w-[37px] h-[12px] bg-gray-200 rounded-full dark:bg-gray-700 mr-2"></div>

          </div>

          <div class="animate-pulse w-[22px] h-[22px] rounded-full bg-gray-200 dark:bg-gray-700"></div>

          
          <div>
          <div class="animate-pulse w-[37px] h-[12px] bg-gray-200 rounded-full dark:bg-gray-700"></div>

          </div>
        </div>

        {/* city & Nationality */}
        <div className="flex flex-col w-full mb-7">
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 mt-4"></div>
          <div class="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-4"></div>
          <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
          <div class="w-72 h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-4"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-4"></div>
          <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-4"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-4"></div>
        </div>

        {/* footer  */}
        <div className="w-full flex justify-end items-end text-white">
          <div className="mr-8 flex  items-center gap-1 text-[8px] font-[700]">
          <div class="animate-pulse w-[37px] h-[12px] bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div class="animate-pulse w-[60px] h-[12px] bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div class="animate-pulse w-[30px] h-[14px] bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
  )
}

export default RandomUserShimmer