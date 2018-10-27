import * as React from "react";
import './cv.scss';
import Hero from '../hero/hero';
import Hobby from './hobby';
import Education from './education';
import Work from "./work";

export default class Cv extends React.Component<undefined, undefined> {

    render() {
        return (
            <>
                <Hero imagePath="../../assets/cv/cv_6.jpg" mobileImagePath="../../assets/cv/cv_mobile.jpg" mobilePortraitImagePath="../../assets/cv/cv_mobile_portrait.jpg" title="Curiculum vitae" />
                <Work />
                <Education />
                <Hobby />

            </>
        );
    }

}