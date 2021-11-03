//sets up both the react and the redux sides of the app
import React from 'react'
import ReactDOM from 'react-dom'
//Provider is a component
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import reducers from './reducers'

//create an instance of the Provider component to wrap up App component
//I'm gonna have a prop called store
//store is the result of calling createStore an passing in our reducers
//using redux we don't mess around with store directly, we pass the store inside the Provider, and the Provider is gonna take care of it
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
