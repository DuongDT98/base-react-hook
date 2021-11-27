/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "../Image";

function FieldSet({ title, children, className, className_legend, style }) {
  return (
    <fieldset className={`customFieldSet ${className}`} style={style}>
      <legend
        className={`highlight-fieldset-title mb--13  ${className_legend}`}
      >
        <strong>{title}</strong>
      </legend>
      {children}
    </fieldset>
  );
}
export default FieldSet;
