import React from "react";

import styles from "./Portal.module.css";
import { createPortal } from "react-dom";
interface Props {

}

interface State {

}

class Portal extends React.Component<Props, State> {

    render() {
        return (
            <div>
                Portal
                {createPortal(
                    <h1>Im First Portal</h1>, document.getElementsByTagName('body')[0])}  
            </div>
        );
    }
}

export default Portal;
