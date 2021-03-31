import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../css/Workexperience1.css';
import WorkExperienceDetails from './WorkExperienceDetails';
// import '../css/accordion.css'


class Workexperience1Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobtitle: '',
            city: '',
            Employer: '',
            startDate: new Date(),
            endDate: new Date(),
            description: '',
            // value: [],
            forms: [],
            accordions: this.props.data1

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

    // handleClick = (currentForm) => {
    //     console.log(currentForm);
    // }


    /*accordion*/
    componentDidMount() {
        // const panel = document.querySelector(`.panel-1`);
        // panel.style.maxHeight = panel.scrollHeight + "px";
        this.setPanelHeight(".panel-1", false);
    }

    handleClick = (currentAccordion) => {
        console.log(currentAccordion);
        const newAccordions = this.state.accordions;
        newAccordions.map(accordion => {
            const panel = document.querySelector(`.panel-${accordion.id}`);
            if (currentAccordion.id === accordion.id) {
                accordion.state = "active";
                this.setPanelHeight(`.panel-${accordion.id}`, false);
                // panel.style.maxHeight = panel.scrollHeight + "px";
            }
            else {
                accordion.state = "inactive"
                // panel.style.maxHeight = null;
                this.setPanelHeight(`.panel-${accordion.id}`, true);
            }

            console.log(panel);
        });

        this.setState({ accordions: newAccordions });

    };






    setPanelHeight(selector, close) {
        // const panel = document.querySelector(`.panel-1`);
        const panel = document.querySelector(`${selector}`);
        // panel.style.maxHeight = panel.scrollHeight + "px";
        // panel.style.maxHeight=close === true? null:panel.scrollHeight + "px"
        panel.style.maxHeight = close === true ? null : panel.scrollHeight + "px";
    }
    /*accordion*/

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


    // displayForm() {
    //     const { accordions } = this.state
    //     let forms = [];
    //     for (let i = 0; i < this.state.count; i++) {
    //         // for (let i = 0; i < this.state.accordions.count; i++) {
    //         forms.push(
    //             <div key={i}>
    //                 <WorkExperienceDetails value={this.state.value[i] || ''} />

    //                 {/* <button className="accordion" onClick={() => this.handleClick(WorkExperienceDetails)}>{this.state.title}</button> */}
    //                 {/* <button className="accordion" onClick={() => this.handleClick(accordion)}>{accordion.name}</button> */}
    //                 {/* <h2 className="title">{this.state.title}</h2> */}
    //             </div>

    //         )

    //     }
    //     return forms || null;
    // }


    onSubmit = (e) => {
        e.preventDefault();
        //Submit data to server
    }





    render() {
        const { accordions } = this.state

        return (


            <div className="experienceform" >


                <div >

                    {
                        accordions.map((accordion, index) => {
                            return (
                                <React.Fragment
                                    key={index}>
                                    <button className={`accordion ${accordion.state}`} onClick={() => this.handleClick(accordion)}>{accordion.name}</button>
                                    <div className={`panel panel-${accordion.id}`}>
                                        {accordion.content()}
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }




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
export default Workexperience1Accordion;