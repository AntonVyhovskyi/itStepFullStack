import {Dispatch, legacy_createStore} from 'redux';
import { counterReducer, InitialState } from './reducers/counter';
import { CounterActions } from './actions/counter';

export const store = legacy_createStore<InitialState, CounterActions, Dispatch<CounterActions>, ()=>InitialState>(counterReducer);