/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import CustomSearch from "../CustomSearch";
import Image from '../Image';

function OrangeLayoutTable({ children, width, countFrom, countTo, countTotal, className, selectedValue }) {

    return (
        <div className={`OrangeLayoutTable ${className}`} style={{ width: width || 'unset' }}>
            <div className="top row-sb-center">
                <div className="rowy-center">
                    <span className="text-333333 mr--2">Show</span>
                    <CustomSearch
                        width={48}
                        listDropDowns={[
                            { label: '10', value: 10 },
                            { label: '20', value: 20 },
                            { label: '50', value: 50 },
                            { label: '100', value: 100 },
                            { label: '200', value: 200 },
                            { label: '300', value: 300 },
                            { label: '400', value: 400 },
                            { label: '500', value: 500 },
                            { label: '1000', value: 1000 },
                            { label: '1500', value: 1500 },
                        ]}
                        selectedValue={selectedValue || 50}
                    />
                    <Image
                        src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/button_action_icons/edit_combo_category.gif?ver=260RC201"
                        width={18}
                        height={18}
                    />
                </div>
                <div className="rowy-center">
                    <div className="divButtonPagination row-center disable mr--5">
                        <Image
                            src="/images/icArrowLeft.png"
                            width={16}
                            height={16}
                        />
                    </div>
                    <div className="divButtonPagination row-center">
                        <Image
                            src="/images/icArrowRight.png"
                            width={16}
                            height={16}
                        />
                    </div>
                </div>
            </div>
            {children}
            <div className="top row-sb-center">
                <div className="rowy-center">
                    <span className="text-333333 mr--2">Showing {countFrom || 1} to {countTo || 1} of {countTotal || 1} entries</span>
                </div>
                <div className="rowy-center">
                    <div className="divButtonPagination row-center disable mr--5">
                        <Image
                            src="/images/icArrowLeft.png"
                            width={16}
                            height={16}
                        />
                    </div>
                    <div className="divButtonPagination row-center">
                        <Image
                            src="/images/icArrowRight.png"
                            width={16}
                            height={16}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default OrangeLayoutTable