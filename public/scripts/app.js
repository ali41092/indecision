"use strict";

console.log('App.js is running!');

// JSX - JavaScript XML 
var app = {
    title: "Indecision App",
    subtitle: "Put your decisions in the hands of a computer"
};
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

var username = "Ali Zahid Shahab";
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        username
    ),
    React.createElement(
        "p",
        null,
        "Age: 26"
    ),
    React.createElement(
        "p",
        null,
        "Location: Philadelphia"
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
