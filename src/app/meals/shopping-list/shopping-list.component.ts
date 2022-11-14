import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {IngredientsModel} from "../shared/ingredients.model";
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
ingradients!:IngredientsModel[];
private igChangeSub!:Subscription;
constructor(private shoppingListService:ShoppingListService){}

  ngOnInit(): void {
    this.ingradients=this.shoppingListService.getIngredients();
    this.igChangeSub=this.shoppingListService.ingredientsChanged.subscribe((ingredients:IngredientsModel[])=>{
      this.ingradients=ingredients
    })
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
  onEditItem(index:number){
      this.shoppingListService.startedEditing.next(index);
  }
}
