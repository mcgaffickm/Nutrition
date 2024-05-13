package com.example.nutritional;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

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

    @GetMapping("/graphs")
    public List<Food> getTotalsForGraph() 
    {
        List<Food> foods = foodRepository.findAll();
        Food totals = new Food("Total Food For","",0,0,0,0,0);
        //Loops through total, eventually will add
        for(int j = 0; j < foods.size(); j++)
        {
            //Adds the values for each date of the food
            totals.addCalories(foods.get(j).getCalories());
            totals.addFat(foods.get(j).getFat());     
            totals.addCarbs(foods.get(j).getCarbs());        
            totals.addProtein(foods.get(j).getProtein());        
            totals.addFiber(foods.get(j).getFiber());
        }

        foods.add(totals);
        return foods;
    }


    //Mapping for the totals
    @GetMapping("/totals")
    public List<Food> getTotalFoods() 
    {
        List<Food> foods = foodRepository.findAll();
        ArrayList<Food> totalFood = new ArrayList<Food>();
        Food totals = new Food("Total Food For","",0,0,0,0,0);
        
        int[] calories = new int[foods.size()];
        int[] fiber = new int[foods.size()]; 
        int[] fat = new int[foods.size()]; 
        int[] protein = new int[foods.size()];
        int[] carbs = new int[foods.size()];
        
        //Loops through total, eventually will add
        for(int j = 0; j < foods.size(); j++)
        {
            //Sets the initial date or adds a new date if needed
            if(j == 0)
            {
                totals.setDate(foods.get(j).getDate());
            }
            else if(totals.getDate() != foods.get(j).getDate())
            {
                totalFood.add(totals);
                totals = new Food("Total Food For",foods.get(j).getDate(),0,0,0,0,0);
            }
           
            //Adds the values for each date of the food
            totals.addCalories(foods.get(j).getCalories());
            calories[j] = foods.get(j).getCalories();
            totals.addFat(foods.get(j).getFat());
            fat[j] = foods.get(j).getFat();
            totals.addCarbs(foods.get(j).getCarbs());
            carbs[j] = foods.get(j).getCarbs();
            totals.addProtein(foods.get(j).getProtein());
            protein[j] = foods.get(j).getProtein();
            totals.addFiber(foods.get(j).getFiber());
            fiber[j] = foods.get(j).getFiber();
        }

       totalFood.add(totals);


       //Skips if there are no values
       if(totalFood.get(0).getCalories() == 0)
       {
            return totalFood;
       }

       //Medians
       Food medians = new Food("Medians", "N/A", median(calories), median(fat), median(protein), median(carbs), median (fiber));
       //Modes
       Food mode = new Food("Mode", "N/A", mode(calories), mode(fat), mode(protein), mode(carbs), mode(fiber));
       //Means
       Food means = new Food("Means", "N/A", mean(calories), mean(fat), mean(protein), mean(carbs),mean(fiber));

       //Adds the stats to the food totals
       totalFood.add(medians);
       totalFood.add(means);
       totalFood.add(mode);

       return totalFood;
    }

    public int mean(int[] val)
    {
        int mean = 0;
        int total = 0, count = val.length;
        for(int j = 0; j < val.length; j++)
        {
            total += val[j];
        }
        mean = total/count;
        return mean;
    }

    public int mode(int[] val)
    {
        Arrays.sort(val);
        int count = 0; 
        int maxCount = -1;
        int mode = 0;
        for(int j = 0;  j < val.length; j++)
        {
            if(j == 0)
            {
                count++;
            }
            else if(val[j] == val[j-1])
            {
                count++;
            }
            else{
                if(count > maxCount)
                {
                    maxCount = count;
                    mode = val[j];
                }
            }
        }
        
        if(count > maxCount)
        {
            maxCount = count;
            mode = val[val.length-1];
        }
        
        return mode;
    }

    //Method to get the median from an array list
    public int median(int[] vals)
    {
        //Sorts the array
        Arrays.sort(vals);

        //Determines the size and calculates middle value
        int median = 0;
        if(vals.length % 2 == 0)
            median = (vals[vals.length/2] + vals[vals.length/2 - 1]) / 2;
        else
            median = vals[vals.length/2];
        return median;

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
