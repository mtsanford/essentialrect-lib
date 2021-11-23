import React, { CSSProperties } from "react";

import { fitRect } from "./fit-essential-rect";
import { useClientRect } from "./use-client-rect";
import { Rect, rectEmpty } from "./Rect";
import { useImageRect } from "./use-image-rect";

const erIconDefaultStyles: CSSProperties = {
  backgroundColor: "red",
  zIndex: 10,
  position: "absolute",
};

export const EssentialRectImg: React.FC<{
  src: string;
  essentialRect?: Rect;
  className?: string;
  style?: CSSProperties;
  imageStyle?: CSSProperties;
  alt?: string;
  showIcon?: boolean;
}> = ({ src, essentialRect, className, style, imageStyle, alt, showIcon }) => {
  let icon;
  let wrapperStyles: CSSProperties = { display: "none" };
  const [imageRef, imageRect, onImageLoad] = useImageRect();
  const [containerRef, containerRect] = useClientRect();

  const iconSize = Math.max(containerRect.width, containerRect.height) * 0.03;
  const iconMargin = iconSize * 0.5;

  if (showIcon) {
    const erIconStyles = {
      ...erIconDefaultStyles,
      top: `${iconMargin}px`,
      left: `${iconMargin}px`,
      width: `${iconSize}px`,
      height: `${iconSize * 0.4}px`,
      border: `solid black ${iconSize * 0.08}px`,
    };
    icon = <div style={erIconStyles} />;
  }

  if (imageRect && !rectEmpty(containerRect)) {
    if (!essentialRect) {
      essentialRect = imageRect;
    }
    const renderedImageRect = fitRect(imageRect, essentialRect, containerRect);

    wrapperStyles = {
      left: `${renderedImageRect.left}px`,
      top: `${renderedImageRect.top}px`,
      width: `${renderedImageRect.width}px`,
      height: `${renderedImageRect.height}px`,
    };
  }

  const classes = `EssentialRectImg ${className}`;

  return (
    <div className={classes} style={style} ref={containerRef}>
      {icon}
      <div style={wrapperStyles}>
        <img
          src={src}
          style={imageStyle}
          alt={alt || ""}
          ref={imageRef}
          onLoad={onImageLoad}
        />
      </div>
    </div>
  );
};
