import React from 'react'
import chai from '../Asset/chai.png'
function ChaiLogo() {
    const loadChaiCode = () => {
        window.open("https://chaicode.com/", "_blank")
      }
  return (
    <div
          className="ml-6 w-[60px] h-[62px] rounded-xl bg-black cursor-pointer"
          onClick={loadChaiCode}
        >
          <img src={chai} alt="chaicode" className="rounded-xl" />
        </div>
  )
}

export default ChaiLogo