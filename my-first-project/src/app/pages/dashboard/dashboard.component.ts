import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule, CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {
  // constructor() {
  //   // Adicionando mais itens ao array
  //   for (let i = 1; i <= 4; i++) {
  //     this.items.push({ name: `Tarefa ${i}`, completed: false });
  //   }
  // }

  newTaskName: string = ''; 
  // Array de itens de tarefa
  items = [
    { name: 'Task Lorem ipsum dolor', completed: false },
  ];

  // Método para adicionar uma nova tarefa à lista
  addTask() {
    if (this.newTaskName.length > 0) { // Verifica se o campo de entrada não está vazio
      // Adiciona a nova tarefa ao array items
      this.items.push({ name: this.newTaskName, completed: false });
      // Limpa o campo de entrada após adicionar a tarefa
      this.newTaskName = '';
    }
  }
  // Função para alternar o status de conclusão de uma tarefa
  taskDone(item: any){
    // Alterna o valor de 'completed' do item recebido como parâmetro
    item.completed = !item.completed;
  }
}
