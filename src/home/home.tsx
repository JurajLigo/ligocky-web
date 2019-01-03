import * as React from 'react';
import Carousel from '../carousel/carousel';
import {About} from '../info/about';
import {HeaderContext} from '../headerContext';

export default class Home extends React.Component<undefined> {

    constructor(props: undefined) {
        super(props);
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <HeaderContext.Consumer>
                    {headerContext => <Carousel isMobileMenuOpen={headerContext.isOpen}/>}
                </HeaderContext.Consumer>
                <About/>
            </>
        );
    }

}