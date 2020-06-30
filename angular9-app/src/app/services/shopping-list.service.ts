import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('ingredient 1', 10),
    new Ingredient('ingredient 2', 14)
  ];

  ingredientsUpdated = new EventEmitter<Ingredient[]>();

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // return a copy of the list of ingredients updated
    this.ingredientsUpdated.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsUpdated.emit(this.ingredients.slice());
  }

}
