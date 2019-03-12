import * as React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import Hero from '../hero/hero';
import './travelStory.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

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
                                                        icon={<span className="vertical-timeline-element__date">{travelStoryItem.time}</span>}
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