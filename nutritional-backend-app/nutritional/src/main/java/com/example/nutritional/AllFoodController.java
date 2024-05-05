package com.example.nutritional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

//Controller for the 'web pages'
@RestController
public class AllFoodController {
    
    //Maps the path to the to get all food
    @GetMapping("/FoodData")
    public List<String> index() {
        List<String> test = new ArrayList<String>();
        test.add("chocolate");
        test.add("pizza");
        return test;
    }
    
}
