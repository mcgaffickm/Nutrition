package com.example.nutritional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController{
    
    //Just a sample hello world for when viewing the rest api
    @GetMapping("/")
    public String index() {
        return "Hello World";
    }
    
}