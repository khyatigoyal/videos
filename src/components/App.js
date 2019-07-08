import React from 'react';
import SearchBar from './searchBar';
import Youtube from '../apis/youtube';
import VideoList from './videoList';
import VideoDetail from './videoDetails';
class App extends React.Component {
    state = {videos : [], videoSelected : null};

    componentDidMount(){
        this.onformSubmit("Happy");
    }
    onformSubmit = async (term) => {
        const response = await Youtube.get('/search',{
            params : {
                q :term
            }
        });
        this.setState({
            videos : response.data.items,
        videoSelected : response.data.items[0]
        });
    };
    onvideoSelect = (video) =>{
        this.setState({
            videoSelected : video
        });
    };
    render(){
        return (
            <div className="ui container">
                <SearchBar onformSubmit = {this.onformSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.videoSelected}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onvideoSelect={this.onvideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );  
    }
}

export default App;