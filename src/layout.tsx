import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from "./header/header";
import Carousel from "./carousel/carousel";
import './base.scss';

// because we dont have type definition for scroll top
const ScrollToTop = require("react-scroll-up").default;
//import ScrollToTop  from "react-scroll-up";
import Footer from './footer/footer';
import { MainRouter } from './mainRouter';
import { HeaderContext } from './headerContext';

interface LayoutState {
    isMobileMenuOpen: boolean;

}

interface LayoutProps {

}

export default class Layout extends React.Component<LayoutProps, LayoutState> {

    constructor(props: LayoutProps) {
        super(props);
        this.state = {isMobileMenuOpen: false};
    }

    handleMobileMenuClick = () => {
        this.setState({
            isMobileMenuOpen: !this.state.isMobileMenuOpen
        }, () => {
            if(this.state.isMobileMenuOpen) {
                document.body.classList.add('mobile-menu-open');
            } else {
                document.body.classList.remove('mobile-menu-open');
            }
        });
    }


    
    render() {

        return (
            <div className="page">
            <HeaderContext.Provider value={{isOpen: this.state.isMobileMenuOpen, toggleMobileMenu: this.handleMobileMenuClick}}>
                <Header />
                <MainRouter />
                <ScrollToTop showUnder={160} style={{bottom: 120, right: 10}}>
                    <FontAwesomeIcon icon="chevron-circle-up" className="up" size="2x" /> 
                </ScrollToTop>
                <Footer />
                </HeaderContext.Provider>
            </div>
        );
    }

}