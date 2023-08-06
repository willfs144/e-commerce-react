import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/global.scss';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import RecoveryPassword from '../pages/RecoveryPassword';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
//import LoginContext from '../components/context/LoginContext';


function App() {

  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter> 
        <Layout>
          <Routes>        
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/login' element={<Login />}/>
                <Route exact path='/recovery-password' element={<RecoveryPassword />} />
                <Route exact path='/checkout' element={<Checkout/>} />
                <Route exact path='/orders' element={<Orders/>} />
                <Route path='*' element={<NotFound />}/>     
            </Routes>
        </Layout>  
        </BrowserRouter>
      </AppContext.Provider>

   
    );

}

export default App;
