import React from 'react'
import { Provider } from 'react-redux';

import PlaceAutocomplete from './components/PlaceAutocomplete';
import { store } from './store';
import './App.css';

const App = () => (
  <Provider store={store}>
      <PlaceAutocomplete />
  </Provider>
);

export default App;
