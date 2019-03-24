import * as React from 'react';
import './skill.scss';

export default function Skill(): JSX.Element {
    return (
        <>
            <h1 className="section__title m-top--big m-bottom--zero">Skills</h1>
            <p className="section__subtitle m-top--zero m-bottom--big">My technology stack</p>

            <div className="skill">
                <div className="skill__box">
                    <img src="../../assets/cv/skill/javascript.png"/>
                    <h1 className="skill__box-title skill__box-title--javascript">javascript</h1>
                    <div className="skill__box-text">React</div>
                    <div className="skill__box-text">ES 5, ES 6</div>
                    <div className="skill__box-text">Typescript</div>
                    <div className="skill__box-text">Redux</div>
                </div>
                <div className="skill__box">
                    <img src="../../assets/cv/skill/java.png"/>
                    <h1 className="skill__box-title skill__box-title--java">Java</h1>
                    <div className="skill__box-text">React</div>
                    <div className="skill__box-text">ES 5, ES 6</div>
                    <div className="skill__box-text">Typescript</div>
                    <div className="skill__box-text">Redux</div>
                </div>
                <div className="skill__box">
                    <img src="../../assets/cv/skill/javascript.png"/>
                    <h1 className="skill__box-title skill__box-title--javascript">Other</h1>
                    <div className="skill__box-text">React</div>
                    <div className="skill__box-text">ES 5, ES 6</div>
                    <div className="skill__box-text">Typescript</div>
                    <div className="skill__box-text">Redux</div>
                </div>
                <div className="skill__box">
                    <img src="../../assets/cv/skill/javascript.png"/>
                    <h1 className="skill__box-title skill__box-title--javascript">Other</h1>
                    <div className="skill__box-text">React</div>
                    <div className="skill__box-text">ES 5, ES 6</div>
                    <div className="skill__box-text">Typescript</div>
                    <div className="skill__box-text">Redux</div>
                </div>
            </div>
        </>
    );
}
