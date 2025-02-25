import React, { Component, useEffect, useState } from "react";
import styles from "./Content2.module.css";

interface Content2Props {
    content2Info: {
        mount: number,
        unMount: number
    },
    addSomethingInContent2Info: (key: 'mount' | 'unMount') => void
}


const Content2: FunctionComponent<Content2Props> = (props: Content2Props) => {
    const [count, setCount] = useState<number>(0)
    const [countWarAndarn, setCountWarAndarn] = useState<number>(0)
    useEffect(()=>{
        props.addSomethingInContent2Info('mount')
        return ()=>{
            props.addSomethingInContent2Info('unMount')
        }
    },[])
    useEffect(()=>{
        setCountWarAndarn((prev=>(prev+1)))
    },[count])
    return (
        <div className={styles.container}>
            <h2>Content 2</h2>
            <div>Component 2 war mount {props.content2Info.mount}</div>
            <div>Component 2 war unmount {props.content2Info.unMount}</div>
            <div>Count war {countWarAndarn} mal andern</div>
            <div className={styles.counter}>
                <button onClick={()=>{setCount((prev)=>(prev+1))}}>+</button>
                <div>{count}</div>
                <button onClick={()=>{setCount((prev)=>(prev-1))}}>-</button>
            </div>
        </div>
    );
}

export default Content2;