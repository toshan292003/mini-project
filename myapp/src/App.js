import './App.css';
import Navbar from './pages/navbar';
import Home from './pages/home';
import About from './pages/about';
import Signin from './pages/signin';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Signup from './pages/Signup';
import Input from './pages/input';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/input" element = {<Input/>}/>
          <Route path = "/signin" element = {<Signin/>}/>
          <Route path = "/signup" element = {<Signup/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;