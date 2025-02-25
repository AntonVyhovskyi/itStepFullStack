import { Component } from "react";
import styles from "./Content1.module.css";


interface Content1Props {
    content1Info: {
        mount: number,
        unMount: number
    },
    addSomethingInContent1Info: (key: 'mount' | 'unMount') => void
}


interface Content1State {

}

class Content1 extends Component<Content1Props, Content1State> {
    state = { constructorCount: 0 }
    constructor(props: Content1Props) {
        super(props);
        this.state = { constructorCount: this.state.constructorCount + 1 };
    }

    shouldComponentUpdate(nextProps: Readonly<Content1Props>, nextState: Readonly<Content1State>): boolean {
        console.log('Content1. ShouldCU war benutzt');

        return true
    }
    componentDidUpdate(prevProps: Readonly<Content1Props>, prevState: Readonly<Content1State>, snapshot?: any): void {
        console.log("Content1 war update ");

    }

    componentDidMount(): void {
        this.props.addSomethingInContent1Info('mount')
    }
    componentWillUnmount(): void {
        this.props.addSomethingInContent1Info('unMount')
    }
    render() {
        return (
            <div>
                <h2>Content 1</h2>
                <div>Constructor war benutzt {this.state.constructorCount} mal</div>
                <div>Component war mount {this.props.content1Info.mount} mal </div>
                <div>Component war unmount {this.props.content1Info.unMount} mal </div>
            </div>
        );
    }
}

export default Content1;