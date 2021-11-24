import React, { Component } from 'react';
import TimelineContainer from './timeline-container';
// import '../css/header.css';

class Projects extends Component {
    state = {  }
    render() {
        return ( 
            <>
                <div className="heading-title">
                    <h1>Projects</h1>
                </div>
                <div className="outter-timeline">
                    <div className="timeline">
                        <TimelineContainer 
                            date='July 2021'
                            title='E.I. App'
                            body={<p>Built an application supporting over <b>50,000 internal users</b> in submitting weekly initaitives and requesting co-worker support</p>}
                            langs={['PHP', 'JS']}
                        />
                        <TimelineContainer 
                            date='Mar. 2020'
                            title='S.W.T. App'
                            body={<p>Designed and built an application that ingests <b>motion sensor data from an API.</b> Data is used to provide Airport Security Checkpoint Wait Times to passengers</p>}
                            langs={['PHP', 'JS']}
                        />
                        <TimelineContainer 
                            date='Feb. 2023'
                            title='Press Release API'
                            body={<p>Press Release data provided via API is ingested and parsed into a <b>readable HTML format</b>.</p>}
                            langs={['PHP', 'JS']}
                        />
                    </div>
                </div>
            </>  
        );
    }
}
 
// function Projects() {
//     return ( 
//         <section>
//             <div className="heading-title">
//                 <h1>Projects</h1>
//             </div>
//             <div className="outter-timeline">
//                 <div className="timeline">
//                     <TimelineContainer 
//                         date='Feb. 2021'
//                         title='Press Release API'
//                         body={<p>Press Release data provided via API is ingested and parsed into a <b>readable HTML format</b>.</p>}
//                         // langs={["s","s"]}
//                         langs={['PHP', 'JS']}
//                     />
//                     <TimelineContainer 
//                         date='Feb. 2022'
//                         title='Press Release API'
//                         body={<p>Press Release data provided via API is ingested and parsed into a <b>readable HTML format</b>.</p>}
//                         // langs={["s","s"]}
//                         langs={['PHP', 'JS']}
//                     />
//                     <TimelineContainer 
//                         date='Feb. 2023'
//                         title='Press Release API'
//                         body={<p>Press Release data provided via API is ingested and parsed into a <b>readable HTML format</b>.</p>}
//                         // langs={["s","s"]}
//                         langs={['PHP', 'JS']}
//                     />
//                 </div>
//             </div>
//         </section>  
//     );
// }
export default Projects;