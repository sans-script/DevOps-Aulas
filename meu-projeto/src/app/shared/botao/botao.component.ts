import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao',
  standalone: true,
  imports: [],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.scss'
})
export class BotaoComponent {
  @Input() title:string = ''
}
