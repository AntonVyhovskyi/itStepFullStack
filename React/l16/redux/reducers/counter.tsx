import { CounterActions, DIVIDE_BY_TWO, MINUS_ONE, MINUS_TEN, PLUS_ONE, PLUS_TEN, SET_HUNDRED, SET_NULL } from "../actions/counter";

export interface InitialState {
    count: number;
}

const initialState: InitialState = {
    count: 0
};

export const counterReducer = (state: InitialState = initialState, action: CounterActions) => {
    switch (action.type) {
        case PLUS_ONE:
            return {...state, count: state.count + 1};
        case MINUS_ONE:
            return {...state, count: state.count - 1};
        case PLUS_TEN:
            return {...state, count: state.count + 10};
        case MINUS_TEN:
            return {...state, count: state.count - 10};
        case DIVIDE_BY_TWO:
            return {...state, count: Math.floor(state.count / 2)};
        case SET_NULL:
            return {...state, count: 0};
        case SET_HUNDRED:
            return {...state, count: 100};
        default: return initialState;

}
}