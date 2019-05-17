import * as React from 'react';
import './skill.scss';

export default function Skill(): JSX.Element {
    return (
        <div className="cv__container">
            <h1 className="section__title">Skills</h1>
            <p className="section__subtitle">My technology stack</p>

            <div className="skill">
                <div className="skill__box">
                    <img src="../../assets/cv/skill/javascript.png"/>
                    <h1 className="skill__box-title skill__box-title--javascript">Javascript</h1>
                    <div className="skill__list">
                        <div className="skill__box-text">React (good knwoledge)</div>
                        <div className="skill__box-text">Redux</div>
                        <div className="skill__box-text">ES 5, ES 6</div>
                        <div className="skill__box-text">Typescript</div>
                        <div className="skill__box-text">Jasmine</div>
                    </div>
                </div>
                <div className="skill__box">
                    <img src="../../assets/cv/skill/java.svg"/>
                    <h1 className="skill__box-title skill__box-title--java">Java</h1>
                    <div className="skill__list">
                        <div className="skill__box-text">J2EE (basics)</div>
                        <div className="skill__box-text">Spring (basics)</div>
                        <div className="skill__box-text">Swing, Wicket</div>
                        <div className="skill__box-text">JUnit</div>
                    </div>
                </div>
                <div className="skill__box">
                    <div className="skill__other"/>
                    <h1 className="skill__box-title skill__box-title--other">Other</h1>
                    <div className="skill__list">
                        <div className="skill__box-text">HTML 5 / CSS 3</div>
                        <div className="skill__box-text">MDA</div>
                        <div className="skill__box-text">SOA</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
