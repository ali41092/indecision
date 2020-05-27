'use strict';

var visibility = false;
var appRoot = document.getElementById('app');

var onClickVisible = function onClickVisible() {
    visibility = !visibility;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onClickVisible },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        visibility && React.createElement(
            'p',
            null,
            'This is some text to be hidden and shown'
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
