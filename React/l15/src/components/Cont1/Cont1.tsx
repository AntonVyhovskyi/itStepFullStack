import React from "react";
import styles from "./Cont1.module.css";
import { Data } from "../Cont/Cont"

interface Cont1Props {

}

interface Cont1State {

}

class Cont1 extends React.Component<Cont1Props, Cont1State> {

    render() {
        return (
            <div>
                <Data.Consumer>
                    {(data) => (<div>
<h1>Count 1</h1>
<button onClick={data.plus}>+</button>
<div>data.count</div>
<button onClick={data.minus}>-</button>
                    </div>)}
                </Data.Consumer>
            </div>
        );
    }
}

export default Cont1;
