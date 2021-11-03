import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({ song }) => {
  //if song is not defined
  if (!song) {
    return <div>Select a song!</div>
  }
  return (
    <div>
      <h3>Details for: </h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  )
}

const mapStateToProps = state => {
  //we return here just the property that we care about
  //the name that appears here is the name inside the console
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)
