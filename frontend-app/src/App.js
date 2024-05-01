import logo from './logo.svg';
import './App.css';
import About from './About.js'
import Home from './Home.js'


import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

//Router to determine the different links
function App() {
  return (
     <Router>
      <div>
        <ol>
          <li>
            <Link to ="/">Home</Link>
          </li>
          <li>
          <Link to ="/about">About</Link>
          </li>
        </ol>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path ="/about" element={<About />}></Route>
        </Routes>
      </div>
     </Router>
  );
}


export default App;
