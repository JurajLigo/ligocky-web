import * as React from "react";
import ArrowDown from '../arrowDown';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
//import 'react-vertical-timeline-component/style.min.css';
import './travelStory.scss';

export interface TravelStoryProps {
    coverImagePath: string;
    coverMobileImagePath: string;
    coverPortraitMobileImagePath?: string;
    title: string;
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

     
     private getTravelData = async() => {
         let response: any = await fetch(this.props.jsonPath);
         const data = await response.json();
         this.setState({items: data});
         return data;
     }

    render() {

        let backgroundImgStyle: any = {
            'backgroundImage': `url(${this.props.coverImagePath})`
        };

        if(window.screen.availWidth < 768) {
            backgroundImgStyle = {
                'backgroundImage': `url(${this.props.coverMobileImagePath})`
              };
        } 
        

        return (
            <div className="travel-story">
                <div className="travel-story__cover" style={backgroundImgStyle}>
                    <div className="title title--small">{this.props.subtitle}</div>
                    <ArrowDown />
                </div>
                <VerticalTimeline animate={false}>
                    {this.state.items && this.state.items.map((travelStoryItem: TravelStoryItem, index: number) => {
                        return <VerticalTimelineElement key={index}
                            className="vertical-timeline-element--work"
                            date={travelStoryItem.time}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                            <p>
                                {travelStoryItem.description}

                            </p>
                            {travelStoryItem.imagePath && 
                            <figure>
                                <img src={travelStoryItem.imagePath} className="vertical-timeline__image" />
                                <figcaption><small>{travelStoryItem.imageCaption}</small></figcaption>
                            </figure>}
                        </VerticalTimelineElement>
                    })}

                </VerticalTimeline>
            </div>
        );
    }
}