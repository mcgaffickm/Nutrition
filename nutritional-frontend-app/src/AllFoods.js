import React, { useEffect, useState } from 'react';

function AllFoods() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/foods', {mode:"no-cors"})
      .then(response => response.json())
      .then(data => setFoods(data))
      .catch(error => console.error('Error fetching food data:', error));
  }, []);

  return (
    <div>
      <h2>Food Data:</h2>
      <ul>
        {foods.map(food => (
          <li key={food.id}>{food.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AllFoods;