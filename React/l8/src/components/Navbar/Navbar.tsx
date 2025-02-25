import React, { Component } from "react";
import styles from "./Navbar.module.css";


interface NavbarProps {
    navbarInfo: {
        mount: number,
        unMount: number
    },
    addSomethingInNavbarInfo: (key: 'mount' | 'unMount') => void
}
 
interface NavbarState {
    constructorCount: number
}
 
class Navbar extends Component<NavbarProps, NavbarState> {
    state = { constructorCount: 0}
    constructor(props: NavbarProps) {
        super(props);
        this.state = { constructorCount: this.state.constructorCount + 1 };
    }
    shouldComponentUpdate(nextProps: Readonly<NavbarProps>, nextState: Readonly<NavbarState>): boolean {
        console.log('NAVBAR. ShouldCU war benutzt');
        
        return true
    }
    componentDidUpdate(prevProps: Readonly<NavbarProps>, prevState: Readonly<NavbarState>, snapshot?: any): void {
        console.log("NAVBAR WAR UPDATE");
        
    }
    componentDidMount(): void {
        this.props.addSomethingInNavbarInfo('mount')
    }
    componentWillUnmount(): void {
        this.props.addSomethingInNavbarInfo('unMount')
    }
    render() { 
        return ( 
            <div className={styles.container}>
                <h2>NAVBAR</h2>
                <div>Constructor war benutzt {this.state.constructorCount} mal</div>
                <div>Component war mount {this.props.navbarInfo.mount} mal </div>
                <div>Component war unmount {this.props.navbarInfo.unMount} mal </div>
            </div>
         );
    }
}
 
export default Navbar;