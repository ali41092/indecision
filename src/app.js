console.log('App.js is running!');

// JSX - JavaScript XML 
var app = {
    title: "Indecision App",
    subtitle: "Put your decisions in the hands of a computer",
    options: []
}
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length > 0 ? "Here are your options" : "No Options"}
    </div>
    );

var user = {
    name: "Ali Zahid",
    age: 26, 
    location: "Islamabad"
};
function getLocation(location){
    if(location)
        return <p>{location}</p>;
    else
        return undefined;
}
var templateTwo = (
    <div>
        <h1>{user.name? user.name: 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p> }
        {getLocation(user.location)}
        
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
