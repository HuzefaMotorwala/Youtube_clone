import React from 'react';

function VideoDetail(props){
    if(!props.video){
        return <div>Loading...</div>
    }

    const videoSrc=`https://www.youtube.com/embed/${props.video.id.videoId}`
    return (
        <div>
            <div className="ui embed">
                <iframe title="videoPlayer" src={videoSrc} />
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{props.video.snippet.title}</h4>
                <p>{props.video.snippet.description}</p>
            </div>
        </div>
        
    )
}
export default VideoDetail;