import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface InfoState {

}

interface InfoProps {

}

export default class Info extends React.Component<InfoProps, InfoState> {

    constructor(props: InfoProps) {
        super(props);
    }

    // render() {
    //     return (
    //         <div className="about">
    //             <h1 className="main-heading main-heading--center">About me</h1>

    //             <div className="about__portrait-wrapper">
    //                 <img className="about__portrait" src="assets/portrait.jpg" />
    //             </div>

    //             <div className="about__info">
    //                 <div className="about__col">
    //                     <h2><FontAwesomeIcon icon="basketball-ball" size="1x" className="margin-right" />Basic info</h2>
    //                    <p> I am Juraj Ligocky (32y) from Bratislava (Slovakia) - father, boyfriend  and curious, open mind person with many hobbies and sport activities. Active player of basketball and streetball. Enjoy time with family, meeting and drinking good rum with my friends, summer time by water</p>

    //                 </div>
    //                 <div className="about__col">
    //                     <h2><FontAwesomeIcon icon="laptop" size="1x" className="margin-right" />IT</h2>

    //                     <p>Frontend, freelance developer focusing on React with more than 7+ years of experiences with software development. Started career as java programmer
    //                     and gradually transform to fronted javascript. Skilled proffesional with a demonstrated history of working in the international bank enviroment (big bank solutions) and small web projects <a href="#"><FontAwesomeIcon icon="download" size="1x" className="margin-right margin-right--small" /> curriculum vitae</a></p>
    //                 </div>
    //                 <div className="about__col">
    //                     <h2><FontAwesomeIcon icon="plane" size="1x" className="margin-right" />Traveling</h2>
    //                     <p>Traveling on my own and getting know about new countries, cities, cultures, people, food and different ways of life. By now i visited 30+ countries in 4 continets<a href="#"><FontAwesomeIcon icon="link" size="1x" className="margin-right margin-right--small" /> my world map page</a></p></div>
    //             </div>

    //         </div>
    //     );
    // }

}