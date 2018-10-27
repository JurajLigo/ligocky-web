import * as React from "react";
import './hero.scss';
import ArrowDown from '../arrowDown';

interface HeroState {
    isLandscape: boolean;
}

interface HeroProps {
    title: string;
    imagePath: string;
    mobileImagePath: string;
    mobilePortraitImagePath?: string;
}

export default class Hero extends React.Component<HeroProps, HeroState> {

    constructor(props: HeroProps) {
        super(props);
        this.state = {isLandscape: window.innerHeight < window.innerWidth};
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    private handleResize =() => {
        this.setState({isLandscape: window.innerHeight < window.innerWidth});
    }

    render() {

        let backgroundImgStyle: any = {
            'backgroundImage': `url(${this.props.imagePath})`
        };

        if(window.screen.availWidth < 768) {
            backgroundImgStyle = {
                'backgroundImage': `url(${this.state.isLandscape ? this.props.mobileImagePath : this.props.mobilePortraitImagePath})`
              };
        } 

        return (
            <div className="hero" style={backgroundImgStyle}>
                <div className="title title--small">{this.props.title}</div>
                <ArrowDown />
            </div>
        );
    }

}