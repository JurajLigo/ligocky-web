import * as React from "react";
import { render } from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom'
import Layout from "./layout";
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faChevronCircleLeft, faChevronCircleRight, faChevronCircleUp,
    faLaptop, faBasketballBall, faPlane, faDownload,
    faEnvelope, faMobileAlt, faLink, faFilePdf, faAngleDoubleDown, faBriefcase
    ,faGraduationCap, faBicycle, faBookOpen, faDumbbell
} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faReadme } from '@fortawesome/free-brands-svg-icons';
import './base.scss';

library.add(faChevronCircleLeft);
library.add(faChevronCircleRight);
library.add(faChevronCircleUp);
library.add(faLaptop);
library.add(faBasketballBall);
library.add(faPlane);
library.add(faEnvelope);
library.add(faFacebook);
library.add(faMobileAlt);
library.add(faLink);
library.add(faDownload);
library.add(faReadme);
library.add(faFilePdf);
library.add(faAngleDoubleDown);
library.add(faBriefcase);
library.add(faGraduationCap);
library.add(faBicycle);
library.add(faBookOpen);
library.add(faDumbbell);

render(<HashRouter>
        < Layout />
    </HashRouter>, document.getElementById('app')); 