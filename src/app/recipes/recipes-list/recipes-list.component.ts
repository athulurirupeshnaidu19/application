import { Component, OnInit } from '@angular/core';
import {Recipes} from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipes[]= [
    new Recipes('A Test Recipe','This is simply a test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxjRAibTZqywTgxBKf3ITrTnVjRbQrdiifhiq4e3b-X9UoFthJCw&s')
      ] ;

  constructor() { }

  ngOnInit() {
  }

}
