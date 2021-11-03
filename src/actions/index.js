//action creator, it has to return an action
//type property is required
//payload property is optional
export const selectSong = song => {
  return {
    type: 'SONG_SELECTED',
    payload: song,
  }
}

//named export allows us to export many functions from a single file
