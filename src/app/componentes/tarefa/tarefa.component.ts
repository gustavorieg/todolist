import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

export interface Tarefa{
  id: number
  descricao: string
  situacao: string
}

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent {

  tarefa = input.required<Tarefa>();

  completarAtividade(){
    alert('completar atividade')
  }

  editarAtividade(){
    alert('editar atividade')
  }

  excluirAtividade(){
    alert('excluir atividade')
  }
}
