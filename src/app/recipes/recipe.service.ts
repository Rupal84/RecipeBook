import { Recipe } from './recipe-model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe( "Chicken Recipe", 
        "Authentic south asian recipe",
        "https://c1.wallpaperflare.com/preview/992/474/505/food-meat-recipe-power.jpg",
        [
            new Ingredient("Chicken", 1),
            new Ingredient("Lemon", 5)
        ]),
        new Recipe( "Pickled Garlic", 
        "A delicious pickle recipe",
        "https://live.staticflickr.com/5836/30219331242_56aa4dfca9_b.jpg",
        [
            new Ingredient("Garlic", 50),
            new Ingredient("Vinegar", 500)
        ])
      ];

      constructor(private slService: ShoppingListService) {}
      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
      }
}