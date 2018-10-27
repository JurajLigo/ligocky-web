import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Hobby = () => (
    <div>
        <h1 className="section__title m-top--big m-bottom--zero">Hobbies</h1>
        <p className="section__subtitle m-top--zero m-bottom--big">What i like</p>
        <div className="cv__hobbies-wrapper">
            <div className="cv__hobbies-box">
                <div className="cv__hobbies-content">
                    <FontAwesomeIcon icon="bicycle" size="3x" />
                    <h4 className="m-top--small m-bottom--zero">Biking in the city</h4>
                </div>
            </div>
            <div className="cv__hobbies-box">
                <div className="cv__hobbies-content">
                    <FontAwesomeIcon icon="book-open" size="3x" />
                    <h4 className="m-top--small m-bottom--zero">Reading books</h4>
                </div>
            </div>
            <div className="cv__hobbies-box">
                <div className="cv__hobbies-content">
                    <FontAwesomeIcon icon="basketball-ball" size="3x" />
                    <h4 className="m-top--small m-bottom--zero">Basketball and streetball</h4>
                </div>
            </div>
            <div className="cv__hobbies-box">
                <div className="cv__hobbies-content">
                    <FontAwesomeIcon icon="plane" size="3x" />
                    <h4 className="m-top--small m-bottom--zero">Traveling on my own</h4>
                </div>
            </div>
            <div className="cv__hobbies-box">
                <div className="cv__hobbies-content">
                    <FontAwesomeIcon icon="dumbbell" size="3x" />
                    <h4 className="m-top--small m-bottom--zero">Fitness</h4>
                </div>
            </div>
        </div>
    </div>
);

export default Hobby;