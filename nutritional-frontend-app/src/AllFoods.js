import React, { useEffect, useState } from 'react';

import './AllFoods.css'

function AllFoods() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/foods')
      .then(response => response.json())
      .then(data => setFoods(data))
      .catch(error => console.error('Error fetching food data:', error));
  }, []);

  return (
    <div>
      <h2>Food Data:</h2>
      <table>
        <th>ID</th>
        <th>Food Name</th>
        <th>Calories</th>
        <th>Fat</th>
        <th>Protein</th>
        <th>Carbohydrates</th>
        <th>Fiber</th>
        {foods.map(food => (
          <tr key={food.id}>
            <td>{food.id}</td>
            <td>{food.name}</td>
            <td>{food.calories}</td>
            <td>{food.fat}</td>
            <td>{food.protein}</td>
            <td>{food.carbs}</td>
            <td>{food.fiber}</td>
          </tr>
        ))}
      </table>
      <hr></hr>
      <div align='center'>
        <form>
          <h2 align='center'>Remove a Food</h2>
          <label>ID</label><br></br> <input type='text'></input>
          <button value=''>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AllFoods;