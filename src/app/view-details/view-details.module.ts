import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewDetailsPage } from './view-details.page';

import { IonicModule } from '@ionic/angular';

import { ViewDetailsPageRoutingModule } from './view-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewDetailsPageRoutingModule
  ],
  declarations: [ViewDetailsPage]
})
export class ViewDetailsPageModule {}
