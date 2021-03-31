
import React, { Component } from 'react'
import '../css/Profileform.css'


class Profileform extends Component {
    constructor() {
        super();

        this.state = {
            bold: false,
            italized: false,
            underlined: false
        };


        this.onBoldClick = this.onBoldClick.bind(this);
        this.onItalicsClick = this.onItalicsClick.bind(this);
        this.onUnderlineClick = this.onUnderlineClick.bind(this);


        this.inputRef = React.createRef();
        this.outputRef = React.createRef();
    }
    onBoldClick(event) {
        event.target.setAttribute("class", !this.state.bold ? "Selected" : "");

        if (!this.state.bold) {
            this.outputRef.current.innerHTML += "<strong></strong>";
        }
        this.setState({
            bold: !this.state.bold
        });
        this.inputRef.current.focus();
    }


    onItalicsClick(event) {
        event.target.setAttribute("class", !this.state.italized ? "Selected" : "");
    }
    onUnderlineClick(event) {
        event.target.setAttribute("class", !this.state.underlined ? "Selected" : "");
    }

    formatText(text) {
        switch (true) {
            case this.state.bold:
                const allBold = this.outputRef.current.getElementsByTagName("strong");
                const lastBold = allBold[allBold.length - 1];
                lastBold.innerText += text;
                break;
            case this.state.italized:
                const allItalized = this.outputRef.current.getElementsByTagName("em");
                const lastItalized = allItalized[allItalized.length - 1];
                lastItalized.innerText += text;
                break;
            case this.state.underlined:
                const allUnderlined = this.outputRef.current.getElementsByTagName("u");
                const lastUnderlined = allUnderlined[allUnderlined.length - 1];
                lastUnderlined.innerText += text;
                break;
            default:
                this.outputRef.current.innerHTML += text;
                break;
        }
    }

    onInputChange() {
        const input = this.inputRef.current.value;
        const output = this.outputRef.current.innertext;
        if (input.length > output.length) {
            const newText = input.slice(output.length);
            this.formatText(newText);
        }
        else {
            this.transferText();
        }
    }


    transferText() {
        const input = this.inputRef.current.value;
        const output = this.outputRef.current.innerHTML;
        let inputCounter = input.length - 1, outputCounter = output.length - 1, isTag = false;
        while (outputCounter > -1) {
            // If the current character is '>', then we are in a HTML tag. Skip until we get to '<'.
            if (output[outputCounter] === ">") {
                isTag = true;
                outputCounter -= 1;
                continue;
            }
            if (isTag) {
                isTag = output[outputCounter] !== "<";
                outputCounter -= 1;
                continue;
            }
            // If inputCounter <= -1, then there is no more text to add to the output, so break.
            if (inputCounter <= -1) {
                this.outputRef.current.innerHTML = this.outputRef.current.innerHTML.slice(outputCounter + 1);
                break;
            }
            // Otherwise, replace the text in the output with the corresponding text in the text area.
            else {
                let temp = this.outputRef.current.innerHTML;
                temp = temp.slice(0, outputCounter) + input[inputCounter] + temp.slice(outputCounter + 1);
                this.outputRef.current.innerHTML = temp;
                inputCounter -= 1;
                outputCounter -= 1;
            }
        }
    }
    

    render() {
        return (
            <form>
                {/* <h1>profile form</h1> */}
                {/* <h2>Profileform</h2> */}
                
                <div className="Profile experienceform">
                    <header className="Profile-header">
                        <label className="mright">Profileform</label>
                        <div ref={this.outputRef}></div>
                        <span className="Controls">
                            <button className="fontstyles" onClick={this.onBoldClick}><strong>B</strong></button>
                            <button className="fontstyles" onClick={this.onItalicsClick}><em>I</em></button>
                            <button className="fontstyles" onClick={this.onUnderlineClick}><u>U</u></button>
                        </span>
                        {/* <textarea cols="84" rows="7" name="description" onChange={this.onChange} onBlur={this.onBlur} className="form-control mleft"></textarea> */}
                        <textarea rows="5" className="Text" ref={this.inputRef}     onInputChange={this.onInputChange} />
                        <button type="button" onClick={this.onSubmit} className="btnclass">save</button>
                    </header>

                </div>
            </form>
        );
    }

}

export default Profileform;
