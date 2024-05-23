import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [SharedModule, CommonModule, FormsModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {

  newTaskName: string = '';

  items = [
    { name: 'Tarefa', completed: false },
  ];

  taskDone(item: any){
    item.completed = !item.completed;
  }

  addTask() {
    if(this.newTaskName.length > 0) {

      this.items.push({ name: this.newTaskName, completed: false });

      this.newTaskName = '';

    }
  }

}
