# React EssentialRect

A React implementation of the essentialRect responsive display standard. EssentialRectImg is a React component that acts like an `<img/>` element, using the image's essential rectangle to reponsiviely display the image within the client area.

[![EssentialRect Library on NPM](https://img.shields.io/npm/v/react-essentialrect.svg)](https://www.npmjs.com/package/react-essentialrect)

[Quick demo](https://www.essentialrect.com) |
[Code Sandbox](https://codesandbox.io/s/sharp-forest-lm1h2)

## Table of Contents

1. [What is essentiaRect?](#about)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Example](#example)
5. [Props](#props)

## What is essentialRect?

EssentialRect is a standard for responsive image display. Rather than cropping an image to a rectangle of a certain aspect ratio, a rectangle (its essentialRect) is defined for an image as "essential". This allows the image to be shown in a wide range of aspect ratios without cropping or leterboxing. The essentialRect will be guaranteed to be displayed, while the rest of the image will be considered "nice to have", and will be used to fill the remaining client area. The essentialRect will be as centered as possible while still avoiding letterboxing.

## Features

- EssentialRectImg that displays an image based on the client area and essentialRect

## Installation


```
npm i react-essentialrect --save
```

## Usage

There is no default export.  

```js
import { EssentialRectImg } from "react-essentialrect";
import "react-essentialrect/dist/essentialrect-img.css";
```

## Example

```js
import { EssentialRectImg } from "react-essentialrect";
import "react-essentialrect/dist/essentialrect-img.css";

const imageHeight = 300;
const aspectRatio = 1.91;

function App(imageUrl) {
  const imageStyles = {
    width: `${imageHeight * aspectRatio}px`,
    height: `${imageHeight}px`,
  };

  return (
    <div className="App">
      <div className="imageWrapper" style={imageStyles}>
        <EssentialRectImg src={imageUrl} essentialRect={essentialRect} />
      </div>
    </div>
  );
}
```

## Props

#### src (required)

The url for the image.  Can be any url that `<img>` accepts.

#### essentialRect (optional)

A Rect object that defines the essential rectangle for the image.  If not provided, then entire image is considered essential.

