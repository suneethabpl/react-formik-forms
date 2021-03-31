import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../css/Workexperience1.css';
import WorkExperienceDetails from './WorkExperienceDetails';

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

    componentDidMount() {
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
            }
            else {
                accordion.state = "inactive"
                this.setPanelHeight(`.panel-${accordion.id}`, true);
            }

            console.log(panel);
        });

        this.setState({ accordions: newAccordions });

    };


    setPanelHeight(selector, close) {
        const panel = document.querySelector(`${selector}`);
        panel.style.maxHeight = close === true ? null : panel.scrollHeight + "px";
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

    onSubmit = (e) => {
        e.preventDefault();
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
                    <div>
                        <h5>Work experience</h5>
                        <form className="formclass1">
                            <button type="button" onClick={(e) => this.addAnotherWorkExperience(e)} className=" btnadd">Add another work experience</button>
                        </form>
                    </div>

                </div>
            </div>

        )
    }
}
export default Workexperience1Accordion;