import React, { Component } from 'react';
// import '../css/header.css';

class TimelineContainer extends Component {
    state = {  }
    render() { 
        // const date = 'Feb. 2020';
        return ( 
            <div className="timeline-container">
                <div className="timeline-date">
                    {this.props.date}
                    {/* {date} */}
                </div>
                <div className="timeline-arrow">
                    <img src="/images/triangle.svg" alt="" />
                </div>
                <div className="timeline-outter-body">
                    <div className="timeline-title">
                        {this.props.title}
                    </div>
                    <div className="timeline-inner-body">
                        <div className="timeline-body">
                            {this.props.body}
                            <hr />
                            <ul>
                                {this.props.langs.map((lang, index) => (
                                    <li key={index}>{lang} </li>
                                ))}
                            </ul>
                        </div>
                        <div className="timeline-top-right">
                            <i className="fab fa-github-alt"></i>
                            <i className="fas fa-external-link-alt"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// function TimelineContainer(props) {
//     return ( 
//         <div className="timeline-container">
//             <div className="timeline-date">
//                 {props.date}
//                 {/* {date} */}
//             </div>
//             <div className="timeline-arrow">
//                 <img src="/images/triangle.svg" alt="" />
//             </div>
//             <div className="timeline-outter-body">
//                 <div className="timeline-title">
//                     {props.title}
//                 </div>
//                 <div className="timeline-inner-body">
//                     <div className="timeline-body">
//                         <p>
//                             {props.body}
//                         </p>
//                         <hr />
//                         <ul>
//                             {props.langs.map(lang => (
//                                 <li>{lang}</li>
//                             ))}
//                         </ul>
//                     </div>
//                     <div className="timeline-top-right">
//                         <i className="fab fa-github-alt"></i>
//                         <i className="fas fa-external-link-alt"></i>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
 
export default TimelineContainer;