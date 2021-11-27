/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from '../Image'

function CardTopOrange({ src, title, children, width }) {

    return (
        <div className="cardTopOrange" style={{ width: width || 'unset' }}>
            <div className="title row-center">
                <Image
                    src={src}
                    width={25}
                    height={25}
                    className="mr--5"
                />
                <span>{title}</span>
            </div>
            {children}
        </div>
    );
};
export default CardTopOrange