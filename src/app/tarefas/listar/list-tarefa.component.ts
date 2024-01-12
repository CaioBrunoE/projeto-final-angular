import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa } from '../shared';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './list-tarefa.component.html',
  styleUrls: ['./list-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
      if (tarefa.id !== undefined) {
        this.tarefaService.remover(tarefa.id);
        this.tarefas = this.listarTodos();
      }else{
        return
      }
    }
  }
  

  alterarStatus(tarefa: Tarefa): void {
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')) {
      if(tarefa.id !== undefined){
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }else{
      return
    }
    }
  }

}
