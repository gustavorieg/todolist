import { Component } from '@angular/core';
import { Tarefa, TarefaComponent } from '../tarefa/tarefa.component';
import { TarefaService } from '../tarefa.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-listar-tarefas',
  standalone: true,
  imports: [
    TarefaComponent,
    HttpClientModule
  ],
  templateUrl: './listar-tarefas.component.html',
  styleUrl: './listar-tarefas.component.css',
  providers: [
    TarefaService
  ]
})
export class ListarTarefasComponent {
  listaTarefas: Tarefa[] = []

  constructor(private service: TarefaService){}

  ngOnInit(): void{
    this.service.listar().subscribe((listaTarefas) => {
      this.listaTarefas = listaTarefas
    })
  }
}
