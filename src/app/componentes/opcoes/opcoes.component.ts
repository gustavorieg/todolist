import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-opcoes',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './opcoes.component.html',
  styleUrl: './opcoes.component.css'
})
export class OpcoesComponent {

  opcoes = {
    opcaoEscolhida: 'todos'
  }

  setarOpcao(s: string){
    this.opcoes = {
      opcaoEscolhida: s
    }
  }
}
