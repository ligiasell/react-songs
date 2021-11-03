//import React from 'react'
//class SongList extends React.Component {}
//OR:

import React, { Component } from 'react'
//connect is a react component that communicates with Provider through context system
import { connect } from 'react-redux'
import { selectSong } from '../actions'

class SongList extends Component {
  renderList() {
    //just selectSong(song) doesn't work, you have to call it inside connect
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      )
    })
  }

  render() {
    //***
    //this.props === { songs: state.songs }
    console.log(this.props)
    console.log('selectSong here', selectSong)
    return <div className="ui divided list">{this.renderList()}</div>
  }
}

//we are going to take our state object (data that is inside our Store)
//and we are going to run some calculation that is going to cause our data
//to show as props inside our component. Check ***
//state is going to be all information inside our Reducers (Store)
//in this case, our entire list of songs from songsReducer
//and our current selected song from selectedSongReducer
const mapStateToProps = state => {
  console.log('state here', state)
  return { songs: state.songs }
}

//when we pass our action creator inside the connection function,
//the connection func wraps all functions that are inside this inside othe js func
//then the connection func automatically call our action creator,
//take the action that gets returned and call the dispatch func for us
export default connect(mapStateToProps, { selectSong })(SongList)
