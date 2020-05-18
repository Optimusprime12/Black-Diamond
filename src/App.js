import React from 'react';
import {Switch,Route} from 'react-router-dom';
import HomePage from '../src/pages/HomePage'
import Shop from "../src/pages/shop/shop"
import Header from "../src/components/Header/header"
function App() {
  return (
    <div >
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={Shop} />
       </Switch>
      
    </div>
  );
}

export default App;
