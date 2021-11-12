import React, { Component } from 'react';
// import '../css/header.css';

class Job extends Component {
    state = {  }
    render() { 
        var checked;
        if (this.props.tabid === 'tab1') {
            checked = 'checked';
        }
        return ( 
            <>
                {checked === 'checked' ? (<input name="tab" id={this.props.tabid} type="radio" checked/>) :
                <input name="tab" id={this.props.tabid} type="radio"/>
                }
                <div class="tab-content">
                    <h3>{this.props.jobtitle}</h3>
                    <p>{this.props.body}</p>
                    <ul>
                        {this.props.langs.map(lang => (
                            <li>{lang}</li>
                        ))}
                    </ul>
                    <hr />
                </div>
            </>
        );
    }
}
 
export default Job;