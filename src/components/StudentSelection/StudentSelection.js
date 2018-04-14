import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class StudentSelection extends Component{
    constructor(props){
        super(props);

        this.state = {
            classes: [],
            sections: [],
            students: [],
            classID: "",
            sectionID: "",
            studentName: ""
        }
        this.setClass = this.setClass.bind(this);
        this.setSection = this.setSection.bind(this);
        this.setStudent = this.setStudent.bind(this);
        this.searchRecords = this.searchRecords.bind(this);
    }

    componentDidMount(){
        axios.get('/db').then(response => {
            console.log(response.data);
            this.setState({ classes: response.data.classes, sections: response.data.sections, students: response.data.students });
        });
    }

    setClass(val){
        this.setState({ classID: val })
    }
    
    setSection(val){
        this.setState({ sectionID: val })
    }    
    
    setStudent(val){
        console.log(val);
        this.setState({ studentName: val })
    }

    searchRecords(){
        // routes to detailed page with student ID
    }

    render(){
        const classMenu = this.state.classes.map((curr, i) => {
            return(
                <option key={i} value={curr}>{curr}</option>
            )
        });
        console.log(this.state.sections);

        const sectionMenu = this.state.sections.map((curr, i) => {
            return(
                <option key={i} value={curr.sections}>{curr.sections}</option>
            )            
        });

        const studentMenu = this.state.students.map((curr, i) => {
            return(
                <option onClick={ (e) => this.setStudent(e.target.value) } key={i} value={curr}>{curr.name}</option>
            )
        })
        return(
            <div className="selection-view">
                <h1>Student Selection</h1>

                <section className="dropdown-container">
                    <select name="Select Class">
                        <option>Select Class</option>
                        { classMenu }
                    </select>

                    <select name="Select Section">
                        <option>Select Section</option>
                        { sectionMenu }
                    </select>

                    <select name="Select Student Name">
                        <option>Select Student Name</option>
                        { studentMenu }
                    </select>
                </section>

                <Link to={ `/student/${this.state.studentName.id}` }>    
                    <button className="btn search-btn">Search Records</button>
                </Link>    
            </div>
        )
    }
}