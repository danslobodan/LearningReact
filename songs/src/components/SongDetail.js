import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {

    return <div>SongDetail</div>;
};

const mapStateToProps = (state) => {

    return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);