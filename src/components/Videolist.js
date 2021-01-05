import React from 'react';
import Videoitem from './Videoitem';

function Videolist(props){
    const rendervideos=props.videos.map((video)=>{
        return (
            <div className="ui segment">
                <Videoitem
                    onVideoSelect={props.onVideoSelect} 
                    video={video}
                />
                
            </div>
        )
    })

    return (
        <div className="ui relaxed divided list">{rendervideos}</div>
    )
}
export default Videolist; 