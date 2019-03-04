import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({mySongDetailSelected}) => {
    console.log("SongDetail props: " ,mySongDetailSelected);
    
    if(!mySongDetailSelected){
        return <div>Select a song</div>
    }
    
    return (
        <div>
            <h3>Detail for:</h3>
            <p>
                Title: {mySongDetailSelected.title}
                <br/>
                Duration: {mySongDetailSelected.duration}
            </p>
        </div>
        )

};

const mapStateToProps = state => {
    console.log("SongDetail > mapStateToProps > STATE from reduxer: ",state);
    return {mySongDetailSelected: state.mySelectedSong}
}

export default connect(mapStateToProps)(SongDetail);