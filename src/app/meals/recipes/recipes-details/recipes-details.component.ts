import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import {RecipesModel} from "../recipes.model";

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
recipe!:RecipesModel;
id!:number;
  constructor(private recipeService:RecipeService,private route :ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
      this.id=+params['id'];
      this.recipe=this.recipeService.getRecipe(this.id);
      }
    );
  }
onAddToShoppingList(){
  this.recipeService.addIngredrientsToShoppingList(this.recipe.ingredients);
}
onEditRecipe(){
  this.router.navigate(['edit'],{relativeTo:this.route});
  // this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route});
}
onDeleteRecipe(){
  this.recipeService.deleteRecipe(this.id);
  this.router.navigate(['/mymain/recipes']);
}
}
