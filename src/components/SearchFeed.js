import React,{useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import { fetchApi } from '../utils/FetchApi'
import SideBar from './SideBar'
import Videos from './Videos'

export const SearchFeed = () => {
    const { searchInput } = useParams()
    const [searchVideos, setSearchVideos] = useState([])

    useEffect(() => {
        setSearchVideos([])
        fetchApi(`search?part=snippet,id&q=${searchInput}`)
        .then(res => setSearchVideos(res.items))
    },[searchInput])

    return (
        <>
            <h1 className='m-4'>Hasil pencarian : {searchInput}</h1>
            <div className='flex flex-col sm:flex-row'>
                <div className="bg-gray-50 p-2">
                    <Videos videos={searchVideos}/>
                </div>
            </div>
        </>
    )
}
