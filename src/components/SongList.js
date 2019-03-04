import React from 'react';
import {connect} from 'react-redux';
import {selectedSong} from '../actions'

class SongList extends React.Component {
    renderList(){
        return this.props.mySongsListState.map( (song) =>{
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary"
                            onClick={ () => this.props.selectedSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        })
    }

    render(){
        //console.log("SongList > render() > STATE from connet(): ", this.props);
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    //console.log("SongList > mapStateToProps > STATE from reduxer: ",state);
    return {mySongsListState: state.myListSongsCombineReducers};
}

//connect() -> no video 146
/*When we pass an the Action Creator ('selectedSong') to connect function,
 the engine will create a new STATE for component (SongList). So, inner
 component's render() method, we can used "state" variable, 
 as we can see on line 38, and we can SET a new "props", as "myListSongsState"
*/
/* Another function executed by connect() is call dispatch() with Action Creator as paramater

*/
export default connect(mapStateToProps, {selectedSong})(SongList);