import React from 'react';
import Searchbar from './Searchbar';
import youtube from '../apis/youtube';
import Videolist from './Videolist';
import VideoDetail from './VideoDetail';


class App extends React.Component{

state={videos:[], selectedVideo:null};

componentDidMount(){
    this.onTermSubmit('buildings');
}

onTermSubmit= async term=>{
    const response=await youtube.get('/search',{
        params:{
            q:term
        }
    });

    this.setState({
        videos:response.data.items,
        selectedVideo:response.data.items[0]
    
    });
};

    onVideoSelect=(video)=>{
        this.setState({selectedVideo:video});
    }

    render(){
        return (
            <div className="ui container">
                <Searchbar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <Videolist videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;