
import './App.css';
import About from './About.js'
import Home from './Home.js'
import AllFoods from './AllFoods.js';
import AddFood from './AddFood.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import FoodGraphs from './FoodGraphs.js';
import Totals from './Totals.js';

//Router to determine the different links
function App() {
  return (
     <Router>
      <div>
        <div>
          <h1 class="banner">Nutrional Analyzer</h1>
        </div>
        <div class="topnav">
          <div class="links">
            <Link to ="/">Home</Link>
          </div>
          <div class="links">
            <Link to ="/AddFood">Add a Food</Link>
          </div>
          <div class="links">
            <Link to ="/AllFoods">View All Foods</Link>
          </div>
          <div class="links">
            <Link to ="/FoodGraph">Foods Graphs (WIP)</Link>
          </div>
          <div class="links">
            <Link to ="/Totals">Totals</Link>
          </div>
          <div class="links">
            <Link to ="/About">About</Link>
          </div>

        </div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path ="/About" element={<About />}></Route>
          <Route exact path ="/AllFoods" element={<AllFoods />}></Route>
          <Route exact path ="/AddFood" element={<AddFood />}></Route>
          <Route exact path ="/FoodGraph" element={<FoodGraphs />}></Route>
          <Route exact path ="/Totals" element={<Totals />}></Route>
        </Routes>
      </div>
     </Router>
  );
}


export default App;
