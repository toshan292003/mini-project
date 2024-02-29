import logo from './logo.svg';
import './App.css';
import Navbar from './pages/navbar';
import Home from './pages/home';
import About from './pages/about';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/about" element = {<About/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;