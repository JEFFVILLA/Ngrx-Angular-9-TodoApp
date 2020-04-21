import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-paget',
  templateUrl: './todo-paget.component.html',
  styleUrls: ['./todo-paget.component.css']
})
export class TodoPagetComponent implements OnInit {

  completado: boolean = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  toggle_all() {
    this.completado = !this.completado;

    this.store.dispatch(toggleAll({ completado: this.completado }));
  }

}
