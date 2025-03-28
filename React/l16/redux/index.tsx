import {Dispatch, legacy_createStore} from 'redux';
import { counterReducer, InitialState } from './reducers/counter';
import { CounterActions } from './actions/counter';
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = legacy_createStore<InitialState, CounterActions, Dispatch<CounterActions>, ()=>InitialState>(counterReducer, composeWithDevTools());