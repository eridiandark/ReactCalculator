let ReactDOM = require('react-dom');
let React = require('react');
let Calculator = require('./components/calculator/scripts/calculator.jsx');

ReactDOM.render(
    <Calculator onSave={ value => alert('Saved ' + value) }/>,
    document.getElementById("app")
);