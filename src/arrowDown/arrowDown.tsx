import * as React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './arrowDown.scss';

export default function ArrowDown(): JSX.Element {
    return (
        <div className="arrow-down">
            <FontAwesomeIcon icon="angle-double-down" size="2x"/>
        </div>
    );
}