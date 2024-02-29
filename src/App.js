import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Adduser from './Users/Adduser';
import Edituser from './Users/Edituser';
import Header from './pages/Header';
import Viewuser from './Users/Viewuser';
import Login from './pages/Login';
import Movie from './movielist';
import Signup from './pages/Signup';
import Lovetoday from './lovetoday';
import Tranformers from './transformers';
import Goodnight from './Goodnight';
import Spiderman from './Spiderman';
import PS2 from './PS2';
import M2018 from './2018';
import Por from './PorThozhil';

function App() {
  return (
    <div className="App">
      <Router>
      
      <Routes>
       <Route exact path ="/" element={<Login/>}/>
       <Route exact path ="/movielist" element={<Movie/>}/>
       <Route exact path="/Home" element={<Home/>}/>
       <Route exact path="/user/signup" element={<Signup/>}/>
        <Route exact path="/adduser" element={<Adduser/>}/>
        <Route exact path="/edituser/:id" element={<Edituser  />}/> 
        <Route exact path="/viewuser/:id" element={<Viewuser  />}/> 
        <Route exact path="/veerandetails" element={<Lovetoday />}/>
        <Route exact path="/transformerdetails" element={<Tranformers />}/>
        <Route exact path="/goodnight" element={<Goodnight />}/>
        <Route exact path="/spiderman" element={<Spiderman />}/>
        <Route exact path="/ps2" element={<PS2 />}/>
        <Route exact path="/2018" element={<M2018 />}/>
        <Route exact path="/por" element={<Por />}/>

     </Routes>
      </Router>
    </div>
  );
}

export default App;
