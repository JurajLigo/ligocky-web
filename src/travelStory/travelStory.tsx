import * as React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import Hero from '../hero/hero';
import './travelStory.scss';

export interface TravelStoryProps {
    coverImagePath: string;
    coverMobileImagePath: string;
    coverPortraitMobileImagePath?: string;
    title: string;
    place: string;
    date: string;
    subtitle: string;
    jsonPath: string;
}

export interface TravelStoryItem {
    description: string;
    imagePath?: string;
    imageCaption?: string;
    time: string;
    day?: string;
}

export interface TravelStoryState {
    items: TravelStoryItem[];
}

export default class TravelStory extends React.Component<TravelStoryProps, TravelStoryState> {

    constructor(props: TravelStoryProps) {
        super(props);
        window.scrollTo(0, 0);
        this.state = {items: []};
    }

    componentDidMount() {
        this.getTravelData();
    }

    private getTravelData = async () => {
        let response: any = await fetch(this.props.jsonPath);
        const data = await response.json();
        this.setState({items: data});
        return data;
    };

    private renderDateText(time: string, day: string): JSX.Element {
        return (
            <div className="vertical-timeline-element__time-wrapper">
                <div className="vertical-timeline-element__time">{time}</div>
                {day && <div className="vertical-timeline-element__day">{day}</div>}
            </div>
        );
    }

    render() {
        return (
            <div className="travel-story">
                <Hero imagePath={this.props.coverImagePath}
                      mobileImagePath={this.props.coverMobileImagePath}
                      mobilePortraitImagePath={this.props.coverMobileImagePath}
                      title={this.props.subtitle}/>
                <VerticalTimeline animate={true}>
                    {this.state.items && this.state.items.map((travelStoryItem: TravelStoryItem, index: number) => {
                        return <VerticalTimelineElement key={index}
                                                        className="vertical-timeline-element--work"
                                                        icon={this.renderDateText(travelStoryItem.time, travelStoryItem.day)}
                                                        iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}>
                            <p>
                                {travelStoryItem.description}

                            </p>
                            {travelStoryItem.imagePath &&
                            <figure>
                              <img src={travelStoryItem.imagePath} className="vertical-timeline-element__image"/>
                              <figcaption>{travelStoryItem.imageCaption}</figcaption>
                            </figure>}
                        </VerticalTimelineElement>
                    })}

                </VerticalTimeline>
            </div>
        );
    }
}