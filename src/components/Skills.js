import React, { Component } from 'react'
import '../css/Skills.css'
class Skills extends Component {

    state = {
        items: this.props.items || [],
        showItems: false,
        selectedItem: this.props.items && this.props.items[0],
        ...this.props,

    }

    onChange = (e) => {
        var fieldValue = (e.target.type == "checkbox") ? e.target.checked : e.target.value;
        var fieldName = e.target.name;

        this.setState({
            [fieldName]: fieldValue
        })
    }

    dropDown = () => {
        this.setState(prevState => ({
            showItems: !prevState.showItems,
        }))
    }

    selectItem = (item) => this.setState({
        selectedItem: item,
        showItems: false,
    })
    render() {
        return (
            <div className="experienceform">

                <h5>Skills</h5>
                <form className="formclass">
                    <div className="columns">
                        <div className="form-control1">
                            <label className="worklabel">Skill</label>
                            <input type="text"
                                name="jobtitle"
                                placeholder="e.g. Microsoft Word"
                                onChange={this.onChange}

                            />
                        </div>

                        <div className="form-control1">

                            <div className="select-box--box">
                                <label>Level</label>
                                <div className="select-box--container">

                                    <div className="select-box--selected-item">
                                        {this.state.selectedItem.value}
                                    </div>


                                    <div className="select-box--arrow"
                                        onClick={this.dropDown}>

                                        <span className={`${this.state.showItems ? 'select-box--arrow-up' : 'select-box--arrow-down'}`}></span>

                                    </div>

                                    <div
                                        style={{ display: this.state.showItems ? 'block' : 'none' }}
                                        className="select-box--items">
                                        {

                                            this.state.items.map(item => <div
                                                key={item.id}

                                                onClick={() => this.selectItem(item)}
                                                className={this.state.selectedItem === item ? 'selected' : ''}
                                            >


                                                {item.value}
                                            </div>)
                                        }

                                    </div>


                                </div>
                                <input
                                    type="hidden"
                                    value={this.state.selectedItem.id}
                                    name={this.state.name}></input>
                            </div>
                        </div>


                    </div>
                    <div className="actionbuttons">
                        <button type="button" onClick={this.onSubmit} className="btnclass btnwork">Delete</button>
                        <button type="button" onClick={this.onSubmit} className="btnclass btnwork">save</button>
                    </div>
                </form>

                <div>
                    <form className="formclass1">
                        <button type="button" onClick={(e) => this.addAnotherWorkExperience(e)} className=" btnadd">Add another work experience</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Skills;