import React, { Component, useEffect, useState } from "react";
import styles from "./Footer.module.css";

interface FooterProps {
    setColor:(color: 'white' | 'blue' | 'green') => void,

    color:'white' | 'blue' | 'green'
}

const Footer: FunctionComponent = (props: FooterProps) => {
    const [color, setColor] = useState<'white' | 'blue' | 'green'>(props.color)
    useEffect(()=>{
        props.setColor(color)
    }, [color])
    return (
        <div>
            <h2>Footer</h2>
            <button onClick={()=>{setColor('white')}}>white</button>
            <button onClick={()=>{setColor('blue')}}>blue</button>
            <button onClick={()=>{setColor('green')}}>green</button>
        </div>
    );
}

export default Footer;