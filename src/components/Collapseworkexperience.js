import React from 'react'
import '../css/Collapseworkexperience.css'
import '../css/Workexperience1.css';
import WorkExperienceDetails from './WorkExperienceDetails';
class Collapseworkexperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forms: [],
            items: [
                {
                    id: 0,
                    isCollapsed: true,
                    isAriaExpanded: false,
                    isHidden: true,
                    title: 'Work experience',
                    content: <WorkExperienceDetails />
                },

            ]
        };
        this.handleClick = this.handleClick.bind(this);
    }

    addAnotherWorkExperience() {
        this.setState({ forms: [...this.state.forms, ""] })
    }

    handleAddChange(e, index) {
        this.state.forms[index] = e.target.value;
        this.setState({ forms: this.state.forms })

    }

    handleClick(e, id) {
        const itemIndex = this.state.items.findIndex(i => i.id === id);
        const item = { ...this.state.items[itemIndex] };
        const items = [...this.state.items];

        item.isCollapsed = !this.state.items[itemIndex].isCollapsed;
        item.isAriaExpanded = !this.state.items[itemIndex].isAriaExpanded;
        item.isHidden = !this.state.items[itemIndex].isHidden;

        items[itemIndex] = item;
        // Need to manage state based on which 'elem' triggered event?
        this.setState({ items: items });
    }

    render() {
        const items = this.state.items;
        return (
            <div className="experienceform" >
                <div className="accordion">
                    {items.map(item =>

                        <AccordionItem
                            key={item.id}
                            item={item}
                            ariaExpanded={items[item.id].isAriaExpanded}
                            collapsed={items[item.id].isCollapsed}
                            hidden={items[item.id].isHidden}
                            expand={this.handleClick}
                        />
                    )}
                </div>

                {
                    this.state.forms.map((form, index) => {
                        console.log(index);
                        return (
                            <div key={index} >

                                <WorkExperienceDetails onChange={(e) => this.handleAddChange(e, index)} value={form} />
                            </div>

                        )
                    })

                }
             
                        <form className="formclass1">
                            <button type="button" onClick={(e) => this.addAnotherWorkExperience(e)} className=" btnadd">Add another work experience</button>
                        </form>
                  
            </div>
        );
    }
}

const AccordionItem = ({ ...props }) => {
    const { item, ariaExpanded, collapsed, hidden, expand } = props;
    return (
        <div>
            <h2 className="accordion-title">
                <button
                    className="accordion-btn"
                    id={item.id}
                    aria-expanded={ariaExpanded}
                    onClick={(e) => expand(e, item.id)}>
                    <span className="accessibility">{collapsed ? 'expand' : 'collapse'}</span>
                    <span className="accordion-icon" aria-hidden="true">{collapsed ? '+' : '-'}</span>
                    {item.title} {item.id}
                </button>
            </h2>
            <div className="accordion-content" hidden={hidden}>

                <p>Content {item.id}: {item.content}</p>

            </div>
        </div>
    );
}
export default Collapseworkexperience