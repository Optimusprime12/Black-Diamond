import React from 'react';
import "../src/App.css";
import {Switch,Route} from 'react-router-dom';
import HomePage from '../src/pages/HomePage';
import Shop from "../src/pages/shop/shop";
import Header from "../src/components/Header/header";
import RegistrationPage from "../src/pages/Registration/RegistrationPage";
import {auth} from '../src/Firebase/FireBaseUtils'
class App extends React.Component{
  constructor(){
    super()
    this.state={
      currentUser:null
    }
  }
unsubscribeFromAuth=null;

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
      console.log(user)
    })
  }
componentWillUnmount(){
  this.unsubscribeFromAuth();
}
 render(){
  return (
    <div >
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={Shop} />
        <Route  exact path="/signin" component={RegistrationPage}/>
       </Switch>
      
    </div>
  );
  }
}

export default App;
