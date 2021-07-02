import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Brocili and Beef', 'this is simply a brocoli and beef recipe', 'https://live.staticflickr.com/65535/48588252551_16d7043332_h.jpg'),
    new Recipe('A test recipe', 'this is simply a test', 'https://live.staticflickr.com/65535/48588252551_16d7043332_h.jpg')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }

}
