import { Injectable } from '@angular/core';

import { Tarefa } from './tarefa.module';

@Injectable()
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[] {
  	const tarefas = localStorage['tarefas'];
  	return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: Tarefa): void {
  	const tarefas = this.listarTodos();
  	tarefa.id = new Date().getTime();
  	tarefas.push(tarefa);
  	localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number): Tarefa | null {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id) || null;
  }
  

  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => { 
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    console.log(tarefa)
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => { 
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

}
