import React, { useEffect, useState } from 'react';

function Totals(){
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
        <h2>Totals</h2>
        <p></p>
      </div>
    )
  }

  export default Totals;