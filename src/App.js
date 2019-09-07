import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
const App = (props) => {

  return (
      <BrowserRouter>
      <div className = 'app-wrapper'>
          <Header />
            <Navbar state={props.state.sideBar}/>
            <div className = 'app-wrapper-content'>
                <Route path='/dialog' render={ () => <Dialogs state={props.state.messagePage}/>}/>
                <Route path='/profile' render={ () => <Profile state={props.state.profilePage}/>}/>
            </div>
        </div>
      </BrowserRouter>

  );
};

export default App;
