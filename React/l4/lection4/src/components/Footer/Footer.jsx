import { Component } from 'react';
import './Footer.css'





class Footer extends Component {
  constructor(props) {
    super()
    this.info = props.footerDate.info
  }
  render() {
    return (
      <div className='footer'>{this.info}</div>
    );
  }
}





export default Footer;