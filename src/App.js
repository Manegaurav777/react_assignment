import logo from './logo.svg';
import './App.css';
import Home from './Home';
import C_info from './C_info';
import Caudi from './Caudi';
import Cbmw from './Cbmw';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home/>}> </Route>
    <Route exact path="/C_info" element={<C_info/>}></Route> 
    <Route exact path="/Caudi" element={<Caudi/>}></Route> 
    <Route exact path="/Cbmw" element={<Cbmw/>}></Route> 

      </Routes>
    


     
    </div>
  );
}

export default App;
