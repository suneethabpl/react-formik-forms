import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../css/Workexperience1.css';
import WorkExperienceDetails from './WorkExperienceDetails';
// import '../css/Workexperience.css'
import '../css/Collapseworkexperience.css'


class Workexperience2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobtitle: '',
            city: '',
            Employer: '',
            startDate: new Date(),
            endDate: new Date(),
            description: '',
            forms: []
        }
    }


    handleChange = date => {
        this.setState({
            startDate: date
        });
    };


    onChange = (e) => {
        var fieldValue = (e.target.type == "checkbox") ? e.target.checked : e.target.value;
        var fieldName = e.target.name;
        this.setState({
            [fieldName]: fieldValue
        })
    }

    addAnotherWorkExperience() {
        this.setState({ forms: [...this.state.forms, ""] })
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleAddChange(e, index) {
        this.state.forms[index] = e.target.value;
        this.setState({ forms: this.state.forms })
    }

    render() {
        const forms = this.state.forms;
        return (
            <div className="experienceform" >
                <div>
                    {
                        this.state.forms.map((form, index) => {
                            return (
                                <div key={index} >

                                    <WorkExperienceDetails onChange={(e) => this.handleAddChange(e, index)} value={form} />
                                </div>

                            )
                        })
                    }

                    {/* <form className="formclass">
                    <h1>Work experience</h1>
                    <div className="columns">
                        <div className="form-control">
                            <label className="worklabel">Job Title</label>
                            <input type="text" name="jobtitle" onChange={this.onChange} onBlur={this.onBlur} />
                        </div>
                        <div className="form-control">
                            <label className=" worklabel">City</label>
                            <input type="text" name="city" onChange={this.onChange} onBlur={this.onBlur} />
                        </div>
                    </div>
                    <div className="form-control mleft">
                        <label >Employer</label>
                        <input type="text" name="employer" onChange={this.onChange} onBlur={this.onBlur} />
                    </div>
                    <div className="columns">
                        <div className="form-control">
                            <label className="h6">Start Date</label>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-control">
                            <label className="h6">End Date</label>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="h6">Description</label>
                        <textarea cols="84" rows="7" name="description" onChange={this.onChange} onBlur={this.onBlur} className="form-control mleft"></textarea>
                    </div>
                    <button type="button" onClick={this.onSubmit} className="btnclass btnwork">Delete</button>
                    <button type="button" onClick={this.onSubmit} className="btnclass btnwork">save</button>
                </form>  */}

                    <div>
                        <h5>Work experience</h5>
                        <form className="formclass1">
                                 {/* {this.displayForm()} */}
                            <button type="button" onClick={(e) => this.addAnotherWorkExperience(e)} className=" btnadd">Add another work experience</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
export default Workexperience2;