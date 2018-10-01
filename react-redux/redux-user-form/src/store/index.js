import { createStore } from 'redux';
import { userFormApp } from './reducers';

const initialState = {
  name: 'lol kek',
}

export const store = createStore(
  userFormApp,
  initialState
);


