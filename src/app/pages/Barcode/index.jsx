import React, { useState } from "react";
import Breakcum from '../../components/Breakcum'
import Image from '../../components/Image'
import { Checkbox, Row, Col } from 'antd'
import { withRouter } from "react-router-dom";
import OrangeLayoutTable from '../../components/OrangeLayoutTable'
import CustomSearch from "../../components/CustomSearch";
import ModalAddNew from "./ModalAddNew";

function Barcode({ history }) {
    const [visibleModalAddNew, setVisibleModalAddNew] = useState(false)

    const onOpenModalAddNew = () => {
        setVisibleModalAddNew(true)
    }

    const onCloseModalAddNew = () => {
        setVisibleModalAddNew(false)
    }

    return (
        <div className="px--3">
            <Breakcum
                src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/app_module_icons/app_config_mgmt.png?ver=260RC201"
                title="Application Settings"
                title2="Barcode Template"
            />
            <Row>
                <Col span={12}>
                    <div className="row-sb-center pt--5">
                        <div className="tool-left rowy-center h--33 px--3 mr--80">
                            {/* group1 */}
                            <div className="hover-img-ctn px--4 py--3" onClick={onOpenModalAddNew}>
                                <Image
                                    src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/common_toolbar_icons/add_record.png?ver=260RC201"
                                    width={20} height={20}
                                    title="Add Barcode Template"
                                />
                            </div>
                            <div className="hover-img-ctn px--4 py--3">
                                <Image
                                    src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/common_toolbar_icons/edit_record.png?ver=260RC201"
                                    width={20} height={20}
                                    title="Edit Barcode Template"
                                />
                            </div>
                            <div className="hover-img-ctn px--4 py--3">
                                <Image
                                    src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/common_toolbar_icons/delete_permanently.png?ver=260RC201"
                                    width={20} height={20}
                                    title="Delete Barcode Template"
                                />
                            </div>
                            <div className="hover-img-ctn px--4 py--3">
                                <Image
                                    src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/button_action_icons/barcode_settings.png?ver=260RC201"
                                    width={28} height={20}
                                    title="Barcode Settings"
                                />
                            </div>
                        </div>

                        <div className="rowy-center">
                            <span className="header-text-func mr--5">Module Name:</span>
                            <CustomSearch
                                width={157}
                                listDropDowns={[
                                    { label: 'Lab Inventory', value: "Lab Inventory" },
                                    { label: 'Water', value: "Water" },
                                    { label: 'Solid', value: "Solid" },
                                    { label: 'Oil', value: "Oil" },
                                    { label: 'Pharma 1', value: "Pharma_1" },
                                    { label: 'Meat', value: "Meat" },
                                    { label: 'Seafood', value: "Seafood" },
                                    { label: 'Fish', value: "Fish" },
                                    { label: 'Dye', value: "Dye" },
                                ]}
                                selectedValue={'Lab Inventory'}
                                showSearch
                            />
                        </div>

                        <div className="rowy-center">
                            <div className="rowy-center">
                                <span className="header-text-func mr--5">Type:</span>
                                <CustomSearch
                                    width={157}
                                    listDropDowns={[
                                        { label: 'All', value: "All" },
                                        { label: 'Internal User', value: "Internal User" },
                                        { label: 'HienDucAdmin', value: "HienDucAdmin" },
                                        { label: 'BinhDuc User', value: 'BinhDuc User' },
                                    ]}
                                    selectedValue={'All'}
                                    showSearch
                                />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <div>
                <OrangeLayoutTable
                    isSearchable={false}
                    count={50}
                >
                    <div className="table-ctn-orange">
                        <table className="customOrangeTable" style={{ width: '100%' }}>
                            <tr>
                                <th className="w--34">
                                    <Checkbox
                                        className="customCheckbox"
                                    />
                                </th>
                                <th className="w--66">Template ID</th>
                                <th className="w--60">Template Name</th>
                                <th className="w--71">Barcode Creation Mode</th>
                                <th className="w--99">Barcode Type</th>
                                <th className="w--78">Created By</th>
                                <th className="w--97">Created By (ID)</th>
                                <th className="w--147">Date Created</th>
                            </tr>
                            {[1, 1, 1].map((it, idx) => {
                                return (
                                    <tr>
                                        <td className="w--34">
                                            <div className="rowy-center">
                                                <span>{idx + 1}</span>
                                            </div>
                                        </td>
                                        <td><a>BC_TMPL_5</a></td>
                                        <td>vien hoa</td>
                                        <td>System Generated Barcode</td>
                                        <td>20</td>
                                        <td>Hien Duc</td>
                                        <td>M_ADMIN</td>
                                        <td>20 Sep, 2021</td>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>
                </OrangeLayoutTable>
            </div>

            {visibleModalAddNew && <ModalAddNew
                onCloseModal={onCloseModalAddNew}
                visibleModal={visibleModalAddNew}
            />}
        </div >
    );
};
export default withRouter(Barcode)