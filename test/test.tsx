import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom'; // eslint-disable-line
import { EssentialRectImg } from '../src/index';
import '../src/essential-rect-img.css';

const wrapperStyles = {
  width: '200px',
  height: '200px',
};

function App() {
  return <div style={wrapperStyles}>
    <EssentialRectImg
      src="./sax.jpg"
      essentialRect={{left:858, top:0, width:649, height:942}}
    />
  </div>;
}

ReactDOM.render(<App />, document.querySelector('#app'));

