/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from '../Image'

function Breakcum({ src, title, title2, title3, src3 }) {

    return (
        <div className="breakcum rowy-center">
            <Image
                src={src}
                width={24}
                height={24}
                className="mr--5 divImage"
            />
            <div className="mr--10 c-p">{title}</div>
            {title2 && <span className="fs--22 mr--10">{`>`}</span>}
            <div className="mr--10 c-p">{title2}</div>
            {title3 && <span className="fs--22 mr--10">{`>`}</span>}
            {src3 && <Image
                src={src3}
                width={24}
                height={24}
                className="mr--5 divImage"
            />}
            {title3 && <div className="mr--10 c-p">{title3}</div>}
            {title3 && <Image
                src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/button_action_icons/dashboard_settings.png?ver=260RC201"
                width={15}
                height={15}
            />}

        </div>
    );
};
export default Breakcum