package com.example.nutritional;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.ArrayList;

import org.apache.catalina.connector.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
@RequestMapping("/foods")
public class FoodController {
    private final FoodRepository foodRepository;

    //Constructor for the repository
    public FoodController(FoodRepository foodRepository)
    {
        this.foodRepository = foodRepository;
    }

    //Returns all food if get is used on this web page
    @GetMapping
    public List<Food> getFoods() 
    {
        return foodRepository.findAll();
    }

    //Mapping for the totals
    @GetMapping("/totals")
    public List<Food> getTotalFoods() 
    {
        List<Food> foods = foodRepository.findAll();
        ArrayList<Food> totalFood = new ArrayList<Food>();
        Food totals = new Food("Total Food","n/a",0,0,0,0,0);
        //Loops through total, eventually will add
        for(int j = 0; j < foods.size(); j++)
        {
            totals.addCalories(foods.get(j).getCalories());
            totals.addFat(foods.get(j).getFat());
            totals.addCarbs(foods.get(j).getCarbs());
            totals.addProtein(foods.get(j).getProtein());
            totals.addFiber(foods.get(j).getFiber());
        }

       totalFood.add(totals);
        return totalFood;
    }
    
    //Post mapping to create new foods
    @PostMapping
    public ResponseEntity createFood(@RequestBody Food food) throws URISyntaxException{
        Food savedFood = foodRepository.save(food);
        return ResponseEntity.created(new URI("/foods/" + savedFood.getId())).body(savedFood);
    }

    //Put mapping for updating existing records
    @PutMapping("/{id}")
    public ResponseEntity updateFood(@PathVariable Long id, @RequestBody Food food){
        Food currentFood = foodRepository.findById(id).orElseThrow(RuntimeException::new);
        
        //Updates the values of the food
        currentFood.setDate(food.getDate());
        currentFood.setName(food.getName());
        currentFood.setCalories(food.getCalories());
        currentFood.setFat(food.getFat());
        currentFood.setProtein(food.getProtein());
        currentFood.setCarb(food.getCarbs());
        currentFood.setFiber(food.getFiber());

        return ResponseEntity.ok(currentFood);        
    }

    //Delete mapping for removing records
    @DeleteMapping("/{id}")
    public ResponseEntity deleteFood(@PathVariable Long id){
        foodRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
