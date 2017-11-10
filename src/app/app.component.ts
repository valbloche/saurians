import { Component, OnInit } from '@angular/core';
import { DinosauresComponent } from './dinosaures/dinosaures.component';

import { Dinosaure } from './dinosaure';
import { DINOS } from './dinosaures/db_dinos';
import { MatRadioChange } from '@angular/material';
import { MatTooltip } from '@angular/material';

import { ChartService } from './chart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './font-awesome.min.css']
})
export class AppComponent implements OnInit{
  title: string = 'Dinosaures';
  dinos: Dinosaure[] = DINOS;
  chartProducts: any[] = [];

  constructor(private chart: ChartService) { }
  
  ngOnInit() {
    this.chart.currentProduct.subscribe(product => {console.log(product); this.chartProducts.push(product) })
  }

  chartToString(): string{
    var tooltip: string = "Panier : ";
    var price: number = 0;

    if(this.chartProducts.length > 1){
      this.chartProducts.forEach((value, index) => {
        if(value.name){
          tooltip += "\n"+value.name;
        }
        price += value.price || 0;
      })
    }else{
      tooltip += "Vide"
    }

    return tooltip + "\r\n" + price;
  }
}