import React, { useCallback } from "react";
import { Popover } from "antd";
import Image from '../../components/Image'
import { useHistory } from 'react-router-dom'

function ApplicationSetting(props) {
    const history = useHistory()

    const gotoPage = useCallback((path) => {
        history.push(path)
    }, [history])

    const content = (
        <>
            <div className="d-flex">
                <div className="menu-box" onClick={() => gotoPage('/email-notification')}>
                    <div className="column item-center">
                        <Image
                            src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/app_module_icons/email_notifications.png?ver=260RC201"
                            width={35}
                            height={35}
                        />
                        <div>Email Notifications</div>
                    </div>
                </div>
                <div className="menu-box" onClick={() => gotoPage('/form-config')}>
                    <div className="column item-center">
                        <Image
                            src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/app_module_icons/form_configuration.png?ver=260RC201"
                            width={35}
                            height={35}
                        />
                        <div>Form Configurations</div>
                    </div>
                </div>
                <div className="menu-box" onClick={() => gotoPage('/barcode')}>
                    <div className="column item-center">
                        <Image
                            src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/app_module_icons/barcode_template.png?ver=260RC201"
                            width={35}
                            height={35}
                        />
                        <div> Barcode Template</div>
                    </div>
                </div>
            </div>

            <div className="d-flex">
                <div className="menu-box" onClick={() => gotoPage('/digital-signature')}>
                    <div className="column item-center">
                        <Image
                            src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/app_module_icons/digital_signature.png?ver=260RC201"
                            width={35}
                            height={35}
                        />
                        <div>Digital Signature</div>
                    </div>
                </div>
                <div className="menu-box" onClick={() => gotoPage('/miscellaneous')}>
                    <div className="column item-center">
                        <Image
                            src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/app_module_icons/miscellaneous.png?ver=260RC201"
                            width={35}
                            height={35}
                        />
                        <div>Miscellaneous</div>
                    </div>
                </div>

                <div className="menu-box" onClick={() => gotoPage('/label-design')}>
                    <div className="column item-center">
                        <Image
                            src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/app_module_icons/label_design.png?ver=260RC201"
                            width={35}
                            height={35}
                        />
                        <div>Label Design</div>
                    </div>
                </div>
            </div>


            <div className="d-flex">
                <div className="w--130"></div>
                <div className="menu-box" onClick={() => gotoPage('/staff-account')}>
                    <div className="column item-center">
                        <Image
                            src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/app_module_icons/user_accounts.png?ver=260RC201"
                            width={35}
                            height={35}
                        />
                        <div>Users/Staff Accounts</div>
                    </div>
                </div>
                <div className="w--130"></div>
            </div>

        </>
    );

    return (
        <Popover
            content={content}
            title=""
            trigger="hover"
            overlayClassName="ApplicationSetting"
            placement="bottomRight"
        >
            <div className="mr--22 row-center" >
                <Image
                    src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/app_module_icons/app_config_mgmt_gear.png?ver=260RC201"
                    width={22}
                    height={22}
                />
            </div>
        </Popover>

    );
};
export default React.memo(ApplicationSetting)