import './Footer.css'

function Footer(props) {
    return ( 
       <div className="footer">
        {props.footerDate.info}
       </div>
     );
}

export default Footer;