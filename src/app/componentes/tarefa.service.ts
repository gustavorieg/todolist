import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from './tarefa/tarefa.component';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private readonly API = "http://localhost:3000/terefas"

  constructor(private http: HttpClient) { }

  listar(): Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>(this.API)
  }
}
