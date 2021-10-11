import React, { useCallback, useState, CSSProperties } from 'react';
import ReactDOM from 'react-dom'; // eslint-disable-line
import { EssentialRectImg } from '../src/index';
import '../src/essential-rect-img.css';

// total width + height
const T = 200 * 200;

const aspectRatios: number[] = [ 1/3, 1/2, 1/1.5, 1, 1.5, 2, 3];

const viewStyles: CSSProperties[] = aspectRatios.map( (A: number) => {
   const h = Math.pow(T/A, 0.5);
   const w = Math.pow(T*A, 0.5);
   return {
    width: `${w}px`,
    height: `${h}px`,
   }
});

function App() {

  return (
    <div>
      { viewStyles.map((s: CSSProperties) => (
        <div className="imageWrapper" style={s}>
          <EssentialRectImg
            src="./sax.jpg"
            essentialRect={{left:858, top:0, width:649, height:942}}
          />
        </div>
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));

