import React from 'react';
import {Switch,Route} from 'react-router-dom';
import HomePage from '../src/pages/HomePage'
import Shop from "../src/pages/shop/shop"

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={Shop} />
       </Switch>
      
    </div>
  );
}

export default App;
