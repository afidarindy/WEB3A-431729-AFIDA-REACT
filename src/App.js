import React from 'react';
//import logo from './logo.svg';
import './App.css';

import './style.css';

const Cities = (props) => {
  return (
    <div class="cities">
      <h2 class="title">{props.city}</h2>
      <p>{props.country}</p>
    </div>
  )
}
   
const App = () => {
  return (
    <div>
      <Cities city="Seoul" country="South Korea" />
      <Cities city="London" country="England" />
      <Cities city="Tokyo" country="Japan" />
  </div>
  )
}

export default App;
