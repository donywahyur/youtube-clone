import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchApi } from '../utils/FetchApi'
import ReactPlayer from 'react-player'
import VideoCard from './VideoCard'

const VideoDetail = () => {

    const { id } = useParams('')
    const [video, setVideo] = useState(null)
    const [suggestVideo, setSuggestVideo] = useState(null)

    useEffect(() => {
        setVideo({})
        fetchApi(`videos?part=contentDetails,snippet,statistics&id=${id}`)
        .then(res => setVideo(res.items[0]))

        setSuggestVideo([])
        fetchApi(`search?part=id,snippet&type=video&relatedToVideoId=${id}&maxResults=50`)
        .then(res => setSuggestVideo(res.items))

    },[id])
    return (
        <div className='flex flex-col sm:flex-row h-screen'>
            <div className="bg-gray-50 sm:basis-9/12 lg:basis-8/12">
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls={true} width='100%' />
                <div className="p-4">
                    <h1 className='text-lg font-medium'>{video?.snippet?.title}</h1>
                    <p className="mb-4">{video?.statistics?.viewCount}</p>
                    <hr/>
                    <p className="mt-4">{video?.snippet?.description}</p>
                </div>
            </div>
            <div className="bg-white sm:basis-3/12 lg:basis-4/12 ">
                <div className="px-1 flex flex-col w-100">
                {suggestVideo?.map((videos,index) => {

                    return (
                        <VideoCard video={videos} key={index}/>
                    )
                })}
                </div>
            </div>

        </div>
    )
}

export default VideoDetail