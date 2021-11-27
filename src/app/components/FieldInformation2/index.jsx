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
    <>
      <div className="customFieldInformation2">
        <div className="layoutTop" style={{ borderBottom: !hiddenForm && 'none' }}>
          <div className='accordian-div' onClick={onHiddenForm}>
            <span className="accordian-down-arrow"></span>
            <a>
              <strong>{title}</strong>
            </a>
          </div>
        </div>
        <div className="content">
          {children}
        </div>
      </div>
    </>
  );
}
export default FieldInformation;
