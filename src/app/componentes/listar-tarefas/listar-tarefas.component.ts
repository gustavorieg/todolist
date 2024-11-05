import { Component } from '@angular/core';
import { Tarefa } from '../tarefa/tarefa.component';

@Component({
  selector: 'app-listar-tarefas',
  standalone: true,
  imports: [],
  templateUrl: './listar-tarefas.component.html',
  styleUrl: './listar-tarefas.component.css'
})
export class ListarTarefasComponent {
  listaTarefas: Tarefa[] = []
}
