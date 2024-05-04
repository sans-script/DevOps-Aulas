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


// ERROR Error [NullInjectorError]: R3InjectorError(Standalone[_LoginComponent])[function(options) { -> function(options) { -> function(options) {]:
//   NullInjectorError: No provider for function(options) {!
//   at NullInjector.get (/home/thierry/meu-projeto/node_modules/@angular/core/fesm2022/core.mjs:1654:27)
//   at R3Injector.get (/home/thierry/meu-projeto/node_modules/@angular/core/fesm2022/core.mjs:3093:33)
//   at R3Injector.get (/home/thierry/meu-projeto/node_modules/@angular/core/fesm2022/core.mjs:3093:33)
//   at R3Injector.get (/home/thierry/meu-projeto/node_modules/@angular/core/fesm2022/core.mjs:3093:33)
//   at ChainedInjector.get (/home/thierry/meu-projeto/node_modules/@angular/core/fesm2022/core.mjs:15723:36)
//   at lookupTokenUsingModuleInjector (/home/thierry/meu-projeto/node_modules/@angular/core/fesm2022/core.mjs:5730:39)
//   at getOrCreateInjectable (/home/thierry/meu-projeto/node_modules/@angular/core/fesm2022/core.mjs:5778:12)
//   at Module.ɵɵdirectiveInject (/home/thierry/meu-projeto/node_modules/@angular/core/fesm2022/core.mjs:11050:19)
//   at NodeInjectorFactory.LoginComponent_Factory (/home/thierry/meu-projeto/src/app/pages/login/login.component.ts:15:28)
//   at getNodeInjectable (/home/thierry/meu-projeto/node_modules/@angular/core/fesm2022/core.mjs:5984:44) {
//   ngTempTokenPath: null,
//   ngTokenPath: [
//   'function(options) {',
//   'function(options) {',
//   'function(options) {'
//   ]
//   }