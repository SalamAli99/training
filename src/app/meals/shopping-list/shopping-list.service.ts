import { Subject } from "rxjs";
import { IngredientsModel } from "../shared/ingredients.model";

export class ShoppingListService{
   ingredientsChanged=new Subject<IngredientsModel[]>();
   startedEditing=new Subject<number>();
  private  ingradients:IngredientsModel[]=[
        new IngredientsModel('Apples',5),
        new IngredientsModel('Tomatoes',10),
      
      ];
      getIngredients(){
        return this.ingradients.slice();
      }
      addIngredient(ingredient:IngredientsModel){
        this.ingradients.push(ingredient);
        this.ingredientsChanged.next(this.ingradients.slice());
      }
      addIngredeints(ingredients:IngredientsModel[]){
        this.ingradients.push(...ingredients);
        this.ingredientsChanged.next(this.ingradients.slice());
        // for(let ingredient of ingredients){
        //   this.addIngredient(ingredient);

        // }
      }
      getIngredeint(index:number){
          return this.ingradients[index];
      }
      updateIngredeint(index:number,newIngredeint:IngredientsModel){
          this.ingradients[index]=newIngredeint;
          this.ingredientsChanged.next(this.ingradients.slice());

      }
      deleteIngredeint(index:number){
        this.ingradients.splice(index,1);
        this.ingredientsChanged.next(this.ingradients.slice());
      }
}