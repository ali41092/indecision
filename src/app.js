console.log('App.js is running!');

// JSX - JavaScript XML 
var app = {
    title: "Indecision App",
    subtitle: "Put your decisions in the hands of a computer"
}
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
    );

var username = "Ali Zahid Shahab"
var templateTwo = (
    <div>
        <h1>{username}</h1>
        <p>Age: 26</p>
        <p>Location: Philadelphia</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
