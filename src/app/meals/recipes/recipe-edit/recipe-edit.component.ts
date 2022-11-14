import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { RecipesModel } from '../recipes.model';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id!:number;
  editMode=false;
  recipeForm!:FormGroup;
  constructor(private route:ActivatedRoute, private recipeService:RecipeService,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editMode=params['id']!=null;
        this.initForm();
      }
    
    );
  }
  onSubmit(){
    const newRecipe=new RecipesModel(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredeints']
      );
    if(this.editMode){
      
      this.recipeService.updateRecipe(this.id,newRecipe);
    }
    else{
      this.recipeService.addRecipe(newRecipe);
    }
    this.onCancel();
  }
  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }
  onAddIngredeint(){
   (<FormArray>this.recipeForm.get('ingredeints')).push(
    new FormGroup({
      'name':new FormControl(null,Validators.required),
      'amount':new FormControl(null,[Validators.pattern(/^[1-9]+[0-9]*$/),Validators.required])
    })
   );
  }
  onDeleteIngredeint(index:number){
   (<FormArray> this.recipeForm.get('ingredeints')).removeAt(index);
  }
  get xxx(){
    return  (<FormArray>this.recipeForm.get('ingredeints')) ;
    }
private initForm(){

  let recipeName='';
  let recipeImagePath='';
  let recipeDescription='';
  let recipeIngredrints=new FormArray<FormGroup>([]);
  
  if(this.editMode){
    const recipe=this.recipeService.getRecipe(this.id);
    recipeName=recipe.name;
    recipeImagePath=recipe.imagePath;
    recipeDescription=recipe.description;
    if(recipe['ingredients']){
      for(let ingredeint of recipe.ingredients){
        recipeIngredrints.push(
          new FormGroup({
          'name':new FormControl(ingredeint.name,Validators.required),
          'amount':new FormControl(ingredeint.amount,[Validators.pattern(/^[1-9]+[0-9]*$/),Validators.required])
        }
        )
        );
      }
    }
  }
  
  this.recipeForm=new FormGroup({
    'name':new FormControl(recipeName,Validators.required),
    'imagePath':new FormControl(recipeImagePath,Validators.required),
    'description':new FormControl(recipeDescription,Validators.required),
    'ingredeints':recipeIngredrints
  });
}

}
