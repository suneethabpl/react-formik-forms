import * as React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class WorkExperienceDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form className="formclass">
                    <div className="columns">
                        <div className="form-control1">
                            <label className="worklabel">Job Title</label>
                            <input type="text"
                                name="jobtitle"
                                onChange={this.onChange}
                                value={this.props.value || ''}
                            />
                        </div>

                        <div className="form-control1">
                            <label className=" worklabel">City</label>
                            <input type="text"
                                name="city"
                                onChange={this.onChange}
                                value={this.props.value || ''}

                            />
                        </div>
                    </div>

                    <div className="form-control1 mleft">
                        <label >Employer</label>
                        <input type="text"
                            name="employer"
                            onChange={this.onChange}
                            value={this.props.value || ''}

                        />
                    </div>

                    <div className="columns rmargin">
                        <div className="form-control1">
                            <label>Start Date</label>
                            <input
                                name="date"
                                id="date"
                                type="date"
                                defaultValue="2017-05-24"
                                onChange={this.handleInputChange}
                                value={this.props.value || ''}

                            />
                        </div>


                        <div className="form-control1 ">
                            <label>End Date</label>
                            <input
                                name="date"
                                id="date"
                                type="date"
                                defaultValue="2017-05-24"
                                onChange={this.handleInputChange}
                                value={this.props.value || ''}
                            />
                        </div>
                    </div>

                    <div className="form-control1">
                        <label>Description</label>
                        <textarea cols="84" rows="7" name="description" onChange={this.onChange}
                            value={this.props.value || ''}
                        >
                        </textarea>
                    </div>

                    <div className="actionbuttons">
                        <button type="button" onClick={this.onSubmit} className="btnclass btnwork">Delete</button>
                        <button type="button" onClick={this.onSubmit} className="btnclass btnwork">save</button>
                    </div>

                </form>

            </div>
        )
    }
}

export default WorkExperienceDetails;