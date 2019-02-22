import React from 'react';
import {connect} from 'react-redux';

class SongList extends React.Component {

    render(){
        return <div>SongList</div>
    }

}

const mapStateToProps = (state) => {
    //console.log(state);
    return {songs: state.songs};
}
//connect -> no video 146
export default connect(mapStateToProps)(SongList);