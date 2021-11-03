import React from 'react'
//if you use "export default componentName" inside the file, you don't need import with {}
//if you don't use "export default componentName" inside the file, you are using "named export", then you don't need import with {}
import { selectSong } from '../actions'
import SongList from './SongList'
import SongDetail from './SongDetail'

//we use class component when we have state
//as we are using redux, we store data inside redux
const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  )
}

export default App
