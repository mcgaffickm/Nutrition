import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function AddFood(){

    //Creates the food value
    const [food, setFood] = useState({name:"", date:"", calories:"",fat:"",protein:"",carbs:"",fiber:""});

    //Fetch method to make the post
    const handleSubmit = function(event) {
      event.preventDefault();
      fetch('http://localhost:8080/foods', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(food),
      })
      .then(response => response.json())
      .then(data => console.log('Food Created:', data))
      .catch(error => console.error('Error creating user:', error));
    };

    //Handles change event
    const handleChange = function(event){
      const{name, value} = event.target;
      setFood(prevFood => ({...prevFood, [name]: value}));
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
            <input name= "date" type = "date" value={food.date} onChange={handleChange} ></input>
            <br /><br />
            <label>Calories: </label>
            <input name= "calories" type = "text" value={food.calories} onChange={handleChange} ></input>
            <br /><br />
            <label>Fat:</label>
            <input name= "fat" type = "text" value={food.fat} onChange={handleChange} ></input>
            <br /><br />
            <label>Protein: </label>
            <input name= "protein" type = "text" value={food.protein} onChange={handleChange} ></input>
            <br /><br />
            <label>Carbohydrates: </label>
            <input name= "carbs" type = "text" value={food.carbs} onChange={handleChange}></input>
            <br /><br />
            <label>Fiber: </label>
            <input name= "fiber" type = "text" value={food.fiber} onChange={handleChange}></input>
            <br /><br />
            <button name="submit" type="submit" >Submit</button>
        </form>
      </div>
    )
  }

  export default AddFood;