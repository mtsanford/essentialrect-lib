# EssentialRect Library

An React implementation of the essentialRect responsive display standard. EssentialRectImg acts like a '<img/>' element, using images essential rectangle to reponsiviely display the image within the client area. EssentialRectEditor is a React component that allows selection of an essential rectangle, optionally contraining to allow letterbox-free display within a range of aspect ratios. EssentialRectEditor uses the react-image-crop module as a dependency.

[Learn more about react-image-crop here](https://github.com/DominicTobias/react-image-crop)

[![EssentialRect Library on NPM](https://img.shields.io/npm/v/essentialrect-lib.svg)](https://www.npmjs.com/package/essentialrect-lib)

[Quick demo for mobile](https://www.essentialrect.com) |
[EssentalRect Editor demo](https://tool.essentialrect.com)

## Table of Contents

1. [What is essentiaRect](#about)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Example](#example)
6. [Props](#props)

## What is essentialRect

EssentialRect is a standard for responsive image display. Rather than cropping an image to a rectangle of a certain aspect ratio, a rectangle is defined for an image as "essential", it's essentialRect. This allows the image to be shown in a wide range of aspect ratios without cropping or leterboxing. The essentialRect will be guaranteed to be displayed, while the rest of the image will be considered "nice to have", and will be used to fill the remaining client area. The essentialRect will be as centered as possible while still avoiding letterboxing.

## Features

- EssentialRectImg that displays an image based on the client area and essentialRect
- EseentialRectEditor that allows editing of an essentialrect.

## Installation

```
npm i essential-rect --save
```

## Usage

There is no default import.  For image diplay:

```js
import { EssentialRectImg } from "essentialrect-lib";
```

For essentialRect editing of an image:

```js
import { EssentialRectEditor } from "essentialrect-lib";
```

Always include `dist/essential-rect-img.css` for styles.

All rectangles use a Rect interface, so it may be useful to import it.

```js
import { Rect } from "essentialrect-lib";
```

## Example

```js
import { EssentialRectImg } from "../src/index";
import { EssentialRectEditor, Rect } from "../src/index";

import "react-image-crop/dist/ReactCrop.css";

const imageHeight = 300;
const aspectRatio = 1.91;
const editorSize = 300;

function App(imageUrl) {
  const [essentialRect, setEssentialRect] = useState();

  const onEssentialRectChange = (r: Rect): void => {
    setEssentialRect(r);
  };

  const imageStyles = {
    width: `${imageHeight * aspectRatio}px`,
    height: `${imageHeight}px`,
  };

  const editorStyles = {
    width: `${editorSize}px`,
    height: `${editorSize}px`,
  };

  return (
    <div className="App">
      <div className="editorWrapper" style={imageStyles}>
        <EssentialRectEditor
          imageUrl={imageUrl}
          essentialRect={essentialRect}
          onEssentialRectChange={onEssentialRectChange}
        />
      </div>
      <div className="imageWrapper" style={editorStyles}>
        <EssentialRectImg src={imageUrl} essentialRect={essentialRect} />
      </div>
    </div>
  );
}
```

## Props

### EssentialRectImg

#### src (required)

The url for the image.  Can be any url that `<img>` accepts.

#### essentialRect (optional)

A Rect object that defines the essential rectangle for the image.  If not provided, then entire image is considered essential.

### EssentialRectEditor

#### imageUrl (required)

The url for the image.  Can be any url that `<img>` accepts.

#### essentialRect (optional)

A Rect object that defines the essential rectangle for the image.  If not provided, it will be set to the the rectangle of the entire image, or a centered rectangle that is contrained by minAspectRatio and/or maxAspectRatio.

#### onEssentialRectChange (optional)

The parent component should maintain the update of the essentialRect in this callback.  Without this callback provided, the editor will not function.

#### minAspectRatio (optional)

Specify that if the aspect ratio the image is displayed in is above minAspectRatio, it should not be letterboxed.  The contrains the width of the essentialRect.

#### maxAspectRatio (optional)

Specify that if the aspect ratio the image is displayed in is below maxAspectRatio, it should not be letterboxed.  The contrains the height of the essentialRect.

#### onImageError (optional)

Callback if the image fails to load

#### onImageLoaded (optional)

Callback when the image successfully loads, passing the loaded HTMLImageElement as a parameter.

