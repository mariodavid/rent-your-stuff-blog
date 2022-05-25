import React from "react"


interface VideoProps {
    videoSrcURL: string
}
const Video: React.FC<VideoProps> = ({ videoSrcURL }) => {

    return (
        <div className="video">
            <iframe
                src={videoSrcURL}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                allowFullScreen
                width="100%"
                height="500px"
            />
        </div>
    )
}

export default Video