import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';
import AlbumsListContainer from './components/AlbumsListContainer'

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <AlbumsListContainer />
        </div>
      </Provider>
  );
}

export default App;
