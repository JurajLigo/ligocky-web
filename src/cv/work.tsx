import * as React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Work(): JSX.Element {
    return (
        <div className="cv__work">
            <h1 className="section__title m-top--big m-bottom--zero">Work experiences</h1>
            <p className="section__subtitle m-top--zero m-bottom--big">My working history</p>
            <VerticalTimeline animate={true}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2017 - today, Vienna"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<FontAwesomeIcon className="icon-align__work" icon="briefcase" size="2x"/>}>
                    <div className="vertical-timeline-element__logo vertical-timeline-element__logo--erste">
                        <img src="../../assets/cv/erste.svg"/>
                    </div>
                    <h3 className="vertical-timeline-element-title">Senior Frontend Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Project EMIL (20 people)</h4>
                    <ul className="dash">
                        <li>
                            Content management system, serving more than 200 web portals with millions of monthly
                            visitors and over 300 content editors in various countries
                        </li>
                        <li>
                            Implementation of social communities components (polls, comments ...), implementation of
                            completely new mobile header optimized for 200 web pages, programming new web components,
                            bugfixing
                        </li>
                        <li>
                            AEM, Javascript (ES6), React, Typescript, JQuery, HTML, CSS, BEM, REST, Git, code review
                        </li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2016 - 2017, Bratislava"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<FontAwesomeIcon className="icon-align__work" icon="briefcase" size="2x"/>}>
                    <div className="vertical-timeline-element__logo vertical-timeline-element__logo--touch">
                        <img src="../../assets/cv/touch4IT.svg"/>
                    </div>
                    <h3 className="vertical-timeline-element-title">Fullstack Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Project CitySonder (7 people)</h4>
                    <ul className="dash">
                        <li>
                            The web application offers guided city tours around the world, where each tour is
                            custom-made for the user
                        </li>
                        <li>
                            Implementing paging, sorting and filtering for all tables in application
                        </li>
                        <li>
                            HTML, CSS, Bootstrap, Angular 2, Angular CLI, ngx-datatable, TypeScript, JavaScript,
                            Node.js,
                            Sails.js, Waterline.js, REST, Git
                        </li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2011 - 2016, Bratislava"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<FontAwesomeIcon className="icon-align__work" icon="briefcase" size="2x"/>}>
                    <div className="vertical-timeline-element__logo vertical-timeline-element__logo--vub">
                        <img src="../../assets/cv/vub_2.jpg"/>
                    </div>
                    <h3 className="vertical-timeline-element-title">Senior Programmer/Analyst</h3>
                    <h4 className="vertical-timeline-element-subtitle">Project Multichannel (40 - 120 people)</h4>
                    <ul className="dash">
                        <li>
                            In prime most important project in VUB Bank (Intesa San Paolo), big solution for capturing
                            all
                            bank channels including completely new Internet Banking
                        </li>
                        <li>
                            Modeling, managing, developing (from BE to FE) and responsibility for frontend flows and
                            components in particular areas, implementing frontend logic for all SEPA payment screens,
                            technical support, honoured as the Key Employee in VUB Bank
                        </li>
                        <li>
                            MDA, J2EE, Web Services, Maven, Wicket, JUnit, Javascript, Underscore.js, JQuery,
                            HighCharts, HTML,
                            CSS, XML, XQuery, Git
                        </li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011, Bratislava"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<FontAwesomeIcon className="icon-align__work" icon="briefcase" size="2x"/>}>
                    <div className="vertical-timeline-element__logo vertical-timeline-element__logo--vub">
                        <img src="../../assets/cv/vub_2.jpg"/>
                    </div>
                    <h3 className="vertical-timeline-element-title">Junior Programmer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Project SSV (20 people)</h4>
                    <ul className="dash">
                        <li>
                            Information system for bank branches providing sales of all bank products
                        </li>
                        <li>
                            Implementing frontend screens, developing and managing application for simulating mortgages,
                            programming based on specification
                        </li>
                        <li>
                            J2EE, EJB, JAXB, SOAP, SQL, JSF, Vaadin, JUnit, XML, XSLT, XSLT-FO, HTML, CSS, Javascript
                        </li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2009 - 2010, Bratislava"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<FontAwesomeIcon className="icon-align__work" icon="briefcase" size="2x"/>}>
                    <div className="vertical-timeline-element__logo vertical-timeline-element__logo--posam">
                        <img src="../../assets/cv/posam.jpg"/>
                    </div>
                    <h3 className="vertical-timeline-element-title">Junior Java Programmer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Project Cognisance (6 people)</h4>
                    <ul className="dash">
                        <li>
                            Internal knowledge based application for storing and managing documents
                        </li>
                        <li>
                            Design and implementation of special graph feature for managing documents, programming,
                            bug fixing
                        </li>
                        <li>
                            Java, JUnit, Wicket, Servlets, Applet, JavaScript, JUNG, Hibernate, CVS
                        </li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2008 - 2009, Bratislava"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<FontAwesomeIcon className="icon-align__work" icon="briefcase" size="2x"/>}>
                    <div className="vertical-timeline-element__logo vertical-timeline-element__logo--posam">
                        <img src="../../assets/cv/posam.jpg"/>
                    </div>
                    <h3 className="vertical-timeline-element-title">Junior Java Programmer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Project Allianz (15 people)</h4>
                    <ul className="dash">
                        <li>
                            Information system for evidence various insurances
                        </li>
                        <li>
                            Implementing server-domain objects based on diagrams, programming, bug fixing on client and
                            server side
                        </li>
                        <li>
                            J2EE, JUnit, Wicket, Hibernate, CVS
                        </li>
                    </ul>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>);
}
