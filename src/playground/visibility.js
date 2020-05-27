let visibility = false;
const appRoot = document.getElementById('app');

const onClickVisible = () => {
    visibility = !visibility;
    render();

}

const render = () => {
const template = (
    <div>
        <h1>visibility Toggle</h1>
        <button onClick={onClickVisible}>{visibility ? 'Hide Details':'Show Details'}</button>
        {visibility && (<p>This is some text to be hidden and shown</p>)}
        
    </div>
)
ReactDOM.render(template, appRoot);
}


render();

