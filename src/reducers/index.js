
import { combineReducers } from 'redux';

/*
*Simulating list of songs
*/
const listSongs = () => {
    return [
        {title: 'No scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:30'},
        {title: 'All Star', duration: '3:15'},
        {title: 'I want that way', duration: '1:45'}
    ];
};

/*
*Reducer for the state 'selectedSong'
*/
const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};


export default combineReducers (
    {
        myListSongsCombineReducers: listSongs,
        mySelectedSong: selectedSongReducer
    }
);
