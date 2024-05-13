import React, { useEffect, useState } from 'react';

import './AllFoods.css'

function AllFoods() {
  const [foods, setFoods] = useState([]);
  let removeid;
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
        <th>Date Eaten</th>
        <th>Calories</th>
        <th>Fat</th>
        <th>Protein</th>
        <th>Carbohydrates</th>
        <th>Fiber</th>
        {foods.map(food => (
          <tr key={food.id}>
            <td>{food.id}</td>
            <td>{food.name}</td>
            <td>{food.date}</td>
            <td>{food.calories}</td>
            <td>{food.fat}</td>
            <td>{food.protein}</td>
            <td>{food.carbs}</td>
            <td>{food.fiber}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default AllFoods;