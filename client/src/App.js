import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbaar from './component/Navbaar';
import Home from './component/Home';
import Register from './component/Register';
import Edit from './component/Edit';
import Details from './component/Details';
import {Routes,Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Navbaar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path='/Register' element={<Register/>}/>
      <Route exact path='/Edit/:id' element={<Edit/>}/>
      <Route exact path='/View/:id' element={<Details/>}/>
    </Routes>
    </>
  );
}

export default App;
