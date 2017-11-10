import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DinosauresComponent } from './dinosaures/dinosaures.component';
import { DinosaureDialogComponent } from './dinosaures/dinosaures.component';
import { DinosaureDetailComponent } from './dinosaure-detail/dinosaure-detail.component';
import { AppRoutingModule } from './/app-routing.module';

import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NourritureComponent } from './nourriture/nourriture.component';

import { DinoService } from './dino.service';
import { ChartService } from './chart.service';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DinosauresComponent,
    DinosaureDetailComponent,
    DinosaureDialogComponent,
    NourritureComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatInputModule,
    MatRadioModule,
    MatSidenavModule,
    MatDialogModule,
    MatChipsModule,
    MatButtonModule,
    MatTooltipModule,
    BrowserAnimationsModule
  ],
  entryComponents:[
    DinosaureDialogComponent
  ],
  providers: [ DinoService, ChartService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
