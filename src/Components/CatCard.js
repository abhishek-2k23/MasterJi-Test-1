import React from "react"

function CatCard({ catData }) {
  const { name, origin, description, image, wikipedia_url,life_span, temperament } =
    catData;
  const temperamentData = temperament.split(",")

  const openWiki = () => {
    window.open(wikipedia_url, '_blank')
}
  return (
    <div className="min-w-[375px] h-[643px] rounded-[18px] bg-white font-dmsans drop-shadow-md">
      {/* thumbnail */}
      <img
        src={image}
        alt="abc"
        className="rounded-t-[18px] w-[375px] h-[325px] "
      />

      {/* info  */}
      <div className="flex flex-col space-y-1 p-2 mt-2">
        <h1 className="max-w-full text-wrap h-[36px] text-[28px] font-[500] align-middle">
          {name}
        </h1>

        {/* description */}
        <div className="h-[90px] w-345px]">
          <p className="font-[400] text-[14px] text-black">
            {description.substring(0, 200)}
          </p>
        </div>

        <div className="align-middle space-x-5 flex ">
          <p className="italic">origin</p>
          <p>{origin}</p>
        </div>

        <p className="italic text-[14px] font-[500]">Temprament</p>
        <div className="flex gap-3 flex-nowrap overflow-hidden">
          {temperamentData?.map((tempermentString, index) => {
            return (
              <div
                className="px-2  h-4 text-xs text-[#353535] bg-slate-200 hover:bg-purple-200 rounded-md text-center cursor-pointer"
              >
                {tempermentString}
              </div>
            )
          })}
        </div>

        <div className="align-middle space-x-5 flex ">
          <p className="italic">Life Span</p>
          <p>{life_span} years</p>
        </div>

        <div onClick={openWiki}>
          <p className="text-[#7D99E2] cursor-pointer">Learn More</p>
        </div>
      </div>
    </div>
  )
}
export default CatCard
