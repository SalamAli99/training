import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from '../recipe.service';
import {RecipesModel} from "../recipes.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit,OnDestroy {
subscription!:Subscription;
recipes!:RecipesModel[];
  constructor(private recipeService:RecipeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
   
   this.subscription= this.recipeService.recipesChanged.subscribe((recipes:RecipesModel[])=>{
      this.recipes=recipes;

    });
    this.recipes=this.recipeService.getRecipes();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onNewRecipe(){
      this.router.navigate(['new'],{relativeTo:this.route});
  }
}
