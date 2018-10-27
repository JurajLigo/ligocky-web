import * as React from "react";
import { NavLink, Switch, Route, RouteComponentProps } from 'react-router-dom';
import Home from './home/home';
import Map from "./map/map";
import TravelStoryContainer from './travelStory/travelStoryContainer';
import TravelStory from './travelStory/travelStory';
import TravelStoryFactory from "./travelStory/travelStoryFactory";
import Cv from "./cv/cv";


export const MainRouter = () => (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/map' component={Map}></Route>
      <Route exact path='/travelstories' component={TravelStoryContainer}></Route>
      <Route exact path='/cv' component={Cv}></Route>
      <Route path='/travelstories/:travestoryId' render={(routeProps: RouteComponentProps<any, any>) => (
    <TravelStoryFactory {...{routeProps}}  />)}></Route>
    </Switch>
  );