import * as React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import TravelStory, {TravelStoryProps} from './travelStory';

export interface TravelStoryFactoryProps {
    routeProps: RouteComponentProps<any, any>;
}

export default class TravelStoryFactory extends React.Component<TravelStoryFactoryProps, undefined> {

    constructor(props: TravelStoryFactoryProps) {
        super(props);
    }

    returnTravelObj(): TravelStoryProps {
        const pathName: string = this.props.routeProps.location.pathname;
        const articleName: string = pathName.substr(pathName.lastIndexOf('/') + 1);
        let travelObj: TravelStoryProps;

        switch (articleName) {
            case 'morocco':
                travelObj = {
                    coverImagePath: "../../assets/travelStory/morocco_goats/morocco_goats.jpg",
                    coverMobileImagePath: "../../assets/travelStory/morocco_goats/morocco_goats_mobile.jpg",
                    subtitle: "Marocké kozy na stromoch",
                    title: "Cestovateľské príhody",
                    place: "Havana",
                    date: "február 2018",
                    jsonPath: '../../assets/travelStory/morocco_goats/morocco_goats.json'
                };
                break;
            case 'havana':
                travelObj = {
                    coverImagePath: "../../assets/travelStory/havana/havana.jpg",
                    coverMobileImagePath: "../../assets/travelStory/havana/havana_mobile.jpg",
                    coverPortraitMobileImagePath: "../../assets/travelStory/havana/havana_mobile_portrait.jpg",
                    subtitle: "Interakcia s kubánskou políciou",
                    title: "Cestovateľské príhody",
                    place: "Havana",
                    date: "február 2018",
                    jsonPath: '../../assets/travelStory/havana/havana_police.json'
                };
                break;
            case 'santa-clara':
                travelObj = {
                    coverImagePath: "../../assets/travelStory/santa_clara/santa_clara.jpg",
                    coverMobileImagePath: "../../assets/travelStory/santa_clara/santa_clara_mobile.jpg",
                    subtitle: "Gurmanský zážitok v Santa Clare",
                    title: "Cestovateľské príhody",
                    place: "Havana",
                    date: "február 2018",
                    jsonPath: '../../assets/travelStory/santa_clara/santa_clara_food.json'
                };
                break;
        }
        return travelObj;
    }

    render() {
        return (
            <>
                <TravelStory {...this.returnTravelObj()} />
            </>
        );
    }

}