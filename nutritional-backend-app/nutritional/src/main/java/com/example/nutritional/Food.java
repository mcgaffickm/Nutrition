package com.example.nutritional;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Food {
    //Declaration of variables that match react
    private @Id @GeneratedValue Long id;
    private String name;
    private String date;
    private int calories;
    private int fat;
    private int protein;
    private int carbs;
    private int fiber;
    
    public Food() {};

    //Constructor
    public Food(String name,String date, int calories, int fat, int protein, int carbs, int fiber)
    {
        this.name = name;
        this.date = date;
        this.calories = calories;
        this.fat = fat;
        this.protein = protein;
        this.carbs = carbs;
        this.fiber = fiber;
    }

    //Getter and Setters
    public Long getId()
    {return id;}
    public void setId(Long id)
    {this.id = id;}

    public String getName()
    {return name;}
    public void setName(String name)
    {this.name = name;}

    public String getDate()
    {return date;}
    public void setDate(String date)
    {this.date = date;}

    public int getCalories()
    {return calories;}
    public void setCalories(int calories)
    {this.calories = calories;}
    public void addCalories(int calories)
    {this.calories += calories;}

    public int getFat()
    {return fat;}
    public void setFat(int fat)
    {this.fat = fat;}
    public void addFat(int fat)
    {this.fat += fat;}

    public int getCarbs()
    {return carbs;}
    public void setCarb(int carbs)
    {this.carbs = carbs;}
    public void addCarbs(int carbs)
    {this.carbs += carbs;}

    public int getProtein()
    {return protein;}
    public void setProtein(int protein)
    {this.protein = protein;}
    public void addProtein(int protein)
    {this.protein += protein;}

    public int getFiber()
    {return fiber;}
    public void setFiber(int fiber)
    {this.fiber = fiber;}
    public void addFiber(int fiber)
    {this.fiber += fiber;}
    

    //Overrides the to string method
    @Override
    public String toString(){
        return "Food{" + "id=" + id + ", name=" + name + ", date=" + date +", calories=" + calories + 
        ", fat=" + fat + ", carbs=" + carbs + ", protein=" + protein + ", fiber=" + fiber + "}";
    }
}
