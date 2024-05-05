import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function AddFood(){
  const [food, setFood] = useState({ name: '', date: '', calories: '', fat: '' ,protien: '' ,carbs: ''   });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('<http://localhost:8080/food>', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(food),
    })
    .then(response => response.json())
    .then(data => console.log('Food created:', data))
    .catch(error => console.error('Error creating food:', error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFood(prevFood => ({ ...prevFood, [name]: value }));
  };
    //Creates the input form for the food entries
    return(
      <div>
        <h1 align="center">Add a food</h1>
        <form align="center" onSubmit={handleSubmit}>
            <label>Name of Food: </label>
            <input name= "name" type = "text" value={food.name} onChange={handleChange}></input>
            <br /><br />
            <label>Date Eaten: </label>
            <input name= "date" type = "date" value={food.date} onChange={handleChange}></input>
            <br /><br />
            <label>Calories: </label>
            <input name= "calories" type = "text" value={food.calories} onChange={handleChange}></input>
            <br /><br />
            <label>Fat:</label>
            <input name= "fat" type = "text" value={food.fat} onChange={handleChange}></input>
            <br /><br />
            <label>Protien: </label>
            <input name= "protien" type = "text" value={food.protien} onChange={handleChange}></input>
            <br /><br />
            <label>Carbohydrates: </label>
            <input name= "carbs" type = "text" value={food.carbs} onChange={handleChange}></input>
            <br /><br />
            <button name="submit" type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }

  export default AddFood;