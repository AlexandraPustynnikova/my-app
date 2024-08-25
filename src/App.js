import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/NavBar/Navbar";
import Profile from "./Components/Profile/Profile";


const App = () => {
  // const [count, setCount] = useState(0)
  return (
      <div className='app-wrapper'>
          <Header/>
          <Navbar/>
          <Profile/>
      </div>
  );
}



export default App;
