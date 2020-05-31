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
          <li>Option 1</li>
          <li>Option 2</li>
        </ol>
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
const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOptions />
  </div>
)
ReactDOM.render(jsx, document.getElementById('app'));