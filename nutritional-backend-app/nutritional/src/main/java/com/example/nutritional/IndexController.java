package com.example.nutritional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


//Controller for the 'web pages'
@RestController
public class IndexController {
    
    //Maps the path to the index
    @GetMapping("/")
    public String index() {
        return "Hello World";
    }
    
}
