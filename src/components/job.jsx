import React, { Component } from 'react';

class Job extends Component {
    constructor(props) {
        super(props)
        this.state = {  checked: 'tab1' };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ checked: event });
    }
    onChange(i){
        this.setState({
            checked: i
        });
     }    
    render() { 
        return ( 
            <>
                <input name="tab" id={this.props.tabid} type="radio" checked={this.state.checked === this.props.tabid ? true : false} onChange={this.onChange.bind(this,this.props.tabid)} />
                <div className="tab-content">
                    <h3>{this.props.jobtitle}</h3>
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