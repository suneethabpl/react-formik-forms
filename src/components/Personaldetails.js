import React, { Component } from 'react'
import '../css/Personaldetails.css'

class Personaldetails extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            surname: '',
            email: '',
            phonenumber: '',
            address: '',
            city: '',
            postcode: '',
            touched: {
                name: false,
                surname: false,
                email: false,
                phonenumber: false,
                address: false,
                city: false,
                postcode: false

            }
        }
    }
    onChange = (e) => {
        var fieldValue = (e.target.type == "checkbox") ? e.target.checked : e.target.value;
        var fieldName = e.target.name;


        this.setState({
            [fieldName]: fieldValue
        })
    }

    onBlur = (e) => {
        var fieldName = e.target.name;
        var touched = Object.assign({}, this.state.touched)

        touched[fieldName] = true;
        this.setState({
            touched: touched
        })
    }

    isValidEmail = (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }
        return false;
    }

    validate = () => {
        var errors = {};
        if (this.state.name == "") {
            errors.name = "Name is required"
        }
        if (this.state.surname == "") {
            errors.surname = "Surname is required"
        }

        if (this.state.email == "") {
            errors.email = "Email is required"
        }

        if (this.state.phonenumber == "") {
            errors.phonenumber = "Phonenumber is required"
        }
        if (this.state.address == "") {
            errors.address = "Address is required"
        }
        if (this.state.city == "") {
            errors.city = "City is required"
        }
        if (this.state.postcode == "") {
            errors.postcode = "Postcode is required"
        }

        else if (!this.isValidEmail(this.state.email)) {
            errors.email = "Invalid email address"
        }

        return {
            errors,
            isValid: Object.keys(errors).length == 0 ? true : false
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        var { errors, isValid } = this.validate();
        var { touched } = this.state;
        return (
            <div className="experienceform">
                <h5>Personal Details</h5>
                <form className="formclass">
                    <div className="form-control1 lmargin">
                        <label htmlFor='name' className="h6">Firstname</label>
                        <input type="text" name="name" onChange={this.onChange} onBlur={this.onBlur} id='name' placeholder='Enter name' className={`form-control ${(touched.name) && errors.name ? 'is-invalid' : ''}`} />
                        {
                            (touched.name) && (errors.name) && <div className='invalid-feedback'>{errors.name}</div>
                        }
                    </div>

                    <div className="form-control1 lmargin">
                        <label className="h6">Surname</label>
                        <input type="text" name="surname" onChange={this.onChange} onBlur={this.onBlur} placeholder='Enter surname' className={`form-control ${(touched.surname) && errors.surname ? 'is-invalid' : ''}`} />
                        {
                            (touched.surname) && (errors.email) && <div><span className="errors">{errors.surname}</span></div>
                        }
                    </div>

                    <div className="columns">
                        <div className="form-control1">
                            <label className="h6">Email address</label>
                            <input type="text" name="email" onChange={this.onChange} onBlur={this.onBlur} placeholder='Enter email address' className={`form-control ${(touched.email) && errors.email ? 'is-invalid' : ''}`} />
                            {
                                (touched.email) && (errors.email) && <div><span className="errors">{errors.email}</span></div>
                            }
                        </div>


                        <div className="form-control1">
                            <label className="h6">Phonenumber</label>
                            <input type="number" name="phonenumber" onChange={this.onChange} onBlur={this.onBlur} placeholder='Enter phonenumber' className="form-control" />
                        </div>
                    </div>

                    <div className="form-control1">
                        <label className="h6">Address</label>
                        <input type="text" name="email" onChange={this.onChange} onBlur={this.onBlur} placeholder='Enter address' className="form-control" />
                    </div>

                    <div className="columns">
                        <div className="form-control1">
                            <label className="h6">City</label>
                            <input type="text" name="email" onChange={this.onChange} onBlur={this.onBlur} placeholder='Enter city' className="form-control" />
                        </div>



                        <div className="form-control1">
                            <label className="h6">Postcode</label>
                            <input type="text" name="postcode" onChange={this.onChange} onBlur={this.onBlur} placeholder='Enter postcode' className="form-control" />
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}
export default Personaldetails;