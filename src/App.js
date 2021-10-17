import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import './App.css';

const App = (props) => {
 
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
     
      <div className= 'app-wrapper-content' >
        <Route path='/Profile'
         render={() => <Profile profile={props.appState.profile}
         dispatch= {props.dispatch} 
         />} />
        <Route path='/Dialogs' render={() => <Dialogs dialogsData={props.appState.dialog} /> } />
      </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
