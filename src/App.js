import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login.js'
import Mainform from './components/Mainform.js'
import Secondform from './components/Secondform.js'
import Thirdform from './components/Thirdform.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/mainform' element={<Mainform/>}></Route>
        <Route path='/secondform' element={<Secondform/>}></Route>
        <Route path='/thirdform' element={<Thirdform/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
