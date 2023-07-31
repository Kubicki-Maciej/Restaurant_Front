import { useState, useEffect } from "react";

export default function MealCounter({data}) {
    const meal = data
    // console.log('tutaj');
    class MealObjects{
        //  not used
        constructor(data){
            this.mealData = data
            this.compresed_data = [] 
        }
           
        findMealId(id){
            if(this.compresed_data.find((item)=> item['meal_id'] == id)){
                return true
            }else{
                return false
            }
        }

    }
    const meals_object = {
        'meals':[
        ]

    }
    if(Array.isArray(meal)){
        
        data.forEach((t)=>{
            t.meal.forEach((e)=>{
                addItem(meals_object['meals'], e)
            })
        })
        console.log(meals_object);
    }
    function addItem(array, item_meal) {
        const item = array.find((item) => item['meal_id'] == item_meal.meal_id)
        if(item){
            item['number_of_meals'] += item_meal.number_of_meals
            item['comments'].push(item_meal.comments) 
        }else{
            array.push({
                "meal_id": item_meal.meal_id,
                "number_of_meals": item_meal.number_of_meals,
                "comments" : [item_meal.comments],
                "meal_name": item_meal.meal_name
            })
        }
    }
    return (
    <div style={{
        border: "1px black solid"
    }}>
        {meals_object['meals'].map(({meal_id, number_of_meals, comments, meal_name})=>
            (   
                <div>
                    <div>Nazwa : {meal_name}</div>
                    <div>Liczba : {number_of_meals}</div>
                    <div> Comments: {comments}</div>
                    

                </div>
            )
        )}
    </div>
    )
}


