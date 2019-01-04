import * as React from 'react';
import {throttle} from 'underscore';
import {NavLink} from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import {HeaderContext} from '../headerContext';
import './header.scss';
import '../../dist/style.css';

const classNames = require('classnames');
const Flag = require("react-flags");

interface HeaderState {
    scrollY: number;
    headerState: HeaderScroll;
}

enum HeaderScroll {
    INIT,
    SHOW,
    HIDE
}

export default class Header extends React.Component<undefined, HeaderState> {

    constructor(props: undefined) {
        super(props);
        this.state = {headerState: HeaderScroll.INIT, scrollY: 0};
    }

    componentDidMount() {
        const throttled = throttle(this.scrollHandle, 100);
        window.addEventListener("scroll", throttled);
    }

    scrollHandle = () => {
        // ked chcem poriesit prechod z init do hide a naraz to zmizne tak potom cez opacity

        if (window.scrollY <= 0) {
            this.setState({scrollY: window.scrollY, headerState: HeaderScroll.INIT})
            return;
        }

        if (window.scrollY > this.state.scrollY && window.scrollY > 77) {
            this.setState({scrollY: window.scrollY, headerState: HeaderScroll.HIDE});
        }

        if (window.scrollY < this.state.scrollY) {
            this.setState({scrollY: window.scrollY, headerState: HeaderScroll.SHOW});
        }
    }

    render() {
        const headerCls: any = classNames({
            'header': true,
            'header--show': this.state.headerState === HeaderScroll.SHOW,
            'header--hide': this.state.headerState === HeaderScroll.HIDE
        });

        const headerLinkCls: any = classNames({
            'header__link': true,
            'header__link--blue': this.state.headerState === HeaderScroll.SHOW,
        });

        const flagStyle = {
            verticalAlign: 'middle',
            marginTop: -3,
            marginRight: 4,
            borderRadius: 15
        };

        return (
            <header className={headerCls}>
                <div className="header__logo">J.L. Web</div>
                <nav className="header__nav-desktop">
                    <ul>
                        <li><NavLink className={headerLinkCls} exact={true} to='' activeClassName="active-link"><Flag
                            name="GB" format="png" basePath="assets" pngSize={32} shiny={false}
                            className="header__flag"/>Home</NavLink></li>
                        <li><NavLink className={headerLinkCls} to='/travelstories' activeClassName="active-link"><Flag
                            name="SK" format="png" basePath="assets" pngSize={32} shiny={false}
                            className="header__flag"/>Cestovateľské príhody</NavLink></li>
                        <li><NavLink className={headerLinkCls} to='/cv' activeClassName="active-link"><Flag name="GB"
                                                                                                            format="png"
                                                                                                            basePath="assets"
                                                                                                            pngSize={32}
                                                                                                            shiny={false}
                                                                                                            className="header__flag"/>CV</NavLink>
                        </li>
                    </ul>
                </nav>

                <HeaderContext.Consumer>
                    {headerContext =>
                        <>
                            <nav className="header__nav-mobile">
                                <HamburgerMenu
                                    isOpen={headerContext.isOpen}
                                    menuClicked={headerContext.toggleMobileMenu}
                                    width={36}
                                    height={20}
                                    strokeWidth={5}
                                    rotate={0}
                                    color='white'
                                    borderRadius={10}
                                    animationDuration={0.5}
                                />
                            </nav>
                            <div className="header__mobile-menu" style={{
                                right: !headerContext.isOpen ? `-${window.innerWidth}px` : 0,
                            }}>
                                <ul>
                                    <li className="record"><NavLink exact={true} to=''
                                                                    onClick={headerContext.toggleMobileMenu}><Flag
                                        name="GB" format="png" basePath="assets" pngSize={32} shiny={false}
                                        className="header__flag"/>HOME</NavLink></li>
                                    <li className="record"><NavLink to='/travelstories'
                                                                    onClick={headerContext.toggleMobileMenu}><Flag
                                        name="SK" format="png" basePath="assets" pngSize={32} shiny={false}
                                        className="header__flag long-image"/><span className="long-text">CESTOVATEĽSKÉ PRÍHODY</span></NavLink></li>
                                    <li className="record record--last"><NavLink to='/cv'
                                                                                 onClick={headerContext.toggleMobileMenu}><Flag
                                        name="GB" format="png" basePath="assets" pngSize={32} shiny={false}
                                        className="header__flag"/>CV</NavLink></li>
                                </ul>
                            </div>
                        </>}
                </HeaderContext.Consumer>
            </header>
        );
    }

}