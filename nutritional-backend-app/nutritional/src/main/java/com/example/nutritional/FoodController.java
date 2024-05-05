package com.example.nutritional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import java.util.*;

@RestController
@RequestMapping("/foods")
public class FoodController {

    //The food repository to hold the foods
    private final FoodRepository foodRepository;

    //Constructor that initializes the food repository
    public FoodController(FoodRepository foodRepository)
    {
        this.foodRepository = foodRepository;
    }

    //Gets the entire list of food in the repository for the basic mapping
    @GetMapping
    public List<Food> getFoods(){
        return foodRepository.findAll();
    } 

    //Gets a specific food based on an id
    @GetMapping("/{id}")
    public Food getFood (@PathVariable Long id){
        return foodRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    
}
