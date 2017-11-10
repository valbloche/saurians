import { Component, OnInit, Input } from '@angular/core';
import { Dinosaure } from '../dinosaure';

@Component({
  selector: 'app-dinosaure-detail',
  templateUrl: './dinosaure-detail.component.html',
  styleUrls: ['./dinosaure-detail.component.css']
})
export class DinosaureDetailComponent implements OnInit {

  @Input() dino: Dinosaure;
  
  constructor() { }

  ngOnInit() {
  }

}
