class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a Computer!'
    const options = ['Option 1', 'Option 2', 'Option 3', ['Option 4']]
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options option={options} />
        <AddOptions />
      </div>
    )
  }
}
class Header extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick() {
    alert("Handle Click")
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  removeAll() {
    alert("Remove all");
  }
  render() {
    return (
      <div>
          <button onClick={this.removeAll}>Remove All</button>
          {this.props.option.map((option) => <Option key={option} optionText={option} />)}
      </div>
    )
  }
} 

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}

class AddOptions extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if(option){alert(option);}
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
        </form>
        
        
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));