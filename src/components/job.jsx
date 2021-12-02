import React, { Component } from 'react';

class Job extends Component {
    constructor(props) {
        super(props)
        this.state = {  };
    }

    render() { 
        return ( 
            <>
                <div className="tab-content">
                    <h3><b>{this.props.jobtitle}</b></h3>
                    <h3>@ {this.props.jobname}</h3>
                    <p>{this.props.body}</p>
                    <ul>
                        {this.props.langs.map((lang, index) => (
                            <li key={index}>{lang} </li>
                        ))}
                    </ul>
                    <hr />
                </div>
            </>
        );
    }
}
  
export default Job;