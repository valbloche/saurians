import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { DinoService } from '../dino.service';
import { ChartService } from '../chart.service';

import { Dinosaure } from '../dinosaure';
import { REGIMES } from './db_dinos';
import { EPOQUES } from './db_dinos';
import { DINOS } from './db_dinos';

@Component({
  selector: 'app-dinosaures',
  templateUrl: './dinosaures.component.html',
  styleUrls: ['./dinosaures.component.scss', '../font-awesome.min.css']
})
export class DinosauresComponent implements OnInit {

  REGIMES = REGIMES;
  EPOQUES = EPOQUES;
  selectedDino: Dinosaure = null;
  dinos: Dinosaure[]; 
  filteredDinos: Dinosaure[]; 

  constructor(public dialog: MatDialog, private dinoService: DinoService, private chartService: ChartService) { }

  ngOnInit() {
    this.getDinos();
  }

  openDialog(dino: Dinosaure): void{
    this.selectedDino = dino;

    let dialogRef = this.dialog.open(DinosaureDialogComponent, {
      width: '800px',
      data: { dino: this.selectedDino, regimes: REGIMES, epoques: EPOQUES }
    });

  }

  getDinos(): void{
    this.dinoService.getDinos().subscribe((dinos) => { this.dinos = dinos; this.filteredDinos = dinos });
  }

  filterDinos(event, field: string){
    this.filteredDinos = this.dinos.filter((dino) => dino[field] == +event.value)
  }

  addDinoToChart(event, dino): void{
    event.stopPropagation();
    this.chartService.addProduct(dino)
  }

}

@Component({
    templateUrl: 'dialog-dinosaure-detail.html',
    styleUrls: ['./dinosaure.dialog.component.css']
})
export class DinosaureDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DinosaureDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private chartService: ChartService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addDinoToChart(): void{
    this.chartService.addProduct(this.data.dino)
  }

}