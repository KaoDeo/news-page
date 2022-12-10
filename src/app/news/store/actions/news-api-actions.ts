import { createAction, props } from '@ngrx/store';

export const findNewsSuccess = createAction(
  '[News Api] Find News Success',
  props<{
    payload: any;
  }>()
);
