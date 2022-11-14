import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IngredientsModel } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
@ViewChild('f') slForm! : NgForm;
subscription!:Subscription;
editMode=false;
editedItemIndex!:number;
editedItem!:IngredientsModel;
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  this.subscription=  this.shoppingListService.startedEditing.subscribe(
    (index:number)=>{
      this.editedItemIndex=index;
        this.editMode=true;
        this.editedItem=this.shoppingListService.getIngredeint(index);
        this.slForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        });
    }
  );
  }
ngOnDestroy(): void {
  this.subscription.unsubscribe();
}
onClear(){
  this.slForm.reset();
  this.editMode=false;
}
onDelete(){
  this.shoppingListService.deleteIngredeint(this.editedItemIndex);
  this.onClear();
}
  onSubmit(form:NgForm){
    const value=form.value;
    const newingredeint= new IngredientsModel(
      value.name,value.amount
      );
      if(this.editMode){
        this.shoppingListService.updateIngredeint(this.editedItemIndex,newingredeint);
      }
      else{
        this.shoppingListService.addIngredient(newingredeint);

      }
      this.editMode=false;
      form.reset();
  }

}
