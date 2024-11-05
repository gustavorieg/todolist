import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { CriarTarefaComponent } from './componentes/criar-tarefa/criar-tarefa.component';
import { OpcoesComponent } from './componentes/opcoes/opcoes.component';
import { TarefaComponent } from './componentes/tarefa/tarefa.component';
import { ListarTarefasComponent } from "./componentes/listar-tarefas/listar-tarefas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CabecalhoComponent,
    CriarTarefaComponent,
    OpcoesComponent,
    TarefaComponent,
    ListarTarefasComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todolist';
}
