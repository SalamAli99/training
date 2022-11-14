import { IngredientsModel } from "../shared/ingredients.model";

export  class RecipesModel{
  public name:string;
  public description:string;
  public imagePath:string;
  public ingredients:IngredientsModel[];
  constructor(name:string,description:string,imagePath:string,ingredients:IngredientsModel[]) {
    this.description=description;
    this.name=name;
    this.imagePath=imagePath;
    this.ingredients=ingredients;
  }
}
