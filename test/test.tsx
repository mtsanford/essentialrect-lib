import { CSSProperties } from "react";
import ReactDOM from "react-dom";
import { EssentialRectImg, Rect } from "../src/index";

import "../src/essentialrect-img.css";

// total area of client
const T = 240 * 240;

const aspectRatios: number[] = [1 / 3, 1 / 2, 1 / 1.5, 1, 1.5, 2, 3];

// make client rect consistent area
const viewStyles: CSSProperties[] = aspectRatios.map((A: number) => {
  const h = Math.pow(T / A, 0.5);
  const w = Math.pow(T * A, 0.5);
  return {
    width: `${w}px`,
    height: `${h}px`,
  };
});

const essentialRect: Rect = {
  left: 858,
  top: 0,
  width: 649,
  height: 942,
};

function App() {
  return (
    <div className="App">
      {viewStyles.map((s: CSSProperties, i: number) => (
        <EssentialRectImg
          src="./sax.jpg"
          className="imageWrapper"
          essentialRect={essentialRect}
          style={s}
          key={aspectRatios[i]}
          showIcon={true}
        />
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
