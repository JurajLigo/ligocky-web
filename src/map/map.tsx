import * as React from "react";
import { match } from "react-router";
//import { europe } from '../../assets/map/europe';
//import { trips } from '../../assets/map/trips';

interface MapState {

}

interface MapProps {
}

export default class Map extends React.Component<MapProps, MapState> {



    constructor(props: MapProps) {
        super(props);
        console.log('git test');
    }

    render() {

    



        return (
            <div>
            Ahoj mapa
            </div>
        );
    }

}