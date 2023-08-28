import React from 'react'
import LocationForm from './LocationForm'

const LocationInfo = ({currentLocation, setDimensionInfo, searchDimensionByName}) => {

    // console.log(currentLocation);

  return (
    <section className="text-center text-white">
        <div className='flex flex-col sm:flex-row justify-around items-center'>
            <img src="/public/images/name.png" alt="" />
            <LocationForm setDimensionInfo={setDimensionInfo} searchDimensionByName={searchDimensionByName}/>
        </div>
        <div className='bg-[#fffd87] rounded-2xl border-[5px] border-[#893446] max-w-[1024px] m-auto'>
            <h2 className='font-bold text-2xl py-3 text-[#893446]'>{currentLocation?.name}</h2>
            <div className='flex flex-col justify-around items-center sm:flex-row p-5 bg-[#C9BEDC] rounded-b-xl'>
                <h4><span className='font-bold text-[#893446]'>type: </span>{currentLocation?.type}</h4>
                <h4><span className='font-bold text-[#893446]'>dimension: </span>{currentLocation?.dimension}</h4>
                <h4><span className='font-bold text-[#893446]'>population: </span>{currentLocation?.residents.length}</h4>
            </div>
        </div>
    </section>
  )
}

export default LocationInfo