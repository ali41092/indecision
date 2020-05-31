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
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
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
  render() {
    return (
      <div>
        <input type="text" name="option" />
        <button>Add Option</button>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));