import * as React from 'react';
import './hobby.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Hobby(): JSX.Element {
    return (
        <div className="cv__container cv__container--gray">
            <h1 className="section__title">Hobbies</h1>
            <p className="section__subtitle">What i like</p>
            <div className="hobby__wrapper">
                <div className="hobby__box">
                    <div className="hobby__content">
                        <FontAwesomeIcon icon="bicycle" size="3x"/>
                        <h4>Biking in the city</h4>
                    </div>
                </div>
                <div className="hobby__box">
                    <div className="hobby__content">
                        <FontAwesomeIcon icon="book-open" size="3x"/>
                        <h4>Reading books</h4>
                    </div>
                </div>
                <div className="hobby__box">
                    <div className="hobby__content">
                        <FontAwesomeIcon icon="basketball-ball" size="3x"/>
                        <h4>Basketball and streetball</h4>
                    </div>
                </div>
                <div className="hobby__box">
                    <div className="hobby__content">
                        <FontAwesomeIcon icon="plane" size="3x"/>
                        <h4>Traveling on my own</h4>
                    </div>
                </div>
                <div className="hobby__box">
                    <div className="hobby__content">
                        <FontAwesomeIcon icon="umbrella-beach" size="3x"/>
                        <h4>Enjoying summer time near the water</h4>
                    </div>
                </div>
                <div className="hobby__box">
                    <div className="hobby__content">
                        <FontAwesomeIcon icon="dumbbell" size="3x"/>
                        <h4>Fitness</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
