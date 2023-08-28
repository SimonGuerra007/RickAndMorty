import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './styles/ResidentCard.css'

const ResidentCard = ({ residentUrl }) => {
    const [infoCard, setInfoCard] = useState(null)

    const residentStatus = {
        Alive: "bg-green-600",
        Dead: "bg-red-600",
        unknown: "bg-slate-500"
    }

    useEffect (() => {
        axios
            .get(residentUrl)
            .then(({data}) => setInfoCard(data))
            .catch((err) => console.log(err))
    }, [])
  return (
    <article className='text-center w-[300px] rounded-2xl relative mt-[150px]'>
        <div className=' w-[150px] absolute bottom-[85%] right-[25%]'>
            <img className='img_card' src={infoCard?.image} alt="" />
        </div>
        <div className='bg-[#893446] p-2 rounded-2xl h-[200px]'>
            <div className='bg-[#856888] rounded-xl h-[183px]'>
                <div className='bg-[#C9BEDC] rounded-t-xl rounded-br-xl'>
                    <h4 className='bg-[#fffd87] rounded-xl pb-4 pt-6 text-[#893446] font-bold'>{infoCard?.name}</h4>
                </div>
                <div className="bg-[url('../public/images/bgInfo.png')] bg-cover bg-bottom w-[95%] rounded-bl-[5px] h-[120px]">
                    
                    <ul className='list-none flex flex-col justify-around items-center h-full'>
                        <li>
                            <div className='flex justify-center items-center gap-2'>
                                <div className={`border-[3px] border-black h-[15px] w-[15px] rounded-full ${residentStatus[infoCard?.status]}`}></div>
                                <h4 className='text-[#893446] font-bold'>{infoCard?.status}</h4>
                            </div>
                        </li>
                        <li className='text-[#893446]'>Species: <span className=' text-white'>{infoCard?.species}</span></li>
                        <li className='text-[#893446]'>Origin: <span className=' text-white'>{infoCard?.origin.name}</span></li>
                        <li className='text-[#893446]'>Times appear: <span className=' text-white'>{infoCard?.episode.length}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </article>
  )
}

export default ResidentCard