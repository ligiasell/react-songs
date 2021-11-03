import { combineReducers } from 'redux'

const songsReducer = () => {
  return [{ title: 'Music One', duration: '1:00' }, { title: 'Music Two', duration: '2:00' }, { title: 'Music Three', duration: '3:00' }, { title: 'Music Four', duration: '4:00' }]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}

//to export all consts just one time
//you have to import { combineReducers } though
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
})
