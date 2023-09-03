import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import { getRandomDimension } from "./utils/random.js";
import LocationInfo from './components/LocationInfo';
import ResidentList from './components/ResidentList';

function App() {
  const [currentLocation, setCurrentLocation] = useState(null)
  const [dimensionInfo, setDimensionInfo] = useState('')
  
  const searchDimensionByName = () => {
    const url2 = `https://rickandmortyapi.com/api/location/${dimensionInfo}`

    axios
    .get(url2)
    .then(({data}) => {
      setCurrentLocation(data)
    }).catch((err) => console.log(err))
  }

  useEffect(() => {

    const randomDimension = getRandomDimension(125)
    const url = `https://rickandmortyapi.com/api/location/${randomDimension}`

    axios
      .get(url)
      .then(({data}) => {
        setCurrentLocation(data)
      }).catch((err) => console.log(err))
  }, [])

  return (
    <main className="min-h-screen bg-[url('../public/images/RickAndMorty_Superior.png')] bg-top bg-contain bg-no-repeat">
      <LocationInfo currentLocation={currentLocation} setDimensionInfo={setDimensionInfo} searchDimensionByName={searchDimensionByName} />
      <ResidentList residents={currentLocation?.residents ?? []} currentLocation={currentLocation} />
    </main>
  )
}

export default App
