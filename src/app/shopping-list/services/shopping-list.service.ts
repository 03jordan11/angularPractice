import { Injectable } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Injectable({providedIn: 'root'})
export class ShoppingListService{
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomates', 10)
      ];

    getIngredients(){
        return this.ingredients;
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
    }

    addIngredientList(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
    }
}