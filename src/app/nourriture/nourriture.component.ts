import { Component, OnInit } from '@angular/core';

import { FOODS } from './db_nourriture';

@Component({
  selector: 'app-nourriture',
  templateUrl: './nourriture.component.html',
  styleUrls: ['./nourriture.component.scss']
})
export class NourritureComponent implements OnInit {

  foods = FOODS;

  constructor() { }

  ngOnInit() {
  }

}
