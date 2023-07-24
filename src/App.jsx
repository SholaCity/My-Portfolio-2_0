/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM  from 'react-dom/client';
import './App.css'
import './index.css'
import Home from './pages/home'
import {Navbar, Footer} from './components';



 const App = ()=> {
    return <div className='App'>
            <Navbar/>
            <Home/>
            <Footer/>
         </div>
 }


ReactDOM.createRoot(document.getElementById("root")).render(<App/>)