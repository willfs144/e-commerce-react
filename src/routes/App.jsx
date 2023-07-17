//import { useState } from 'react'
//import {Fragment} from 'react';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import NotFound from '../pages/NotFound';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import '../App.css';

function App() {
  return (
    <Router> 
      <Layout>
        <Routes>        
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/login' element={<Login/>} />
              <Route exact path='/recovery-password' element={<RecoveryPassword/>} />
              <Route path='*' element={<NotFound />}/>     
          </Routes>
       </Layout>  
    </Router>
   
    );

}

export default App

/*return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )*/
