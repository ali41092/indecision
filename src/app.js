class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOptions />
      </div>
    )
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a Computer!</h2>
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
        <ol>
          <li><Option /></li>
          <li>Option 2</li>
        </ol>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>Option Component Here</div>
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