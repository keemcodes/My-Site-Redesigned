import React, { Component } from 'react';
// import '../css/header.css';

class TimelineContainer extends Component {
    state = {  }
    render() { 
        // const date = 'Feb. 2020';
        return ( 
            <div class="timeline-container">
                <div class="timeline-date">
                    {this.props.date}
                    {/* {date} */}
                </div>
                <div class="timeline-arrow">
                    <img src="/images/triangle.svg" alt="" />
                </div>
                <div class="timeline-outter-body">
                    <div class="timeline-title">
                        {this.props.title}
                    </div>
                    <div class="timeline-inner-body">
                        <div class="timeline-body">
                            <p>
                                {this.props.body}
                            </p>
                            <hr />
                            <ul>
                                {this.props.langs.map(lang => (
                                    <li>{lang}</li>
                                ))}
                            </ul>
                        </div>
                        <div class="timeline-top-right">
                            <i class="fab fa-github-alt"></i>
                            <i class="fas fa-external-link-alt"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default TimelineContainer;