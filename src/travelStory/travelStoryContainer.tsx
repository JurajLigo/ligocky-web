import * as React from 'react';
import Box from '../box/box';
import Hero from '../hero/hero';
import './travelStory.scss';

export interface TravelStoryContainerProps {
}

export default class TravelStoryContainer extends React.Component<TravelStoryContainerProps, undefined> {

    constructor(props: TravelStoryContainerProps) {
        super(props);
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Hero imagePath="../../assets/travelStory/travel_story.jpg" mobileImagePath="../../assets/travelStory/travel_story_mobile.jpg" mobilePortraitImagePath="../../assets/travelStory/travel_story_mobile_portrait.jpg" title="Cestovateľské príhody" />
                <div className="box__wrapper">
                    <h1 className="section__title">Čo tu nájdem ?</h1>
                    <p className="section__subtitle">Zbierka zaujímavých a netradičných príhod z rôzneho súdka, ktoré som nadobudal počas môjho cestovania svetom na vlastnú päsť</p>
                    <Box 
                        isTextFirst={false} 
                        imagePath="../../assets/travelStory/havana/havana_mobile.jpg"
                        text="Prvý deň na v Havane bol dlhy a veľkolepý, vstali sme o 6 ráno a preskúmali toto neskutočné mesto. Večer sme sa opili a vtrhli na miestnu diskotéku. Keď už sme sa vrátili na izbu zistil som ze mi chýba jeden mobil. Mal som dva mobily, jeden môj a druhy pracovný, ktorý som chcel použiť na fotografovanie pamiatok a iných zaujímavosti :) Okolo 4:30 AM som zistil ze nemám ten firemný :( Radšej som teda zaspal a dúfal som ze ráno sa už zobudím s telefónom. Na moje počudovanie sa ráno zobúdzam a počet telefónov je stále 1 :) ..."
                        title="Interakcia s kubánskou políciou"
                        link="travelstories/havana"
                        flag="CU"
                        />
                    <Box 
                        isTextFirst={false} 
                        imagePath="../../assets/travelStory/santa_clara/santa_clara_mobile.jpg"
                        text="Po jemnom preskúmaní hlavného námestia v centre Santa Clary sme si všimli, že na okraji je jedna reštaurácia pred ktorou stojí v rade strašne veľa miestnych. Pohľadmi sme teda preskúmali vzhľad reštaurácie a keďže sme nemali čas čakať rozhodli sme sa, že si urobíme rezerváciu na večeru ..."
                        title="Gurmanský zážitok v Santa Clare"
                        link="travelstories/santa-clara"
                        flag="CU"
                        />
                    <Box 
                        isTextFirst={false} 
                        imagePath="../../assets/travelStory/morocco_goats/morocco_goats_mobile.jpg"
                        text="Boli sme už dosť južne, aj na úrovni Sahary ale jemne sa ťaháme k moru. Cesty sú takmer prázdne , skoro žiadna doprava. Okolie som sa začal svedomitejšie sledovať, nakoľko zeleň na zemi ubúdala až sa stratila a držala sa už iba na stromoch. To znamenalo jedine bliží sa marocká, stromová atrakcia, o ktorej som si čítal pred odletom - Kozy na stromoch ..."
                        title="Marocké kozy na stromoch"
                        link="travelstories/morocco"
                        flag="MAR"
                        />
                </div>
            </>
        );
    }

}