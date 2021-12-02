import React from 'react';

function TimelineContainer(props) {
    return ( 
        <div className="timeline-container">
            <div className="timeline-date">
                {props.date}
                {/* {date} */}
            </div>
            <div className="timeline-arrow">
                <img src="/images/triangle.svg" alt="" />
            </div>
            <div className="timeline-outter-body">
                <div className="timeline-title">
                    {props.title}
                </div>
                <div className="timeline-inner-body">
                    <div className="timeline-body">
                        {props.body}
                        <hr />
                        <ul>
                            {props.langs.map((lang, index) => (
                                <li key={index}>{lang} </li>
                            ))}
                        </ul>
                        {/* <div style={{height:'100%',width: '100%', position: 'relative'}} className="timeline-body-image">

                            <img style={{height:'100%',width: '100%', left: '0', top: '0', position: 'absolute'}} src="/images/portfolio-site-image.png" alt="" />
                        </div> */}
                    </div>
                    <div className="timeline-top-right">
                        <a href={props.github} ><i className="fab fa-github-alt"></i></a>
                        <a href={props.external} ><i className="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimelineContainer;