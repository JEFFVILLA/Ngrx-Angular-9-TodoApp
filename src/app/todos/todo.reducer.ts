import { createReducer, on } from '@ngrx/store';
import { crear, toggle, editar, borrar, toggleAll, clean } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Salvar al Mundo'),
  new Todo('Cocinar'),
  new Todo('Levantarse')
];

const _todoReducer = createReducer(initialState,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(clean, (state) => state.filter(todo => !todo.completado)),
  on(toggle, (state, { id }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        };
      } else {
        return todo;
      }
    });
  }),
  on(editar, (state, { id, texto }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto
        };
      } else {
        return todo;
      }
    });
  }),
  on(borrar, (state, { id }) => {
    return state.filter(todo => todo.id !== id)
  }),
  on(toggleAll, (state, { completado }) => state.map(todo => {
    return {
      ...todo,
      completado
    }
  }
  )
  ),
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
