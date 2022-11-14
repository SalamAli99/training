import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataStorageservice } from "../shared/data-storage.service";
import { RecipeService } from "./recipe.service";
import { RecipesModel } from "./recipes.model";

@Injectable()
export class RecipesResolverService implements Resolve<RecipesModel[]>{
 constructor(private dataStorageService:DataStorageservice,private recipesService:RecipeService){}
 resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): RecipesModel[] | Observable<RecipesModel[]> | Promise<RecipesModel[]> {
    const recipes=this.recipesService.getRecipes();
    if(recipes.length===0){
        return this.dataStorageService.fetchRecipes();

    }else{
        return recipes;
    }
 }
}