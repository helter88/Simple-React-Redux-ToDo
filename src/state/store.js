import { createStore } from 'redux';
import { reducerList } from './reducer-list';

export const store = createStore(reducerList);
