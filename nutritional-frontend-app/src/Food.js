function AddFood(){

    //Creates the input form for the food entries
    return(
      <div>
        <h1 align="center">Add a food</h1>
        <form align="center">
            <label>Name of Food: </label>
            <input name= "input_name" type = "text"></input>
            <br /><br />
            <label>Date Eaten: </label>
            <input name= "input_date" type = "date"></input>
            <br /><br />
            <label>Calories: </label>
            <input name= "input_calories" type = "text"></input>
            <br /><br />
            <label>Fat:</label>
            <input name= "fat" type = "text"></input>
            <br /><br />
            <label>Protien: </label>
            <input name= "input_protien" type = "text"></input>
            <br /><br />
            <label>Carbohydrates: </label>
            <input name= "input_carbs" type = "text"></input>
            <br /><br />
            <button name="submit"></button>
        </form>
      </div>
    )
  }

  export default AddFood;