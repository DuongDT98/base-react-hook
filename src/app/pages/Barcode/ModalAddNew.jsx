import React from "react";
import {
    Form, Input, Modal, Select, DatePicker, Button, Checkbox, Row, Col
    // message
} from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'
import OrangeLayoutTableModal from "../../components/OrangeLayoutTableModal";
import Image from '../../components/Image'
import FieldSet from "../../components/FieldSet";
import CustomSearch from "../../components/CustomSearch";

function ModalAddNew(props) {
    const { onCloseModal, visibleModal, recordModal } = props

    return (
        <>
            <Modal
                visible={visibleModal}
                footer={
                    <div className="row-end">
                        <div className="rowy-center">
                            <Button className="btnTextBlack row-center">
                                Save
                            </Button>
                            <Button className="btnTextBlack row-center" onClick={onCloseModal}>
                                Cancel
                            </Button>
                        </div>
                    </div>
                }
                closable={false}
                // centered
                width={1118}
                destroyOnClose
                maskClosable={false}
                bodyStyle={{ position: "relative" }}
                onCancel={onCloseModal}
                className="customModalLab mt--30"
                title={[
                    <div className="row-sb-center">
                        <div className="fs--12">
                            Barcode Template: All
                        </div>
                        <img
                            src="/images/btnX.png" alt=""
                            className="c-p w--24 h--24"
                            onClick={onCloseModal}
                        />
                    </div>
                ]}
            >
                <div>
                    <div className="rowy-center mb--10">
                        <div className="label-input text-black mr--5" style={{ width: '130.27px' }}>Template Name</div>
                        <span className="mr--5">:</span>
                        <Input className="customInput18 w--159" />
                    </div>
                    <div className="rowy-center mb--20">
                        <div className="label-input text-black mr--5" style={{ width: '130.27px' }}>Barcode Generation Mode</div>
                        <span className="mr--5">:</span>
                        <input className="customRadio mr--2" type="radio" id="view-alert" name="ViewAlert" value="ShowAll" defaultChecked />
                        <span className="textBlack mr--30">System Generated Barcode</span>
                        <input className="customRadio mr--2" type="radio" id="view-alert" name="ViewAlert" value="ShowAll" defaultChecked />
                        <span className="textBlack mr--30">External Barcode</span>
                    </div>

                    <div className="modalAddTitlePreview row" style={{ background: '#ffffff', padding: '0' }}>
                        <div style={{ borderRight: '1px solid #cbc4c4', width: '55%', padding: '10px' }}>
                            <div className="rowy-center mb--10">
                                <div style={{ width: '224.47px' }} className="mr--10">
                                    <input className="customRadio mr--2" type="radio" id="view-alert" name="ViewAlert" value="ShowAll" defaultChecked />
                                    <span className="textBlack mr--10">One Dimensional</span>
                                    <Image
                                        src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/example/1D.jpeg?ver=260RC201"
                                        width={30}
                                        height={20}
                                    />
                                </div>
                                <div style={{ width: '224.47px' }} className="mr--10">
                                    <input className="customRadio mr--2" type="radio" id="view-alert" name="ViewAlert" value="ShowAll" defaultChecked />
                                    <span className="textBlack mr--10">Two Dimensional</span>
                                    <Image
                                        src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/example/2D.jpeg?ver=260RC201"
                                        width={20}
                                        height={20}
                                    />
                                </div>
                            </div>
                            <div className="rowy-center mb--10">
                                <div className="label-input text-black mr--5" style={{ width: '224.47px' }}>Symbology</div>
                                <span className="mr--5">:</span>
                                <CustomSearch
                                    width={159}
                                    listDropDowns={[
                                        { label: 'CODE_128', value: 'CODE_128' },
                                    ]}
                                    selectedValue='CODE_128'
                                />
                            </div>
                            <div className="rowy-center mb--10">
                                <div className="label-input text-black mr--5" style={{ width: '278.44px' }}>Select attributes to include in the barcode</div>
                                <span className="mr--5">:</span>
                            </div>

                            <div style={{ minWidth: '50%', maxWidth: '50%' }}>
                                <div className="table-ctn-orange" style={{ maxHeight: '161px' }}>
                                    <table className="customOrangeTable" style={{ width: '100%' }}>
                                        <tr style={{ zIndex: '1' }}>
                                            <th className="w--34">
                                                #
                                            </th>
                                            <th>Attribute Type</th>
                                            <th>Show on Label</th>
                                        </tr>
                                        {[
                                            { type: 'Item ID', checked: true },
                                            { type: 'Item ID [External]', checked: false },
                                            { type: 'Item Name', checked: false },
                                            { type: 'Expiration Date', checked: false },
                                            { type: 'Remind Before Expire (Days)', checked: false },
                                            { type: 'Vendor', checked: false },
                                            { type: 'Custom ID', checked: false },
                                            { type: 'Type', checked: false },
                                            { type: 'Current Quantity', checked: false },
                                            { type: 'Alarm Level', checked: false },
                                        ].map((it, idx) => {
                                            return (
                                                <tr>
                                                    <td className="w--34">
                                                        <div className="rowy-center">
                                                            <span>{idx + 1}</span>
                                                        </div>
                                                    </td>
                                                    <td>{it?.type}</td>
                                                    <td>
                                                        <Checkbox className="customCheckbox" checked={it?.checked} />
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </table>
                                </div>
                            </div>

                            <div className="text-black mt--10" style={{ color: 'blue' }}>
                                <span className="b--500">{`Note: `}</span>Attributes restricted from view are not listed here.
                            </div>
                        </div>

                        <div className="py--10 rowx-center" style={{ width: '45%', maxWidth: '45%' }}>
                            <Button className="btnTextBlack row-center">
                                Preview
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};
export default React.memo(ModalAddNew)