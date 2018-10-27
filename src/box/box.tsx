import * as React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './box.scss';

interface BoxState {
}

interface BoxProps {
    title: string;
    imagePath: string;
    text: string;
    isTextFirst: boolean;
    link: string;
}

export default class Box extends React.Component<BoxProps, BoxState> {

    constructor(props: BoxProps) {
        super(props);
    }

    render() {

        let isTextFirst: boolean = this.props.isTextFirst;

        if(window.screen.availWidth < 768) {
            isTextFirst = true;
        }

        return (
            <div className="box__content max-width">
                {isTextFirst && <>
                    <div className="box__col">
                    <h3 className="box__article-title">{this.props.title}</h3>
                        <img className="box__picture" src={this.props.imagePath} />
                    </div>
                    <div className="box__col">
                        {this.props.text}
                        <p className="m-top--big">
                        <Link to={this.props.link} className="link"><FontAwesomeIcon icon={['fab', 'readme']} size="lg" className="m-right--small" />Čítať viac</Link>
                        </p>
                    </div>
                </>}

                {!isTextFirst && <>
                    <div className="box__col">
                        <img className="box__picture" src={this.props.imagePath} />
                    </div>
                    <div className="box__col">
                        <h3 className="box__article-title">{this.props.title}</h3>
                        {this.props.text}
                        <p className="m-top--big">
                            <Link to={this.props.link} className="link"><FontAwesomeIcon icon={['fab', 'readme']} size="lg" className="m-right--small" />Čítať viac</Link>
                        </p>
                    </div>
                </>}
            </div>
        );
    }

}