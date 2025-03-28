export const PLUS_ONE = 'PLUS_ONE' as const;
export const MINUS_ONE = 'MINUS_ONE' as const;
export const PLUS_TEN = 'PLUS_TEN' as const;
export const MINUS_TEN = 'MINUS_TEN' as const;;
export const DIVIDE_BY_TWO = 'DIVIDE_BY_TWO' as const;;
export const SET_NULL = 'SET_NULL' as const;
export const SET_HUNDRED = 'SET_HUNDRED' as const;;


export const plusOne = () => ({type: PLUS_ONE});
export const minusOne = () => ({type: MINUS_ONE});
export const plusTen = () => ({type: PLUS_TEN});
export const minusTen = () => ({type: MINUS_TEN});
export const divideByTwo = () => ({type: DIVIDE_BY_TWO});
export const setNull = () => ({type: SET_NULL});
export const setHundred = () => ({type: SET_HUNDRED});

export type CounterActions =
    | ReturnType<typeof plusOne>
    | ReturnType<typeof minusOne>
    | ReturnType<typeof plusTen>
    | ReturnType<typeof minusTen>
    | ReturnType<typeof divideByTwo>
    | ReturnType<typeof setNull>
    | ReturnType<typeof setHundred>;