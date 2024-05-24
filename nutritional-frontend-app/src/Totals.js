import React, { useEffect, useState } from 'react';
import {PieChart, Pie, Cell} from 'recharts';

function Totals(){


  const COLORS = ['#0088FE', "#00C49F", "#FFBB28"]

  //Post request to get all the food data
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/foods/totals')
      .then(response => response.json())
      .then(data => setFoods(data))
      .catch(error => console.error('Error fetching food data:', error));
  }, []);

  
    return(
      <div>
        <h2>Totals</h2>
        <p></p>
        <table>
        <th>Food For</th>
        <th>Date Eaten</th>
        <th>Calories</th>
        <th>Fat</th>
        <th>Protein</th>
        <th>Carbohydrates</th>
        <th>Fiber</th>
        <th>Macronutrients Chart</th>
        {foods.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.date}</td>
            <td>{food.calories}</td>
            <td>{food.fat}</td>
            <td>{food.protein}</td>
            <td>{food.carbs}</td>
            <td>{food.fiber}</td>
            <td>
              <PieChart width={100} height={100}>
                <Pie
                data = {[{name:'Fat', value: food.fat}, {name:'Protein', value:food.protein}, {name:'Carbohydrates', value:food.carbs}]}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={40}
                fill="#8884d8"
                >
                </Pie>
              </PieChart>
            </td>
          </tr>
        ))}
      </table>
      </div>
    )
  }

  export default Totals;