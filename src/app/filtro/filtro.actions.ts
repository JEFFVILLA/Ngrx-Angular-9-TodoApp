import { createAction, props } from '@ngrx/store';


export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const setFiltro = createAction('[TODO] Set Filtro',
  props<{ filtro: filtrosValidos }>());
