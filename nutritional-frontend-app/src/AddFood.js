import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function AddFood(){
  
    //Creates the input form for the food entries
    return(
      <div>
        <h1 align="center">Add a food</h1>
        <form align="center">
            <label>Name of Food: </label>
            <input name= "name" type = "text"></input>
            <br /><br />
            <label>Date Eaten: </label>
            <input name= "date" type = "date"  ></input>
            <br /><br />
            <label>Calories: </label>
            <input name= "calories" type = "text" ></input>
            <br /><br />
            <label>Fat:</label>
            <input name= "fat" type = "text"  ></input>
            <br /><br />
            <label>Protein: </label>
            <input name= "protein" type = "text"  ></input>
            <br /><br />
            <label>Carbohydrates: </label>
            <input name= "carbs" type = "text" ></input>
            <br /><br />
            <label>Fiber: </label>
            <input name= "fiber" type = "text" ></input>
            <br /><br />
            <button name="submit" type="submit" >Submit</button>
        </form>
      </div>
    )
  }

  export default AddFood;