import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { RecipeService } from "../recipes/recipe.service";
import { RecipesModel } from "../recipes/recipes.model";

@Injectable()
export class DataStorageservice{
    constructor(private http:HttpClient,private recipesService:RecipeService){

    }
    storeRecipes(){
        const recipes =this.recipesService.getRecipes();
        this.http.put('https://mealsapp-e9e71-default-rtdb.firebaseio.com/recipes.json',recipes).subscribe(res=>{
            console.log(res);
        });

    }
    fetchRecipes(){
      return   this.http.get<RecipesModel[]>('https://mealsapp-e9e71-default-rtdb.firebaseio.com/recipes.json')
        
        .pipe(map(recipes=>{
            return recipes.map(recipe=>{
                return {...recipe,ingredients:recipe.ingredients?recipe.ingredients:[]};
            });
        }),tap(recipes=>{
            this.recipesService.setRecipes(recipes);
        }))
       
    }
}