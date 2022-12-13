import React, {createElement as elt} from 'react';

function App() {
  // return (
  //     <h1>Hello React</h1>
  // )
  return elt('div', {className: 'container', key: 1}, [
      elt('h1', {className: 'font-bold', key: 2}, 'HelloReact'),
      elt('button', {className: 'btn', key: 3}, 'Click me!')
  ])
}

export default App;
