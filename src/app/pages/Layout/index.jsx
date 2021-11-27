import React, { useCallback, useState } from "react";
import { Layout, Drawer } from 'antd';
import Header from './Header';
import Footer from './Footer';
import Image from '../../components/Image'
import { useHistory } from 'react-router-dom'

const { Content } = Layout;

function LayoutPage({ children }) {
    const history = useHistory()

    const [visible, setVisible] = useState(false);
    const [active, setActive] = useState('/');

    const onClose = () => {
        setVisible(false);
    };

    const showDrawer = useCallback(() => {
        setVisible(true);
    }, [])

    const gotoPage = useCallback((path) => {
        onClose()
        history.push(path)
        setActive(path)
    }, [history])

    return (
        <>
            <div className="layoutPageCtn">
                <Layout className='layoutPage'>
                    <Header showDrawer={showDrawer} />
                    <Content className="customContent">
                        {children}
                        <Footer />
                    </Content>


                </Layout>
                {/* <Drawer
                    placement="left"
                    visible={visible}
                    width={280}
                    className="drawer"
                    onClose={onClose}
                    mask={true}
                    destroyOnClose={true}
                >
                    <div>
                        <div className="h--39 row-end-center c-p mr--16" onClick={onClose}>
                            X
                        </div>
                        <ul className="drawer-ul">
                            <li className={active === '/' ? 'active' : ''} onClick={() => gotoPage('/')}>
                                <Image src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/app_module_icons/home_page.png?ver=260RC201" width={25} height={25} className="mr--15" />
                                <span className="drawer-text">Home</span>
                            </li>
                            <li className={active === '/samples' ? 'active' : ''} onClick={() => gotoPage('/samples')}>
                                <Image src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/app_module_icons/sample_management.png?ver=260RC201" width={25} height={25} className="mr--15" />
                                <span className="drawer-text">Samples</span>
                            </li>
                            <li className={active === '/storage' ? 'active' : ''} onClick={() => gotoPage('/storage')}>
                                <Image src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/app_module_icons/storage_management.png?ver=260RC201" width={25} height={25} className="mr--15" />
                                <span className="drawer-text">Storage</span>
                            </li>
                            <li className={active === '/test' ? 'active' : ''} onClick={() => gotoPage('/test')}>
                                <Image src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/app_module_icons/test_sample_mgmt.png?ver=260RC201" width={25} height={25} className="mr--15" />
                                <span className="drawer-text">Test</span>
                            </li>
                            <li className={active === '/clients' ? 'active' : ''} onClick={() => gotoPage('/clients')}>
                                <Image src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/app_module_icons/client_management.png?ver=260RC201" width={25} height={25} className="mr--15" />
                                <span className="drawer-text">Client</span>
                            </li>
                            <li className={active === '/services-billing' ? 'active' : ''} onClick={() => gotoPage('/services-billing')}>
                                <Image src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/app_module_icons/request_management.png?ver=260RC201" width={25} height={25} className="mr--15" />
                                <span className="drawer-text">Services & Billing</span>
                            </li>
                            <li className={active === '/chemical-inventory' ? 'active' : ''} onClick={() => gotoPage('/chemical-inventory')}>
                                <a href="https://newtech-software.com/chemical-inventory">
                                    <Image src="/images/icChemical_inventory.png" width={25} height={25} className="mr--15" />
                                    <span className="drawer-text">Chemical inventory</span>
                                </a>
                            </li>
                            <li className={active === '/lab-inventory' ? 'active' : ''} onClick={() => gotoPage('/lab-inventory')}>
                                <Image src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/app_module_icons/inventory_management.png?ver=260RC201" width={25} height={25} className="mr--15" />
                                <span className="drawer-text">Lab inventory</span>
                            </li>
                            <li className={active === '/package-shipment' ? 'active' : ''} onClick={() => gotoPage('/package-shipment')}>
                                <Image src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/app_module_icons/package_management.png?ver=260RC201" width={25} height={25} className="mr--15" />
                                <span className="drawer-text">Package & Shipment</span>
                            </li>
                            <li className={active === '/instrument-calibration-maintenance' ? 'active' : ''} onClick={() => gotoPage('/instrument-calibration-maintenance')}>
                                <Image src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/app_module_icons/instrument_management.png?ver=260RC201" width={25} height={25} className="mr--15" />
                                <span className="drawer-text">Instrument Calibration & Maintenance</span>
                            </li>
                            <li className={active === '/document' ? 'active' : ''} onClick={() => gotoPage('/document')}>
                                <Image src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/app_module_icons/document_management.png?ver=260RC201" width={25} height={25} className="mr--15" />
                                <span className="drawer-text">Documents</span>
                            </li>
                            <li className={active === '/report-management' ? 'active' : ''} onClick={() => gotoPage('/report-management')}>
                                <Image src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/app_module_icons/composite_report.png?ver=260RC201" width={25} height={25} className="mr--15" />
                                <span className="drawer-text">Composite Reports & Advanced Search</span>
                            </li>
                            <li className={active === '/tranings' ? 'active' : ''} onClick={() => gotoPage('/tranings')}>
                                <Image src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/app_module_icons/training_management.png?ver=260RC201" width={25} height={25} className="mr--15" />
                                <span className="drawer-text">Trainings</span>
                            </li>
                        </ul>
                    </div>
                </Drawer> */}
            </div>
        </>
    );
};
export default LayoutPage