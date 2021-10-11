import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom'; // eslint-disable-line
import { helloWorld } from '../src/index';

console.log(helloWorld())

function App() {
  return <div>Hello world</div>;
}

ReactDOM.render(<App />, document.querySelector('#app'));

