import React, { useEffect, useState } from 'react';

import {PieChart, Pie, Cell} from 'recharts';

function FoodGraphs(){
  const [foods, setFoods] = useState([]);

  

  //Post request to get all the food data
  useEffect(() => {
    fetch('http://localhost:8080/foods')
      .then(response => response.json())
      .then(data => setFoods(data))
      .catch(error => console.error('Error fetching food data:', error));
  }, []);

    return(
      <div>
        <h2>A Food Graph will go here</h2>
      </div>
    )
  }

  export default FoodGraphs;