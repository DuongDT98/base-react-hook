/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Image({ width, height, minHeight, maxHeight, minWidth, maxWidth, onClick, src, className, title, objectFit, style }) {

    return (
        <img src={src} alt="image-error"
            className={`c-p ${className}`}
            style={{
                ...style,
                width: width || 'auto',
                height: height || 'auto',
                minHeight,
                maxHeight,
                minWidth,
                maxWidth,
                objectFit,
            }}
            title={title}
            onClick={onClick}
        />
    );
};
export default Image