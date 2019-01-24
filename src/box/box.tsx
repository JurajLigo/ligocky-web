import * as React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './box.scss';

const Flag = require("react-flags");

interface BoxProps {
    title: string;
    imagePath: string;
    text: string;
    isTextFirst: boolean;
    link: string;
    flag?: string;
}

export default class Box extends React.Component<BoxProps> {

    render() {
        let isTextFirst: boolean = this.props.isTextFirst;

        if (window.screen.availWidth < 768) {
            isTextFirst = true;
        }

        return (
            <div className="box__content max-width">
                {isTextFirst && <>
                  <div className="box__col">
                    <img className="box__picture" src={this.props.imagePath}/>
                    <h2 className="box__title">{this.props.title}</h2>
                    <div className="box__description-wrapper">
                            <span className="box__place">
                                <FontAwesomeIcon icon="map-marker-alt" size="1x" className="icon"/>
                                Havana</span>
                      <span className="box__time"><FontAwesomeIcon icon="clock" size="1x" className="icon"/>február 2018</span>
                    </div>
                  </div>
                  <div className="box__col">
                    <p className="box__text">{this.props.text}</p>
                    <p>
                      <Link to={this.props.link} className="link"><FontAwesomeIcon icon={['fab', 'readme']}
                                                                                   size="lg"
                                                                                   className="icon"/>Čítať
                        viac</Link>
                    </p>
                  </div>
                </>}

                {!isTextFirst && <>
                  <div className="box__col">
                    <img className="box__picture" src={this.props.imagePath}/>
                  </div>
                  <div className="box__col">
                    <h2 className="box__title">{this.props.flag && <Flag
                      name={this.props.flag} format="png" basePath="assets" pngSize={32} shiny={false}
                      className="header__flag"/>}{this.props.title}</h2>
                    <div className="box__description-wrapper">
                            <span className="box__place">
                                <FontAwesomeIcon icon="map-marker-alt" size="1x" className="icon"/>
                                Havana</span>
                      <span className="box__time"><FontAwesomeIcon icon="clock" size="1x" className="icon"/>február 2018</span>
                    </div>
                    <p className="box__text">{this.props.text}</p>
                    <p>
                      <Link to={this.props.link} className="link"><FontAwesomeIcon icon={['fab', 'readme']}
                                                                                   size="lg"
                                                                                   className="icon"/>Čítať
                        viac</Link>
                    </p>
                  </div>
                </>}
            </div>
        );
    }

}