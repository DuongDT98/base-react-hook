/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function FieldInformation({
  title,
  children,
  className,
  style,
  onHiddenForm,
  hiddenForm,
}) {
  return (
    <div className="customFieldInformation2">
      <div
        className="layoutTop"
        style={{ borderBottom: !hiddenForm && "none" }}
        onClick={onHiddenForm}
      >
        <div className="accordian-div">
          <span
            className={hiddenForm ? "accordian-down-arrow" : "accordian-arrow"}
          ></span>
          <a>
            <strong className="title">{title}</strong>
          </a>
        </div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
export default FieldInformation;
