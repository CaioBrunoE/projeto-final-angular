import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTarefaComponent } from './list-tarefa.component';

describe('ListTarefaComponent', () => {
  let component: ListTarefaComponent;
  let fixture: ComponentFixture<ListTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTarefaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
