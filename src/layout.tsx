import * as React from "react";
import { NavLink, Switch, Route, Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from "./header/header";
import Carousel from "./carousel/carousel";
import Info from './info/info';
import './base.scss';

// because we dont have type definition for scroll top
const ScrollToTop = require("react-scroll-up").default;
//import ScrollToTop  from "react-scroll-up";
import Footer from './footer/footer';
import { MainRouter } from './mainRouter';

interface LayoutState {

}

interface LayoutProps {

}

export default class Layout extends React.Component<LayoutProps, LayoutProps> {

    constructor(props: LayoutProps) {
        super(props);
    }

    
    render() {

        return (
            <div className="page">
                <Header />
                <MainRouter />
                <ScrollToTop showUnder={160} style={{bottom: 120, right: 10}}>
                    <FontAwesomeIcon icon="chevron-circle-up" className="up" size="2x" /> 
                </ScrollToTop>
                <Footer />
            </div>
        );
    }

}