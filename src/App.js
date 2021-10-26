import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import './App.css';
import FriendsContainer from "./components/Friends/FriendsContainer.jsx";

const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
      <div className= 'app-wrapper-content' >
        <Route path='/Profile' render={() => <Profile />} />
        <Route path='/Dialogs' render={() => <DialogsContainer /> } />
        <Route path='/Friends' render={() => <FriendsContainer />} />
      </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
