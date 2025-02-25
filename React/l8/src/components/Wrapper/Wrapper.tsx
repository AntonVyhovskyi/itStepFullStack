import React, { useState } from "react";
import styles from "./Wrapper.module.css";
import Navbar from "../Navbar/Navbar";
import Content1 from "../Content1/Content1";
import Conntent2 from "../Content2/Content2";
import Footer from "../Footer/Footer";


interface WrapperProps {

}

interface InfoIterface {
    mount: number,
    unMount: number
}

const Wrapper: FunctionComponent<WrapperProps> = () => {
    const [showNavbar, setShowNavbar] = useState<boolean>(false)
    const [showContent1, setShowContent1] = useState<boolean>(false)
    const [showContent2, setShowContent2] = useState<boolean>(false)
    const [showFooter, setShowFooter] = useState<boolean>(false)
    const [navbarInfo, setNavbarInfo] = useState<InfoIterface>({mount: 0, unMount: 0})
    const [content1Info, setContent1Info] = useState<InfoIterface>({mount: 0, unMount: 0})
    const [content2Info, setContent2Info] = useState<InfoIterface>({mount: 0, unMount: 0})
    const [background,setBackground] = useState<'white' | 'blue' | 'green'>('white')
    
    const addSomethingInNavbarInfo = (key: 'mount' | 'unMount') => {
        setNavbarInfo(prev=>({...prev, [key]: prev[key]+1}))
    }

    const addSomethingInContent1Info = (key: 'mount' | 'unMount') => {
        setContent1Info(prev=>({...prev, [key]: prev[key]+1}))
    }
    const addSomethingInContent2Info = (key: 'mount' | 'unMount') => {
        setContent2Info(prev=>({...prev, [key]: prev[key]+1}))
    }
    const setColor = (color: 'white' | 'blue' | 'green') => {
        setBackground(color)
    }
    return (
        <div className={`${background==='blue' ? styles.blue: ''} ${background==='green' ? styles.green: ''} ${styles.container}`}>
            <div>
                <button onClick={() => { setShowNavbar(!showNavbar) }}>{showNavbar ? 'Hide Navbar' : 'Show Navbar'}</button>
                <button onClick={() => { setShowContent1(!showContent1) }}>{showContent1 ? 'Hide Content1' : 'Show Content1'}</button>
                <button onClick={() => { setShowContent2(!showContent2) }}>{showContent2 ? 'Hide Content2' : 'Show Content2'}</button>
                <button onClick={() => { setShowFooter(!showFooter) }}>{showFooter ? 'Hide Footer' : 'Show Footer'}</button>
            </div>
            <div>
            {showNavbar && <Navbar navbarInfo={navbarInfo} addSomethingInNavbarInfo={addSomethingInNavbarInfo} />}
            {showContent1 && <Content1 content1Info={content1Info} addSomethingInContent1Info={addSomethingInContent1Info} />}
            {showContent2 && <Conntent2 content2Info={content2Info} addSomethingInContent2Info={addSomethingInContent2Info}  />}
            {showFooter && <Footer setColor={setColor} color={background} />}
            </div>
        </div>
    );
}

export default Wrapper;
