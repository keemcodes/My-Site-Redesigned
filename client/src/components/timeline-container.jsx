import React from 'react';

function TimelineContainer(props) {
    return ( 
        <div className="timeline-container">
            <div className="timeline-date">
                {props.date}
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
                        <p>{props.body}</p>
                        <hr />
                        <ul>
                            {props.langs.map((lang, index) => (
                                <li key={index}>{lang} </li>
                            ))}
                        </ul>
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