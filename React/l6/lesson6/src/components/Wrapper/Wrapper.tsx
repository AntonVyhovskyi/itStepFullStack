import { Component } from "react"
import cls from './Wrapper.module.css'
import Navbar from "../Navbar/Navbar"
import Content1 from "../Content1/Content1"

interface WrapperState {
    showNavbar: boolean,
    showContent1: boolean,
    navbarDidMount: number,
    navbarDidUnount: number,
    content1DidMount: number,
    content1DidUnount: number
}

class Wrapper extends Component<{}, WrapperState> {

    state = {
        showNavbar: false,
        showContent1: false,
        navbarDidMount: 0,
        navbarDidUnount: 0,
        content1DidMount: 0,
        content1DidUnount: 0
    }

    changeShowNavbar = () => {
        this.setState({ showNavbar: !this.state.showNavbar })
    }
    changeShowContent1 = () => {
        this.setState({ showContent1: !this.state.showContent1 })
    }
    changeNavbarDidMount = () => {
        this.setState({ navbarDidMount: ++this.state.navbarDidMount })
    }
    changeNavbarDidUnount = () => {
        this.setState({ navbarDidMount: ++this.state.navbarDidUnount })
    }
    changeContent1DidMount = () => {
        this.setState({ content1DidMount: ++this.state.content1DidMount })
    }
    changeContent1DidUnount = () => {
        this.setState({ content1DidUnount: ++this.state.content1DidUnount })
    }


    render() {
        const { showNavbar, showContent1, navbarDidMount, navbarDidUnount, content1DidMount, content1DidUnount } = this.state
        return (
            <div className={cls.wrapper}>
                <div className={cls.buttons}>
                    <button onClick={this.changeShowNavbar} style={{ backgroundColor: showNavbar ? '#BCD8C1' : 'white' }}>
                        {
                            showNavbar ? 'Hide Navbar' : 'Show Navbar'
                        }
                    </button>
                    <button onClick={this.changeShowContent1} style={{ backgroundColor: showContent1 ? '#BCD8C1' : 'white' }}>
                        {
                            showContent1 ? 'Hide Content 1' : 'Show Content 1'
                        }
                    </button>
                </div>
                <div>
                    <div>
                        Navbar did mound {navbarDidMount} time
                    </div>
                    <div>
                        Navbar did Unmound {navbarDidUnount} time
                    </div>
                    <div>
                        Content1 did mound {content1DidMount} time
                    </div>
                    <div>
                        Content1 did Unmound {content1DidUnount} time
                    </div>
                </div>

                <div className={cls.components}>
                    {
                        showNavbar
                        &&
                        <Navbar menu={['Home', 'Page1', 'Page2']}
                            changeNavbarDidMount={this.changeNavbarDidMount}
                            changeNavbarDidUnount={this.changeNavbarDidUnount} />
                    }
                    {
                        showContent1
                        &&
                        <Content1
                            changeContent1DidMount={this.changeContent1DidMount}
                            changeContent1DidUnount={this.changeContent1DidUnount}
                        />
                    }
                </div>
            </div>
        );
    }
}

export default Wrapper;