import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {MymainComponent} from "./mymain/mymain.component";
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { RecipesComponent } from './recipes/recipes.component';
import { StartPageComponent } from './recipes/start-page/start-page.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/mymain', pathMatch: "full"},

  
  {path:'mymain',component:MymainComponent,children:[
    {path:'recipes',component:RecipesComponent,children:[
      {path:'',component:StartPageComponent},
      {path:'new',component:RecipeEditComponent},
      {path:':id',component:RecipesDetailsComponent,resolve:[RecipesResolverService]},
      
      {path:':id/edit',component:RecipeEditComponent,resolve:[RecipesResolverService]}
    ]},
    {path:'shopping-list',component:ShoppingListComponent},
    {path: 'header', component: HeaderComponent},
  ]},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MealsRoutingModule {
}
