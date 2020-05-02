"use strict";

console.log('App.js is running!');

// JSX - JavaScript XML 
var app = {
    title: "Indecision App",
    subtitle: "Put your decisions in the hands of a computer",
    options: []
};
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    app.options.length > 0 ? "Here are your options" : "No Options"
);

var user = {
    name: "Ali Zahid",
    age: 26,
    location: "Islamabad"
};
function getLocation(location) {
    if (location) return React.createElement(
        "p",
        null,
        location
    );else return undefined;
}
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
