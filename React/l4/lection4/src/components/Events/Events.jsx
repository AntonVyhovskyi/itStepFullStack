
import { Component } from 'react'
import './Events.css'



class Events extends Component {
    
    // onClick, onMouseDown, onMouseUp, onMouseMove, onCut, onCopy, onMouseWheel
    onClick=(e)=>{
        console.log('onClick', e);
        
    }    
    onMouseDown=(e)=>{
        console.log('mouseDown', e);
        
    }
    onMouseUp=(e)=>{
        console.log('onMouseUp', e);
        
    }
    onMouseMove=(e)=>{
        console.log('onMouseMove', e);
        
    }
    onCut=(e)=>{
        console.log('onCut', e);
        
    }
    onCopy=(e)=>{
        console.log('onCopy', e);
        
    }
    onMouseWheel=(e)=>{
        console.log('onMouseWheel', e);
        
    }
    render() { 
        return ( 
            <div style={{width: '100px', height: '100px', backgroundColor: 'beige', margin: '30px'}}
            onClick={this.onClick}
            onMouseDown={this.onMouseDown}
            onMouseUp={this.onMouseUp}
            onMouseMove={this.onMouseMove}
            onCut={this.onCut}
            onCopy={this.onCopy}
            onWheel={this.onMouseWheel}
            >
            Events
        </div>
         );
    }
}
 









export default Events;