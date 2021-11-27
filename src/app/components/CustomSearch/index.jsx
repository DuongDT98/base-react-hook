/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { useCallback, useState } from "react";
import Image from '../Image'
import { Input } from 'antd'
import { Popover } from 'react-tiny-popover';


function CustomSearch({ width, selectedValue = 50, listDropDowns = [], showSearch, className, onChange, disabled }) {
    const [visible, setVisible] = useState(false)

    const renderListDropDown = useCallback(() => {
        return listDropDowns?.length > 0
            ? listDropDowns.map((it, idx) => {
                return <div
                    onClick={() => {
                        if (onChange) {
                            onChange(it)
                        }
                        setVisible(false)
                    }}
                    className={`text-black c-p pg--6 customSelectDropDownItems ${it.value === selectedValue && 'selected'} ${it?.disabled && 'disabled'}`}
                    key={`itemsssss_${idx}`}
                    style={{
                        width: width - 2
                    }}
                >{it.label}</div>
            })
            : <div className="text-center text-black" style={{ width: width || 48 }}>No Data!</div>
    }, [listDropDowns, onChange, selectedValue, width])

    return (
        <Popover
            isOpen={visible}
            positions={['bottom']} // preferred positions by priority
            content={disabled
                ? null
                : <div className="dropdownCustomSelect" style={{ width }}>
                    {showSearch && <Input
                        className="dropdownCustomSelectSearch mx--4"
                        style={{ width: Number(width) - 10 || 40 }}
                    />}
                    <div className="customSelectDropDownMaxHeight">
                        {renderListDropDown()}
                    </div>
                </div>
            }
            onClickOutside={() => setVisible(false)}
        >
            <div
                className={`h--18 row-sb-center customSelectCtn ${className} ${disabled && 'disabled'}`}
                onClick={() => setVisible(true)}
                style={{ width: width || 50 }}
            >
                <div className="text-black cp cutString">{selectedValue}</div>
                <Image
                    src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/info_icons/dropdown.png?ver=260RC201"
                    width={16}
                    height={16}
                />
            </div>
        </Popover>

    );
};
export default React.memo(CustomSearch)