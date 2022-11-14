import {Component, Input, OnInit} from '@angular/core';
import {RecipesModel} from "../../recipes.model";

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
@Input() recipe!:RecipesModel;
@Input() index!:number;

  ngOnInit(): void {
  }

}
