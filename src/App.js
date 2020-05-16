import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import Header from './components/header';
import Footer from './components/footer';
import Search from './components/search';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Search />
        <Footer />
        <FontAwesomeIcon icon={faCoffee} />
      </div>
    </Provider>
  );
}

export default App;
