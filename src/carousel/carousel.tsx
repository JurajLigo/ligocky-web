import * as React from "react";
import * as ReactSwipe from "react-swipe";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './carousel.scss';
import CarouselItem from './carouselItem';
import ArrowDown from '../arrowDown';

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

    private handleResize =() => {
        this.setState({isLandscape: window.innerHeight < window.innerWidth});
    }

    next = () => {
        this.reactSwipe.next();
    }

    prev = () => {
        this.reactSwipe.prev();
    }

    render() {
        return (
            <div className="carousel__wrapper">
                {this.state.isLandscape &&
                <ReactSwipe ref={reactSwipe => this.reactSwipe = reactSwipe} className="carousel" swipeOptions={{ continuous: true, auto: 3000 }}>
                    <div><CarouselItem description={'Valletta (Malta), 2018'} totalCount={9} order={1} isLandscape={true} /></div>
                    <div><CarouselItem description={'Petra (Jorda), 2016'} totalCount={9} order={2} isLandscape={true}  /></div>
                    <div><CarouselItem description={'Fuerteventura (Canary Island), 2016'} totalCount={9} order={3} isLandscape={true} /></div>
                    <div><CarouselItem description={'Angkor wat (Cambodia), 2016'} totalCount={9} order={4} isLandscape={true} /></div>
                    <div><CarouselItem description={'Arches National Park (USA), 2013'} totalCount={9} order={5} isLandscape={true} /></div>
                    <div><CarouselItem description={'Zion National Park (USA), 2013'} totalCount={9} order={6} isLandscape={true} /></div>
                    <div><CarouselItem description={'Death Valley (USA), 2013'} totalCount={9} order={7} isLandscape={true} /></div>
                    <div><CarouselItem description={'Yosemite (USA), 2013'} totalCount={9} order={8} isLandscape={true} /></div>
                    <div><CarouselItem description={'Legzira Beach (Morocco), 2012'} totalCount={9} order={9} isLandscape={true} /></div>
                </ReactSwipe>
                }
                {!this.state.isLandscape &&
                <ReactSwipe ref={reactSwipe => this.reactSwipe = reactSwipe} className="carousel" swipeOptions={{ continuous: true, auto: 3000 }}>
                    <div><CarouselItem description={'Fuerteventura (Canary Island), 2016'} totalCount={5} order={3} isLandscape={false} /></div>
                    <div><CarouselItem description={'Arches National Park (USA), 2013'} totalCount={5} order={5} isLandscape={false} /></div>
                    <div><CarouselItem description={'Death Valley (USA), 2013'} totalCount={5} order={7} isLandscape={false} /></div>
                    <div><CarouselItem description={'Yosemite (USA), 2013'} totalCount={5} order={8} isLandscape={false} /></div>
                    <div><CarouselItem description={'Legzira Beach (Morocco), 2012'} totalCount={5} order={9} isLandscape={false} /></div>
                </ReactSwipe>
                }
                <div>
                    <div className="carousel__arrow carousel__arrow--right" onClick={this.next}><FontAwesomeIcon icon="chevron-circle-right" size="2x" /> </div>
                    <div className="carousel__arrow carousel__arrow--left" onClick={this.prev}><FontAwesomeIcon icon="chevron-circle-left" size="2x" /> </div>
                    <ArrowDown />
                    <div className="title">
                        <div className="title__text">I'M JURAJ LIGOCKY</div>
                    </div>
                </div>

            </div>
        );
    }
}