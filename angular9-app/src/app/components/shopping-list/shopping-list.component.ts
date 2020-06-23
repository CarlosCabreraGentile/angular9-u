import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('ingredient 1', 10),
    new Ingredient('ingredient 2', 14)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredienteAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
