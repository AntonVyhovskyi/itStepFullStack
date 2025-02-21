import { Component } from "react"
import cls from './Content1.module.css'

interface Content1State {
    count: number;
    constructorDidUsed: number;
    
}
interface Content1Props {
    changeContent1DidMount: () => void;
    changeContent1DidUnount: () => void;
}
class Content1 extends Component<Content1Props, Content1State> {
    state = {
        count: 0,
        constructorDidUsed: 0
    }

    constructor(props: Content1Props) {
        super(props)
        this.state = {...this.state, constructorDidUsed: ++this.state.constructorDidUsed}
        
    }

    plus = () => {
        this.setState({count: ++this.state.count})
    }
    minus = () => {
        this.setState({count: --this.state.count})
    }

    componentDidMount(): void {
        this.props.changeContent1DidMount()
    }
    componentWillUnmount(): void {
        this.props.changeContent1DidUnount()
    }
    shouldComponentUpdate(nextProps: Readonly<Content1Props>, nextState: Readonly<Content1State>): boolean {
        console.log('CONTENT1 shouldComponentUpdate did used');
        
        return nextProps !== this.props || nextState !== this.state
    }
    componentDidUpdate(): void {
        console.log('CONTENT1 did update');
        
    }

    render() {
       const {constructorDidUsed, count} = this.state
       console.log('CONTENT1 did render');
       
        return (
            <div className={cls.content}>
                <div>
                    <div>
                    constuctor did used {constructorDidUsed} time
                    </div>
                    
                </div>
              <div>
              <button onClick={this.minus}>-</button>
              <div>{count}</div>
              <button onClick={this.plus}>+</button>
              </div>
            </div>
        );
    }
}

export default Content1;