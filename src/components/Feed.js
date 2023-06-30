import React, { useEffect, useState } from 'react'
import { fetchApi } from '../utils/FetchApi'
import SideBar from './SideBar'
import Videos from './Videos'

const Feed = () => {
  const [selectCategori, setSelectCategori] = useState('Coding')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    setVideos([])
    fetchApi(`search?part=snippet,id&q=${selectCategori}`)
    .then(res => setVideos(res.items))
  },[selectCategori])

  return (
    <div className='flex flex-col sm:flex-row'>
      <div className="bg-white flex sm:flex-col sm:basis-3/12 overflow-auto md:h-screen md:sticky">
        <SideBar selectCategori={selectCategori} setSelectCategori={setSelectCategori}/>
      </div>
      <div className="bg-gray-50 sm:basis-9/12 p-2">
        <Videos videos={videos}/>
      </div>
    </div>
  )
}

export default Feed