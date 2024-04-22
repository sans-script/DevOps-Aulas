import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentWindowComponent } from './content-window/content-window.component'; // Importa o componente ContentWindowComponent
import { SharedButtonComponent } from './shared-button/shared-button.component'; // Importa o componente SharedButtonComponent

@NgModule({
  declarations: [], // Declaração dos componentes que pertencem a este módulo (não é necessário especificar aqui, pois os componentes são declarados nos próprios módulos)
  imports: [
    CommonModule, // Importa o módulo CommonModule, que fornece diretivas comuns como NgIf, NgFor, etc.
    ContentWindowComponent, // Importa o componente ContentWindowComponent 
    SharedButtonComponent // Importa o componente SharedButtonComponent
  ],
  exports:[
    ContentWindowComponent, // Exporta o componente ContentWindowComponent para ser utilizado em outros módulos
    SharedButtonComponent // Exporta o componente SharedButtonComponent para ser utilizado em outros módulos
  ]
})
export class SharedModule { } // Declaração do módulo SharedModule
