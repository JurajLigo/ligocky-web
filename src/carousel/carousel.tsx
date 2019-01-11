import * as React from 'react';
import * as ReactSwipe from 'react-swipe';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import CarouselItem from './carouselItem';
import ArrowDown from '../arrowDown/arrowDown';
import './carousel.scss';

const classNames = require('classnames');

const DESKTOP_SLIDE_COUNT: number = 9;
const MOBILE_SLIDE_COUNT: number = 5;

interface CarouselState {
    isLandscape: boolean;
}

interface CarouselProps {
    isMobileMenuOpen: boolean;
}

export default class Carousel extends React.Component<CarouselProps, CarouselState> {
    private reactSwipe: ReactSwipe;

    constructor(props: CarouselProps) {
        super(props);
        this.state = {isLandscape: window.innerHeight < window.innerWidth};
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    private handleResize = () => {
        this.setState({isLandscape: window.innerHeight < window.innerWidth});
    }

    next = () => {
        this.reactSwipe.next();
    }

    prev = () => {
        this.reactSwipe.prev();
    }

    render() {
        const arrowRightCls: any = classNames('carousel__arrow carousel__arrow--right', {
            'carousel__arrow--z1': this.props.isMobileMenuOpen,
            'carousel__arrow--z2': !this.props.isMobileMenuOpen
        });

        const arrowLeftCls: any = classNames('carousel__arrow carousel__arrow--left', {
            'carousel__arrow--z1': this.props.isMobileMenuOpen,
            'carousel__arrow--z2': !this.props.isMobileMenuOpen
        });


        return (
            <div className="carousel__wrapper">
                {this.state.isLandscape &&
                <ReactSwipe ref={reactSwipe => this.reactSwipe = reactSwipe} className="carousel"
                            swipeOptions={{continuous: true, auto: 3000}}>
                  <div><CarouselItem description={'Valletta (Malta), 2018'} totalCount={DESKTOP_SLIDE_COUNT} order={1}
                                     isLandscape={true}/></div>
                  <div><CarouselItem description={'Petra (Jorda), 2016'} totalCount={DESKTOP_SLIDE_COUNT} order={2} isLandscape={true}/>
                  </div>
                  <div><CarouselItem description={'Fuerteventura (Canary Island), 2016'} totalCount={DESKTOP_SLIDE_COUNT} order={3}
                                     isLandscape={true}/></div>
                  <div><CarouselItem description={'Angkor wat (Cambodia), 2016'} totalCount={DESKTOP_SLIDE_COUNT} order={4}
                                     isLandscape={true}/></div>
                  <div><CarouselItem description={'Arches National Park (USA), 2013'} totalCount={DESKTOP_SLIDE_COUNT} order={5}
                                     isLandscape={true}/></div>
                  <div><CarouselItem description={'Zion National Park (USA), 2013'} totalCount={DESKTOP_SLIDE_COUNT} order={6}
                                     isLandscape={true}/></div>
                  <div><CarouselItem description={'Death Valley (USA), 2013'} totalCount={DESKTOP_SLIDE_COUNT} order={7}
                                     isLandscape={true}/></div>
                  <div><CarouselItem description={'Yosemite (USA), 2013'} totalCount={DESKTOP_SLIDE_COUNT} order={8}
                                     isLandscape={true}/></div>
                  <div><CarouselItem description={'Legzira Beach (Morocco), 2012'} totalCount={DESKTOP_SLIDE_COUNT} order={9}
                                     isLandscape={true}/></div>
                </ReactSwipe>
                }
                {!this.state.isLandscape &&
                <ReactSwipe ref={reactSwipe => this.reactSwipe = reactSwipe} className="carousel"
                            swipeOptions={{continuous: true, auto: 3000}}>
                  <div><CarouselItem description={'Fuerteventura (Canary Island), 2016'} totalCount={MOBILE_SLIDE_COUNT} order={1}
                                     isLandscape={false}/></div>
                  <div><CarouselItem description={'Arches National Park (USA), 2013'} totalCount={MOBILE_SLIDE_COUNT} order={2}
                                     isLandscape={false}/></div>
                  <div><CarouselItem description={'Death Valley (USA), 2013'} totalCount={MOBILE_SLIDE_COUNT} order={3}
                                     isLandscape={false}/></div>
                  <div><CarouselItem description={'Yosemite (USA), 2013'} totalCount={MOBILE_SLIDE_COUNT} order={4}
                                     isLandscape={false}/></div>
                  <div><CarouselItem description={'Legzira Beach (Morocco), 2012'} totalCount={MOBILE_SLIDE_COUNT} order={5}
                                     isLandscape={false}/></div>
                </ReactSwipe>
                }
                <div>
                    <div className={arrowRightCls} onClick={this.next}><FontAwesomeIcon icon="chevron-circle-right"
                                                                                        size="2x"/></div>
                    <div className={arrowLeftCls} onClick={this.prev}><FontAwesomeIcon icon="chevron-circle-left"
                                                                                       size="2x"/></div>
                    <ArrowDown/>
                    <div className="title__wrapper">
                        <h1 className="title__text">
                            I'M JURAJ LIGOCKY
                        </h1>
                    </div>
                </div>

            </div>
        );
    }
}