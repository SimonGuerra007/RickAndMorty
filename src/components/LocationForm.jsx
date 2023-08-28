import React from 'react'

const LocationForm = ({setDimensionInfo, searchDimensionByName}) => {

  const searchDimension = (e) => {
    setDimensionInfo(e.target.value)
    console.log(e.target.value);
}

const submitDimension = (e) => {
    e.preventDefault()
    searchDimensionByName()
}
  return (
    <form className='relative text-end' onSubmit={submitDimension}>
      <input className='sm:w-[450px] w-[350px] rounded-3xl border-[5px] border-[#893446] my-3 py-1 px-4 text-start text-black' min={1} max={126} onChange={searchDimension} type='number' placeholder='Type a location id'/>
      <button type='submit' className='bg-[#fffd71] text-[#893446] rounded-3xl py-1 px-[50px] border-[5px] border-[#893446] absolute top-[18%] right-[0%]'>Search</button>
    </form>
  )
}

export default LocationForm