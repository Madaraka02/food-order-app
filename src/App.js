import React from "react";
import './App.css';
import {
BrowserRouter as Router,
Switch,
Route,
} from "react-router-dom";
import Buy from "./Buy";
import Header from "./Header";
import Home from "./Home";
   import Login from "./Login";
import Lunch from "./Lunch";
import Order from "./Order";
import Register from "./Register";
import Supper from "./Supper";



function App() {
  return (
    <Router>
    <div className="home">
      <Switch> 
        <Route path="/lunch">
          <Header/>
          <Lunch/>
        </Route>
        <Route path="/supper">
          <Header/>
          <Supper/>
        </Route>
        <Route path="/buy">
           <Header/>
           <Buy/>
       </Route>
       <Route path="/orders">
         <Header/>
         <Order/>
       </Route>
       <Route path="/login">
         <Header/>
         <Login/>
       </Route>
       <Route path="/register">
         <Header/>
         <Register/>
       </Route>
       <Route path="/">
         <Header/>
         <Home/>
       </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;