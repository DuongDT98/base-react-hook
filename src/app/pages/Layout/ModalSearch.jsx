import React from "react";
import {
  Modal,
  Button,
  Checkbox,
  Input,
} from "antd";
import CustomSearch from "../../components/CustomSearch";
import Image from "../../components/Image";

function ModalSearch(props) {
  const { onCloseModal, visibleModal } = props;

  return (
    <Modal
      visible={visibleModal}
      footer={
        <div className="row-end">
          <div className="rowy-center">
            <Button className="btnTextBlack row-center" onClick={onCloseModal}>
              Search
            </Button>
            <Button className="btnTextBlack row-center" onClick={onCloseModal}>
              Reset
            </Button>
          </div>
        </div>
      }
      closable={false}
      // centered
      width={837.5}
      destroyOnClose
      maskClosable={false}
      bodyStyle={{ position: "relative" }}
      onCancel={onCloseModal}
      className="customModalSearch"
      title={[
        <div className="row-sb-center">
          <div></div>
          <div className="rowy-center">
            <Image
              src="https://cloudlims.com/CloudLIMSAppNewTech/resources/images/info_icons/context_search.png?ver=260RC201"
              width={24}
              height={24}
              className="mr--3"
            />
            <span className="fs--16 b--500 "> Context Search...</span>
          </div>
          <span className="customButtonX" onClick={onCloseModal}>×</span>
        </div>,
      ]}
    >
      <div>
        <div className="row-sb-center mt--15">
          <div className="rowy-center">
            <span className="text-black b--500 mr--5">Module Name:</span>
            <CustomSearch
              width={157}
              listDropDowns={[
                { label: 'Clients', value: 'Clients' },
                { label: 'Instrument Calibration & Maintenance', value: 'Instrument' },
                { label: 'Lab Inventory', value: 'Lab Inventory' },
                { label: 'Package & Shipment', value: 'Package & Shipment' },
                { label: 'Services & Billing', value: 'Services & Billing' },
                { label: 'Samples', value: 'Samples' },
                { label: 'Storage', value: 'Storage' },
                { label: 'Test', value: 'Test' },
                { label: 'Trainings', value: 'Trainings' },
              ]}
              selectedValue='Clients'
            />
          </div>

          <div className="rowy-center">
            <span className="text-black b--500 mr--5">Type:</span>
            <CustomSearch
              width={157}
              listDropDowns={[
                { label: 'Agent', value: 'Agent' },
                { label: 'All', value: 'All' },
                { label: 'Ca Nhan', value: 'Ca Nhan' },
                { label: 'Demo', value: 'Demo' },
                { label: 'Dietary Supplements Manufacturer', value: 'Dietary Supplements Manufacturer' },
                { label: 'Herbal Products Manufacturers', value: 'Herbal Products Manufacturers' },
                { label: 'KH', value: 'KH' },
                { label: 'Khach Hang Moi Truong', value: 'Khach Hang Moi Truong' },
                { label: 'phong TN Dich Vu', value: 'phong TN Dich Vu' },
              ]}
              selectedValue='Agent'
              showSearch
            />
          </div>

          <div className="rowy-center">
            <Checkbox className="customCheckbox h--auto w-auto" style={{ marginBottom: '13px' }}> Search for Multiple Values  </Checkbox>
          </div>

          <div className="rowy-center">
            <span className="text-black b--500 mr--5">Delimiter:</span>
            <CustomSearch
              width={157}
              listDropDowns={[
                { label: 'Comma', value: 'Comma' },
              ]}
              selectedValue='Comma'
              showSearch
              disabled
            />
          </div>

        </div>

        <div className="mt--10">
          <div className="table-ctn-orange">
            <table className="customOrangeTable" style={{ width: '100%' }}>
              <tr>
                <th className="w--40">
                  Select
                </th>
                <th>Join With</th>
                <th>Attribute Name</th>
                <th>Condition</th>
                <th>Search Value</th>
              </tr>
              {[1, 1, 1, 1, 1].map((it, idx) => {
                return (
                  <tr style={{ background: '#ffffff' }}>
                    <td className="td-center w--40">
                      <Checkbox
                        className="customCheckbox"
                      />
                    </td>

                    <td>
                      {idx !== 0 && idx !== 4 && <CustomSearch
                        width={155}
                        listDropDowns={[
                          { label: 'AND', value: 'AND' },
                          { label: 'OR', value: 'OR' },
                        ]}
                        selectedValue='AND'
                        disabled
                        showSearch
                      />}
                      {idx === 4 && <span className="text-black">Arrange Results By:</span>}
                    </td>

                    <td>
                      <CustomSearch
                        width={155}
                        listDropDowns={[
                          { label: 'Account', value: 'Account' },
                          { label: 'Address', value: 'Address' },
                          { label: 'Alternate Email', value: 'Alternate Email' },
                          { label: 'Associated Emails', value: 'Associated Emails' },
                          { label: 'Associated Requests', value: 'Associated Requests' },
                          { label: 'Associated Sample Count', value: 'Associated Sample Count' },
                          { label: 'Associated Samples', value: 'Associated Samples' },
                          { label: 'Associated Subject Count', value: 'Associated Subject Count' },
                          { label: 'Associated Subjects', value: 'Associated Subjects' },
                          { label: 'Bill To', value: 'Bill To' },
                          { label: 'City', value: 'City' },
                          { label: 'Client ID', value: 'Client ID' },
                          { label: 'Client ID [External]', value: 'Client ID [External]' },
                          { label: 'Country', value: 'Country' },
                          { label: 'Email', value: 'Email' },
                          { label: 'Entry Date', value: 'Entry Date' },
                          { label: 'Facility ID [External]', value: 'Facility ID [External]' },
                          { label: 'Facility Name', value: 'Facility Name' },
                          { label: 'First Name', value: 'First Name' },
                          { label: 'Full Name', value: 'Full Name' },
                        ]}
                        selectedValue='Account'
                        disabled
                        showSearch
                      />
                    </td>

                    <td>
                      {idx !== 4 && <CustomSearch
                        width={155}
                        listDropDowns={[
                          { label: 'Contains', value: 'Contains' },
                          { label: 'Address', value: 'Address' },
                          { label: 'Alternate Email', value: 'Alternate Email' },
                          { label: 'Associated Emails', value: 'Associated Emails' },
                          { label: 'Associated Requests', value: 'Associated Requests' },
                          { label: 'Associated Sample Count', value: 'Associated Sample Count' },
                          { label: 'Associated Samples', value: 'Associated Samples' },
                          { label: 'Associated Subject Count', value: 'Associated Subject Count' },
                          { label: 'Associated Subjects', value: 'Associated Subjects' },
                          { label: 'Bill To', value: 'Bill To' },
                          { label: 'City', value: 'City' },
                          { label: 'Client ID', value: 'Client ID' },
                          { label: 'Client ID [External]', value: 'Client ID [External]' },
                          { label: 'Country', value: 'Country' },
                          { label: 'Email', value: 'Email' },
                          { label: 'Entry Date', value: 'Entry Date' },
                          { label: 'Facility ID [External]', value: 'Facility ID [External]' },
                          { label: 'Facility Name', value: 'Facility Name' },
                          { label: 'First Name', value: 'First Name' },
                          { label: 'Full Name', value: 'Full Name' },
                        ]}
                        selectedValue='Contains'
                        disabled
                        showSearch
                      />}
                    </td>
                    <td>
                      {idx !== 4 && <Input className="customInput18 w--160" placeholder="Input Search Criteria..." />}
                    </td>
                  </tr>
                )
              })}
            </table>
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default React.memo(ModalSearch);
