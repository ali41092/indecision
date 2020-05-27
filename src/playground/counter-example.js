let count = 0;
const addOne = () => {
  count +=1;
  renderCounterApp();
  
}
const minusOne = () => {
  count -= 1;
  renderCounterApp();
}
const resetAll = () => {
  count = 0;
  renderCounterApp()
}

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button id="my-id" onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetAll}>Reset</button>
    </div>
  )
  ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
