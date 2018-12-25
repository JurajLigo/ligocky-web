import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './about.scss';

export function About(): JSX.Element {
    return (
        <div className="about__wrapper">
            <h1 className="about__title">About me</h1>
            <p className="about__subtitle">small introduction about myself</p>
            <div className="about__info max-width">
                <div className="about__col">
                    <div>
                        <h3 className="m-bottom--zero">Basic info</h3>
                        I am Juraj Ligocky (32y) from Bratislava (Slovakia) - father, boyfriend  and curious, open mind person with many hobbies and sport activities. Active player of basketball and streetball. Enjoy time with family, meeting and drinking good rum with my friends, summer time by water
                        </div>
                    <div className="margin-top--medium">
                        <h3 className="m-bottom--zero">Developer</h3>
                        Frontend, freelance developer focusing on React with more than 7+ years of experiences with software development. Started career as java programmer
                     and gradually transform to fronted javascript. Skilled proffesional with a demonstrated history of working in the international bank enviroment (big bank solutions) and small web projects
                         </div>
                    <a className="link link--blue m-bottom--medium m-top--medium m-right--medium"><FontAwesomeIcon icon="file-pdf" size="1x" /> CV download</a>
                    <a className="link link--blue m-bottom--medium"><FontAwesomeIcon icon="link" size="1x" /> CV online</a>

                    <div>
                        <h3 className="m-bottom--zero">Traveling</h3>
                        Traveling on my own and getting know about new countries, cities, cultures, people, food and different ways of life. By now i visited 30+ countries in 4 continets
                       </div>
                    <a className="link link--blue m-bottom--medium m-top--medium"><FontAwesomeIcon icon="link" size="1x" /> World map</a>
                </div>

                <div className="about__col2">

                    <img className="about__portrait" src="assets/portrait.jpg" />
                </div>
            </div>

        </div>
    );
}
