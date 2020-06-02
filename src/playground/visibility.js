class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
        <div>
            <h1>visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details':'Show Details'}</button>
            {this.state.visibility && (<p>This is some text to be hidden and shown</p>)}    
        </div>
        )
    } 
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
