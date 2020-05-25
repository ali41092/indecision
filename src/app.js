console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);
let count = 0;
const addOne = () => {
  count +=1;
  console.log('addOne!' + count)
  
}
const minusOne = () => {
  console.log(count)
  count -= 1;
}
const resetAll = () => {
  count = 0;
  console.log(count);
}
const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button id="my-id" onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={resetAll}>Reset</button>
  </div>
)
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
