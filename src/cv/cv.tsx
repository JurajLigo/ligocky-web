import * as React from 'react';
import './cv.scss';
import Hero from '../hero/hero';
import Hobby from './hobby';
import Education from './education';
import Work from './work';
import Skill from './skill';
import Language from './language';

export default function Cv(): JSX.Element {

    return (
        <div className="cv">
            <Hero imagePath="../../assets/cv/cv_6.jpg" mobileImagePath="../../assets/cv/cv_mobile.jpg"
                  mobilePortraitImagePath="../../assets/cv/cv_mobile_portrait.jpg" title="Curiculum vitae"/>
            <Work/>
            <Skill />
            <Education/>
            <Language />
            <Hobby/>
        </div>
    );
}
