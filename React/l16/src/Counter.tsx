import { connect } from "react-redux";
import { InitialState } from "../redux/reducers/counter";
import { CounterActions, DIVIDE_BY_TWO, MINUS_ONE, MINUS_TEN, PLUS_ONE, PLUS_TEN, SET_HUNDRED, SET_NULL } from "../redux/actions/counter";
import { Dispatch } from "redux";

function Counter(props: any) {

console.log(props);

    return (
        <>
            <div>{props.count}</div>
            <button onClick={props.plus}>plus</button>
            <button onClick={props.minus}>minus</button>
            <button onClick={props.plusTen}>plusTen</button>
            <button onClick={props.minusTen}>minusTen</button>
            <button onClick={props.divideByTwo}>divideByTwo</button>
            <button onClick={props.setNull}>setNull</button>
            <button onClick={props.setHundred}>setHundred</button>
        </>
    );
}
const mapStateToProps = (state: InitialState) => {
    return {
        count: state.count
    }
}
const mapDispatchToProps = (dispatch: Dispatch<CounterActions>) => {
    return {
        plus: () => dispatch({ type: PLUS_ONE }),
        minus: () => dispatch({ type: MINUS_ONE }),
        plusTen: () => dispatch({ type: PLUS_TEN }),
        minusTen: () => dispatch({ type: MINUS_TEN }),
        divideByTwo: () => dispatch({ type: DIVIDE_BY_TWO }),
        setNull: () => dispatch({ type: SET_NULL }),
        setHundred: () => dispatch({ type: SET_HUNDRED })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);