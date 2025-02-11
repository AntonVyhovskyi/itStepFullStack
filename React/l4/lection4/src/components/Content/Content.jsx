
import { Component } from 'react'
import './Content.css'
import Events from '../Events/Events'

class Counter extends Component {
    state = {
        count: 0
    }
    constructor() {
        super()
    }

    add = () => {
        this.setState(({count}) => ({count: ++count}))
    }

    minus = () => {
        this.setState(({count}) => ({count: --count}))
    }

    render() {
        return (
            <div>
                <div className='button' onClick={this.add}>plus</div>
                <div>{this.state.count}</div>
                <div className='button' onClick={this.minus}>minus</div>
            </div>
        );
    }
}


class Content extends Component {
    dateContent = {
        title: 'Heer is content',
        describe: 'Heer is describe'
    }
    constructor(props) {
        super(props);
    }
    
    render() { 
        return ( 
            <div className="content">
            <h1>{this.dateContent.title}</h1>
            <p>{this.dateContent.describe}</p>
            <Counter/>
            <Events />
        </div>
         );
    }
}
 









export default Content;