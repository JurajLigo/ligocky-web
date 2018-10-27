import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footer.scss';

interface FooterState {

}

interface FooterProps {

}

export default class Footer extends React.Component<FooterProps, FooterState> {

    constructor(props: FooterProps) {
        super(props);
    }

    render() {
        return (
            <footer className="footer">
                {/*<div className="footer__social">
                    <FontAwesomeIcon icon="envelope" className="m-right" size="lg" />
                    <FontAwesomeIcon icon="mobile-alt" className="m-right" size="lg" />
                    <FontAwesomeIcon icon={['fab', 'facebook']} className="m-right" size="lg" />
                </div>*/}
                <div className="footer__copyright">Juraj Ligocky © Copyright 2018, All Rights Reserved</div>
            </footer>
        );
    }

}