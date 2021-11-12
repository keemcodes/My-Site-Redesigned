import React, { Component } from 'react';
// import '../css/header.css';
import Job from './job';
class Employment extends Component {
    state = {  }
    render() { 
        return ( 
            <section>
                <div class="heading-title">
                    <h1>Employment</h1>
                </div>
                <div class="experience-body">
                    <div class="tabs-container">
                        {/* <label for="tab1"> City of Atlanta </label>
                        <label for="tab2"> Nu Life </label>
                        <label for="tab3"> NGG </label> */}
                        {this.props.jobnames.map((job, i) => {
                            i += 1;
                            return (
                                <label for={"tab" + i}>{job}</label>
                            );
                        })}
                    </div>
                    <Job 
                        tabid='tab1'
                        jobtitle='City of Atlanta'
                        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        langs={['PHP', 'JS']}
                    />
                    <Job 
                        tabid='tab2'
                        jobtitle='Nu Life Marketing'
                        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        langs={['PHP', 'JS']}
                    />
                    <Job 
                        tabid='tab3'
                        jobtitle='Next Generation'
                        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        langs={['PHP', 'JS']}
                    />
                </div>
            </section>
        );
    }
}
 
export default Employment;