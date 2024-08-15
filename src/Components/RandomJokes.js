import React, { useEffect, useState } from "react"
import elon from "../Asset/elon.png"
import { GoArrowLeft } from "react-icons/go"
import { RiVerifiedBadgeFill } from "react-icons/ri"
import { FaRetweet } from "react-icons/fa6"
import { RiShare2Line } from "react-icons/ri"
import { CiHeart } from "react-icons/ci"
import { PiTagChevronLight } from "react-icons/pi"
import { FaRegComment } from "react-icons/fa6"
import { BsThreeDots } from "react-icons/bs"
import { LuCopyright } from "react-icons/lu"
import { generateRandomData } from "../utility/helpers"

function RandomJokes() {
  const [joke, setJoke] = useState("")
  const [views, setViews] = useState("")
  const [like, setLike] = useState("")
  const [retweet, setRetweet] = useState("")
  const [date, setDate] = useState("")
  const [saved, setSaved] = useState("")
  const [comment, setComment] = useState("")
  // fetch jokes
  async function fetchJokes() {
    const res = await fetch(
      "https://api.freeapi.app/api/v1/public/randomjokes/joke/random",
    )
    const data = await res.json()
    console.log(data)
    setJoke(data?.data?.content)
  }

  useEffect(() => {
    fetchJokes()
    const { v, l, re, d, c, s } = generateRandomData()
    console.log(c, v, l, re, d, s)
    setViews(v)
    setLike(l)
    setRetweet(re)
    setDate(d)
    setComment(c)
    setSaved(s)
  }, [])
  if (joke === "") {
    return <div>Loading</div>
  }
  return (
    <div className="w-[524px] min-h-[273px] max-auto rounded-xl bg-black drop-shadow font-inter p-5 text-white space-y-2">
      {/* header */}
      <div className="flex gap-3 items-center">
        <div>
          <GoArrowLeft />
        </div>
        <p>Post</p>
      </div>

      {/* UserInfo */}
      <div className="flex justify-between items-start">
        <div className="flex gap-1 ">
          <img src={elon} className="w-[45px] h-[45px] rounded-full" />
          <div className="flex flex-col ">
            <div className="flex items-center">
              <p>Elon Musk</p>
              <RiVerifiedBadgeFill className="text-blue-600" />
            </div>
            <div>
              <p className=" text-[#71767B]  text-[12px] -mt-1">@elonmusk</p>
            </div>
          </div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </div>

      {/* joke section  */}
      <div>
        <p className="w-[477px] text-wrap text-[14px] ">{joke}</p>
        <div className="text-[10px] mt-2">
          <p className="text-[#71767B] ">
            {date}.{" "}
            <span className="text-opacity-100 font-semibold text-white">
              {views}
            </span>{" "}
            Views
          </p>
        </div>
      </div>

      {/* line  */}
      <div className="w-[477px] h-[0.1px] bg-[#71767B] "></div>
      {/* buttons */}
      <div className="w-[477px] px-1 my-5 flex justify-between text-[#71767B] text-[8px]">
        <div className="flex gap-px items-center">
          {" "}
          <FaRegComment className="text-[#71767B]" />
          {comment}
        </div>
        <div className="flex gap-px items-center">
          {" "}
          <FaRetweet className="text-[#71767B]" /> {retweet}
        </div>
        <div className="flex gap-px items-center">
          {" "}
          <CiHeart className="text-[#71767B]" />
          {like}
        </div>
        <div className="flex gap-px items-center">
          {" "}
          <PiTagChevronLight className="text-[#71767B] -rotate-90" />
          {saved}
        </div>
        <div className="flex gap-px items-center">
          {" "}
          <RiShare2Line className="text-[#71767B]" />
        </div>
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

export default RandomJokes
