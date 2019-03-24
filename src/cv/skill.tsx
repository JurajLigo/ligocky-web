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
                    <h1 className="skill__box-title skill__box-title--javascript">Javasript</h1>
                </div>
                <div className="skill__box">Java</div>
                <div className="skill__box">Other</div>
            </div>
        </>
    );
}
