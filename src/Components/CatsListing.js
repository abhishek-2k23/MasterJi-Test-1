import React, { useEffect, useState } from 'react'
import CatCard from './CatCard';
function CatsListing() {
    const [catList, setCatList] = useState([]);
    const fetchCats = async() =>{
        try{
            const res = await fetch('https://api.freeapi.app/api/v1/public/cats?page=1&limit=4');
            const data = await res.json();
            setCatList(data?.data?.data);
            console.log(catList);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        fetchCats();
    },[])

    if(catList.length === 0){
        return (
            <div>Loading</div>
        )
    }
  return (
    <div className='w-full flex gap-2  px-10'>
        {
            catList?.map((catData) => {
                return (<div className=''>
                    <CatCard  catData = {catData} key={catData?.id}/></div>)
                    
            })
        }
    </div>
  )
}

export default CatsListing