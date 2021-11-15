import React, { Component } from 'react';
// import '../css/header.css';

class Job extends Component {
    constructor(props) {
        super(props)
        this.state = {  tab: 'none' };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    render() { 
        // var checked;
        // if (this.props.tabid === 'tab1') {
        //     checked = 'checked';
        // }
        return ( 
            <>
                {/* {checked === 'checked' ? (<input name="tab" id={this.props.tabid} type="radio" checked={checked}/>) :
                <input name="tab" id={this.props.tabid} type="radio"/>
                } */}
                <input name="tab" id={this.props.tabid} type="radio" checked={this.props.tabid} onChange={this.handleChange}/>
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
  
// function Job(props) {
//     var checked;
//     if (props.tabid === 'tab1') {
//         checked = 'checked';
//     }
//     return ( 
//         <>
//             {checked === 'checked' ? (<input name="tab" id={props.tabid} type="radio" checked/>) :
//             <input name="tab" id={props.tabid} type="radio"/>
//             }
//             <div className="tab-content">
//                 <h3>{props.jobtitle}</h3>
//                 <p>{props.body}</p>
//                 <ul>
//                     {props.langs.map(lang => (
//                         <li>{lang}</li>
//                     ))}
//                 </ul>
//                 <hr />
//             </div>
//         </>
//     );
// }
export default Job;