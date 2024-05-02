
import './App.css';
import About from './About.js'
import Home from './Home.js'
import AllFoods from './AllFoods.js';
import AddFood from './AddFood.js';
import 'bootstrap/dist/css/bootstrap.min.css';

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
          <Link to ="/About">About</Link>
          </li>
          <li>
          <Link to ="/AllFoods">All Foods</Link>
          </li>
          <li>
          <Link to ="/AddFood">Add Food</Link>
          </li>
        </ol>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path ="/About" element={<About />}></Route>
          <Route exact path ="/AllFoods" element={<AllFoods />}></Route>
          <Route exact path ="/AddFood" element={<AddFood />}></Route>
        </Routes>
      </div>
     </Router>
  );
}


export default App;
