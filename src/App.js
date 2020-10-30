import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CheckOut from "./CheckOut/CheckOut.js";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";
import {auth} from './firebase/firebase';
import {useStateValue} from './context/StateProvider'


function App() {
  const[{},dispatch]=useStateValue();
  useEffect(()=>{
    auth
    .onAuthStateChanged(authUser=>{
      console.log('the User is',authUser);
      //login user
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        //logout user
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })

  },[])
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/checkOut"><Header /><CheckOut /><Footer /></Route>
          <Route path="/" exact><Header /><Home /><Footer /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
