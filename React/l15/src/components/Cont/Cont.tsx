import React, { createContext } from "react";
import styles from "./Cont.module.css";
import Cont1 from "../Cont1/Cont1";
interface Props {

}

interface State {
    count: number
}

export const Data = createContext({
    count: 0,
    plus: () => { },
    minus: () => { }
})

class Cont extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    plus = () => { this.setState({ count: this.state.count + 1 }) }
    minus = () => { this.setState({ count: this.state.count - 1 }) }
    render() {
        return (
            <Data.Provider value={{ count: this.state.count, plus: this.plus, minus: this.minus }}>
                <Cont1 />

            </Data.Provider >);
    }
}

export default Cont;
