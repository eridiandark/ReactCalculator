let React = require('react');
/*let SaveIcon = require('../inc/floppy-disk.svg');*/

//props.onSave - event function button "calc_save".
//Takes a calculator response as a parameter
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0, operator: "+", answer: 0 };
        this.press = this.press.bind(this);
        this.xChange = this.xChange.bind(this);
        this.yChange = this.yChange.bind(this);
        this.operatorChange = this.operatorChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    press() {
        switch (this.state.operator) {
            case "+":
                this.setState({
                    answer: parseFloat(this.state.x) + parseFloat(this.state.y),
                });
                break;
            case "-":
                this.setState({
                    answer: parseFloat(this.state.x) - parseFloat(this.state.y),
                });
                break;
            case "*":
                this.setState({
                    answer: parseFloat(this.state.x) * parseFloat(this.state.y),
                });
                break;
            case "/":
                if (this.state.y != 0)
                    this.setState({
                        answer: parseFloat(this.state.x) / parseFloat(this.state.y),
                    });
                else this.setState({ answer: "no valid" });
        }
    }

    xChange(e) {
        this.state.x = e.target.value;
    }

    yChange(e) {
        this.state.y = e.target.value;
    }

    operatorChange(e) {
        this.state.operator = e.target.value;
    }

    onSave(){
        this.props.onSave(this.state.answer);
    }

    render() {
        return (
            <div className={"calculator"}>
                <input type="number" onChange={this.xChange} />
                <select onChange={this.operatorChange}>
                    <option>+</option>
                    <option>-</option>
                    <option>/</option>
                    <option>*</option>
                </select>
                <input type="number" onChange={this.yChange} />
                <button onClick={this.press}>=</button>
                <span>{this.state.answer}</span>
                <button className={"calc_save"} onClick={this.onSave}><img src={"public/inc/floppy-disk.svg"}/></button>
            </div>
        );
    }
}

module.exports = Calculator;