import * as React from "react";
import Carousel from '../carousel/carousel';
import About2 from '../info/about2';
import Box from '../box/box';
import { HeaderContext } from '../headerContext';


interface HomeState {

}

interface HomeProps {

}

export default class Home extends React.Component<HomeProps, HomeState> {

    constructor(props: HomeProps) {
        super(props);
        // TODO add to decorator
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <HeaderContext.Consumer>
                    {headerContext => <Carousel isMobileMenuOpen={headerContext.isOpen} />}
                </HeaderContext.Consumer>
                <About2 />
            </>
        );
    }

}