import React, { useEffect } from 'react'
import ResidentCard from './ResidentCard';
import Pagination from './Pagination';
import { useState } from 'react';

const ResidentList = ({residents, currentLocation}) => {
  const [currentPage, setCurrentPage] = useState(1)

  const residentsPerPage = 20

  const totalPages = Math.ceil(residents.length / residentsPerPage)

  const sliceStart = (currentPage - 1) * residentsPerPage
  const sliceEnd = sliceStart + residentsPerPage

  const residentsInPage = residents.slice(sliceStart, sliceEnd)

  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
    
  }
  
  useEffect (() => {
    setCurrentPage(1)
  }, [currentLocation])

  return (
    <section>
      <section className='max-w-[1024px] m-auto flex flex-wrap flex-row justify-center gap-7'>{
        residentsInPage.map((resident) => <ResidentCard key={resident} residentUrl={resident} />)}
      </section>
      <section><Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} /></section>
    </section>
  )
}

export default ResidentList