import React, { Component } from 'react';
// import '../css/header.css';
import Job from './job';
class Employment extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <div className="heading-title">
                    <h1>Employment</h1>
                </div>
                <div className="experience-body">
                    <div className="tabs-container">
                        {this.props.jobnames.map((job, i) => {
                            i += 1;
                            return (
                                <label key={i} htmlFor={"tab" + i}>{job}</label>
                            );
                        })}
                    </div>
                    <Job 
                        tabid='tab1'
                        jobtitle='City of Atlanta'
                        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        langs={['C# / ASP.NET', 'PHP', 'JS']}
                    />
                    <Job 
                        tabid='tab2'
                        jobtitle='Nu Life Marketing'
                        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        langs={['PHP', 'JS', 'React']}

                    />
                    <Job 
                        tabid='tab3'
                        jobtitle='Next Generation'
                        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        langs={['Pawn', 'PHP', 'C#']}

                    />
                    <Job 
                        tabid='tab4'
                        jobtitle='Team-DRD'
                        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        langs={['Pawn', 'PHP', 'C#']}

                    />
                </div>
            </>
        );
    }
}
// function Employment(props) {
//     return ( 
//         <section>
//             <div className="heading-title">
//                 <h1>Employment</h1>
//             </div>
//             <div className="experience-body">
//                 <div className="tabs-container">
//                     {props.jobnames.map((job, i) => {
//                         i += 1;
//                         return (
//                             <label for={"tab" + i}>{job}</label>
//                         );
//                     })}
//                 </div>
//                 <Job 
//                     tabid='tab1'
//                     jobtitle='City of Atlanta'
//                     body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
//                     langs={['PHP', 'JS']}
//                 />
//                 <Job 
//                     tabid='tab2'
//                     jobtitle='Nu Life Marketing'
//                     body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
//                     langs={['PHP', 'JS']}
//                 />
//                 <Job 
//                     tabid='tab3'
//                     jobtitle='Next Generation'
//                     body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
//                     langs={['PHP', 'JS']}
//                 />
//             </div>
//         </section>
//     );
// }
export default Employment;