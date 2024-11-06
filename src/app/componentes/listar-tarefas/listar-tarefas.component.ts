import { Component } from '@angular/core';
import { Tarefa, TarefaComponent } from '../tarefa/tarefa.component';

@Component({
  selector: 'app-listar-tarefas',
  standalone: true,
  imports: [
    TarefaComponent
  ],
  templateUrl: './listar-tarefas.component.html',
  styleUrl: './listar-tarefas.component.css'
})
export class ListarTarefasComponent {
  listaTarefas: Tarefa[] =
  [
    {
      id: 1,
      descricao: 'Desenvolver site',
      situacao: 'ativo'
    },
    {
      id: 2,
      descricao: 'Desenvolver sistema',
      situacao: 'finalizado'
    }
  ]
}
