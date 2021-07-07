import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { Recipe } from "../recipe.model";

@Injectable({providedIn: 'root'})
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Brocili and Beef',
         'this is simply a brocoli and beef recipe',
          'https://live.staticflickr.com/65535/48588252551_16d7043332_h.jpg',
          [
              new Ingredient('Meat', 1),
              new Ingredient('French Fries', 20)
          ]),
        new Recipe('A test recipe',
         'this is simply a test',
          'https://live.staticflickr.com/65535/48588252551_16d7043332_h.jpg',
          [
              new Ingredient('Buns', 2),
              new Ingredient('Meat', 1)
          ])
      ];

      getRecipes(){
          //returns new array instead of being a pointer to the original oneby using slice
          return this.recipes.slice();
      }
}