import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({ video }) => {
    const {id, snippet} = video
    return (
        <Link to={`/video/${id.videoId}`}>
            <div key={id} className="justify-start">
                <img src={snippet.thumbnails.high.url} alt={snippet.title} className="w-full"/>
                <h1 className='font-medium'>{snippet.title}</h1>
                <p className='font-light'>{snippet.channelTitle}</p>
            </div>
        </Link>
    )
}

export default VideoCard