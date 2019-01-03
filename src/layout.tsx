import * as React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Header from './header/header';
import Footer from './footer/footer';
import {MainRouter} from './mainRouter';
import {HeaderContext} from './headerContext';
import './base.scss';

const ScrollToTop = require("react-scroll-up").default;

interface LayoutState {
    isMobileMenuOpen: boolean;
}

export default class Layout extends React.Component<undefined, LayoutState> {

    constructor(props: undefined) {
        super(props);
        this.state = {isMobileMenuOpen: false};
    }

    handleMobileMenuClick = () => {
        this.setState({
            isMobileMenuOpen: !this.state.isMobileMenuOpen
        }, () => {
            if (this.state.isMobileMenuOpen) {
                document.body.classList.add('mobile-menu-open');
            } else {
                document.body.classList.remove('mobile-menu-open');
            }
        });
    }

    render() {

        return (
            <div className="page">
                <HeaderContext.Provider
                    value={{isOpen: this.state.isMobileMenuOpen, toggleMobileMenu: this.handleMobileMenuClick}}>
                    <Header/>
                    <MainRouter/>
                    <ScrollToTop showUnder={160} style={{bottom: 120, right: 10}}>
                        <FontAwesomeIcon icon="chevron-circle-up" className="up" size="2x"/>
                    </ScrollToTop>
                    <Footer/>
                </HeaderContext.Provider>
            </div>
        );
    }

}