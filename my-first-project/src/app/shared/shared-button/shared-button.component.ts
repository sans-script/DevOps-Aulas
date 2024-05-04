import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  standalone: true,
  imports: [],
  templateUrl: './shared-button.component.html',
  styleUrl: './shared-button.component.scss'
})
export class SharedButtonComponent {
  @Input() title:string = ''
  
}
