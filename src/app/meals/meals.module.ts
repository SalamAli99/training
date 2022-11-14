import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MealsRoutingModule} from "./meals-routing.module";
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { MymainComponent } from './mymain/mymain.component';
 import { DropdownDirective } from './shared/drobdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RouterModule } from '@angular/router';
import { StartPageComponent } from './recipes/start-page/start-page.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageservice } from './shared/data-storage.service';
import {HttpClientModule} from '@angular/common/http';
import { RecipesResolverService } from './recipes/recipes-resolver.service';


@NgModule({
  declarations: [
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailsComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    MymainComponent,
    DropdownDirective,
    StartPageComponent,
    RecipeEditComponent
  ],
 
  imports: [
    CommonModule,
    MealsRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[ShoppingListService,RecipeService,DataStorageservice,RecipesResolverService]
})
export class MealsModule { }
