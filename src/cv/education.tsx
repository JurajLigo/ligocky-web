import * as React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Education(): JSX.Element {
    return (
        <div className="cv__education">
            <h1 className="section__title m-top--big m-bottom--zero">Education and courses</h1>
            <p className="section__subtitle m-top--zero m-bottom--big">My education and courses history</p>
            <VerticalTimeline animate={false}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2009 - 2010, Bratislava"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<FontAwesomeIcon className="icon-align__education" icon="graduation-cap" size="2x"/>}>
                    <div className="vertical-timeline-element__logo vertical-timeline-element__logo--stu">
                        <img src="../../assets/cv/fiit_stu.png"/>
                    </div>
                    <h3 className="vertical-timeline-element-title">Engineer, Information systems</h3>
                    <p>Engineering study focused on information systems and software architecture. The theme of
                        final project was: Using design patterns by service composition in SOA
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2009 - 2009, Barcelona"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<FontAwesomeIcon className="icon-align__education" icon="graduation-cap" size="2x"/>}>
                    <div className="vertical-timeline-element__logo vertical-timeline-element__logo--barcelona">
                        <img src="../../assets/cv/barcelona_study.png"/>
                    </div>
                    <h3 className="vertical-timeline-element-title">Master Software Engineering and Information
                        Systems</h3>
                    <p>Six month study through the Erasmus exchange</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2007 - 2007, Bratislava"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<FontAwesomeIcon className="icon-align__education" icon="graduation-cap" size="2x"/>}>
                    <div className="vertical-timeline-element__logo vertical-timeline-element__logo--posam">
                        <img src="../../assets/cv/posam.jpg"/>
                    </div>
                    <h3 className="vertical-timeline-element-title">Succesfull participant of Java courses</h3>
                    <h4 className="vertical-timeline-element-subtitle">Java Academy</h4>
                    <p>The half year lasting system of courses focused on Java and J2EE (quick guide to Java, Swing,
                        Spring, EJB, Wicket, design patterns). After passing all courses and tests i had to create J2EE
                        application
                        using mentioned frameworks. Best participants were then offered work contract
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2004 - 2008, Bratislava"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<FontAwesomeIcon className="icon-align__education" icon="graduation-cap" size="2x"/>}>
                    <div className="vertical-timeline-element__logo vertical-timeline-element__logo--stu">
                        <img src="../../assets/cv/fiit_stu.png"/>
                    </div>
                    <h3 className="vertical-timeline-element-title">Bachelor, Informatics</h3>
                    <p>Bachelor study focused on informatics and programming. The theme of final project was:
                        Swing Guide
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="1996 - 2004, Topoľčany"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<FontAwesomeIcon className="icon-align__education" icon="graduation-cap" size="2x"/>}>
                    <div className="vertical-timeline-element__logo vertical-timeline-element__logo--topolcany">
                        <img src="../../assets/cv/topolcany.png"/>
                        <span>Gymnázium Topoľčany</span>
                    </div>
                    <h3 className="vertical-timeline-element-title">High School with graduation</h3>
                    <p>8 years high school focused on foreign languages</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}