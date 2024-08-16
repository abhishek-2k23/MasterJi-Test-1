import React, { useEffect, useState } from 'react'
import CatCard from './CatCard';
import CatsListingShimmer from './Shimmer/CatsListingShimmer';
function CatsListing() {
    const [catList, setCatList] = useState([]);
    const fetchCats = async() =>{
        try{
            const res = await fetch('https://api.freeapi.app/api/v1/public/cats?page=1&limit=10');
            const data = await res.json();
            setCatList(data?.data?.data || []);
            console.log(catList);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        fetchCats();
    },[])

    if(catList.length === 0 || null){
        
        return (
            <div className='w-full flex flex-shrink-0 gap-12 px-10 overflow-scroll card-wrapper'>
                
            {
                Array(6).fill('').map((e,index) => { 
                    return  <div className='flex ' key={index}><CatsListingShimmer /></div>
                })  
            }
            </div>
            
            
        )
    }
  return (
    <div className='w-full flex flex-shrink-0 gap-5 px-10 overflow-scroll card-wrapper'>
        {
            catList?.map((catData) => {
                return (
                    <CatCard  catData = {catData} key={catData?.id} />)
                    
            })
        }
    </div>
  )
}

export default CatsListing