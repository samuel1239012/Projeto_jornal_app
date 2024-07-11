import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiasPageRoutingModule } from './noticias-routing.module';

import { NoticiasPage } from './noticias.page';
import { BackButtonComponent } from 'src/app/component/back-button/back-button.component';
import { BackButtonModule } from 'src/app/component/back-button/back-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiasPageRoutingModule,
    BackButtonModule
  ],
  declarations: [NoticiasPage]
})
export class NoticiasPageModule {}
