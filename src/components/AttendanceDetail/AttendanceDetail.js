import React, { Component } from 'react';
import axios from 'axios';

export default class AttendanceDetail extends Component{
    constructor(props){
        super(props);

        this.state = {
            
        }
    }

    componentDidMount(){
        // axios call to get 
        axios.get(`http://localhost:3001/${this.props.match.params.id}`).then(response => console.log(response.data));
    }

    render(){
        return(
            <div>
                DETAILED STUDENT ATTENDANCE
            </div>
        )
    }
}