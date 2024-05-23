import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentWindowComponent } from './content-window/content-window.component';
import { BotaoComponent } from './botao/botao.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContentWindowComponent,
    BotaoComponent
  ],
  exports:[
    ContentWindowComponent,
    BotaoComponent
  ]
})
export class SharedModule { }
