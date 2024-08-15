import React from 'react'

function CatCard({catData}) {
    const {name, origin, description, image, wikipedia_url,temperament} = catData;
  return (
    <div className='w-[375px] h-[643px] rounded-[18px] bg-white font-dmsans drop-shadow-md'>
        {/* thumbnail */}
        <img src={image} alt='abc' className='rounded-t-[18px] w-[375px] h-[325px] '/>

        {/* info  */}
        <div className='flex flex-col space-y-2 p-2 mt-2'>
            
            <h1 className='max-w-full text-wrap h-[36px] text-[28px] font-[500] align-middle'>{name}</h1>

            {/* description */}
            <div className='h-[90px] w-345px]'>
                <p className='font-[400] text-[14px] text-black'>{description.substring(0,200)}</p>
            </div>

            <div className='align-middle space-x-5 flex '>
                <p className='italic'>origin</p>
                <p>Russia</p>
            </div>

            <p className='italic text-[14px] font-[500]'>Temprament</p>
            <div className='flex gap-3'>
                <p className='italic bg-slate-400 rounded cursor-pointer'>Temprament</p>
                <p className='italic '>Temprament</p>
                <p className='italic '>Temprament</p>
            </div>

            <p className='italic text-[14px] font-[500]'>Life Span</p>
        </div>
    </div>
  )
}

export default CatCard