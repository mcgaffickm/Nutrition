import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './AddFood.css'

function AddFood(){



    //Creates the food value
    const [food, setFood] = useState({name:"",calories:"",fat:"",protein:"",carbs:"",fiber:""});

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
        
        <div align="center">
          <form align="center" onSubmit={handleSubmit}>
          <h1 align="center">Add a food</h1>
              <label>Name of Food: </label><br></br>
              <input name= "name" type = "text" value={food.name} onChange={handleChange}></input>
              <br /><br />
              <label>Date Eaten </label><br></br>
              <input name= "date" type = "date" value={food.date} onChange={handleChange}></input>
              <br /><br />
              <label>Calories:</label><br></br>
              <input class='inputnums'  name= "calories" type = "number" value={food.calories} onChange={handleChange} ></input>
              <br /><br />
              <label>Fat:</label><br></br>
              <input class='inputnums' name= "fat" type = "number" value={food.fat} onChange={handleChange} ></input>
              <br /><br />
              <label>Protein:</label><br></br>
              <input class='inputnums' name= "protein" type = "number" value={food.protein} onChange={handleChange} ></input>
              <br /><br />
              <label>Carbohydrates: </label><br></br>
              <input class='inputnums'  name= "carbs" type = "number" value={food.carbs} onChange={handleChange}></input>
              <br /><br />
              <label>Fiber: </label><br></br>
              <input class='inputnums' name= "fiber" type = "number" value={food.fiber} onChange={handleChange}></input>
              <br /><br />
              <button name="submit" type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }

  export default AddFood;