import { Component } from "react"
import cls from './Navbar.module.css'

interface NavbarState {
    constructorDidUsed: number;
    whichPage: string;
}

interface NavbarProps {
    menu: string[];
    changeNavbarDidMount: () => void;
    changeNavbarDidUnount: () => void;
}

class Navbar extends Component<NavbarProps, NavbarState> {
    
    
    constructor(props: NavbarProps) {
        super(props)
        this.state = {
            constructorDidUsed: 1,
            whichPage: 'home'
        }
    }
    componentDidMount(): void {
        this.props.changeNavbarDidMount()
    }

    componentWillUnmount(): void {
        this.props.changeNavbarDidUnount()
    }

    shouldComponentUpdate(nextProps: Readonly<NavbarProps>, nextState: Readonly<NavbarState>): boolean {
        console.log('NAVBAR: work shouldComponentUpdate one time');
        
        return nextProps !== this.props || nextState !== this.state
    }

    changePage = (el: string) => {
        this.setState({whichPage: el})
    }
    componentDidUpdate(prevProps: Readonly<NavbarProps>, prevState: Readonly<NavbarState>, snapshot?: any): void {
        console.log('NAVBAR component did updated');
        
    }

    

    render() {
        const {menu} = this.props
        const {constructorDidUsed, whichPage} = this.state
console.log('NAVBAR render one time');

        return (
            <div className={cls.navbar}>
                <div>constructor did used {constructorDidUsed} times</div>
                <div>now page {whichPage}</div>
                {menu.map((el, i)=>{
                    return (
                        <div 
                        key={i} 
                        onClick={() => this.changePage(el)} 
                        className={cls.link}
                        >
                            {el}
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Navbar;
