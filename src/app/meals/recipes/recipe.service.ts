import {Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { IngredientsModel } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { RecipesModel } from "./recipes.model";
@Injectable()
export class RecipeService{
  recipesChanged=new Subject<RecipesModel[]>();
  constructor(private shoppingListService:ShoppingListService){}
  setRecipes(recipes:RecipesModel[]){
    this.recipes=recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  private recipes:RecipesModel[]=[];
  //  private recipes:RecipesModel[]=[
  //       new RecipesModel(
  //         'test',
  //         'this is a simple test recipe',
  //     'https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000',
  //     [
  //       new IngredientsModel('Meat',1),
  //       new IngredientsModel('Botato',4),
  //     ]
  //       )
  //     ];
      
      getRecipes(){
      return  this.recipes.slice();
      }
      addIngredrientsToShoppingList(ingredients:IngredientsModel[]){
        this.shoppingListService.addIngredeints(ingredients);
      }
      getRecipe(index:number){
        return  this.recipes[index];
      }
      addRecipe(recipe:RecipesModel){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }
      updateRecipe(index:number,newRecipe:RecipesModel){
        this.recipes[index]=newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }
      deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
      }

      
}