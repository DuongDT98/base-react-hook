import React, { useState } from "react";
import Image from "../../components/Image";
import { Form, Input, Button, Row, Col } from "antd";
import { validateEmailWithoutSpecial } from "../../lib/common";
import _ from "lodash";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import "./login-page.scss";

const formRef = React.createRef();

function LoginPage() {
  const ibMobile = useMediaQuery({ maxWidth: 750 });
  const [errLogin, setErrLogin] = useState(false);

  const onEnterPress = async (e) => {
    if (e.key === "Enter") {
      await handleSubmit();
    }
  };

  const handleSubmit = async () => {
    await formRef.current.validateFields();
    const { email, password } = formRef.current.getFieldsValue();

    await axios
      .post("https://mcapi.yougo.vn/api/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        setErrLogin(true);
      });
  };

  return (
    <Row className="loginPage">
      <Col span={12} hidden={ibMobile || errLogin}>
        <Image
          src="/images/non_profits.png"
          className="loginImage"
          objectFit="contain"
        />
      </Col>
      <Col span={ibMobile ? 24 : errLogin ? 9 : 12}>
        <div
          className={ibMobile ? "logo-page-mobile" : "logo-page"}
          hidden={errLogin}
        >
          <Image
            src="/images/Rectangle.png"
            height={24}
            className="login-image"
            objectFit="contain"
          />
          <Image src="/images/Square.png" height={24} objectFit="contain" />
        </div>
        <Form
          ref={formRef}
          className={
            ibMobile
              ? "login-body-mobile"
              : errLogin
              ? "error-login-form"
              : "login-body"
          }
        >
          <label className="title-login">Đăng nhập tài khoản</label>
          <label className="title-email">Email</label>
          <Form.Item
            name="email"
            rules={[
              {
                validator: (_, value) => {
                  if (!value || value.trim() === "") {
                    return Promise.reject("Please Enter Your Email!");
                  } else if (
                    value &&
                    !validateEmailWithoutSpecial(value.trim())
                  ) {
                    return Promise.reject("Email sai định dạng");
                  } else {
                    return Promise.resolve();
                  }
                },
              },
            ]}
          >
            <Input
              className="customInputLogin mb--24"
              placeholder="Nhập tài khoản"
              maxLength={250}
              onKeyPress={(e) => onEnterPress(e)}
            />
          </Form.Item>
          <label className="title-pass">Mật Khẩu</label>
          <Form.Item
            name="password"
            rules={[
              {
                validator: (_, value) => {
                  if (!value || value.trim() === "") {
                    return Promise.reject("Please Enter Your Password!");
                  } else {
                    return Promise.resolve();
                  }
                },
              },
            ]}
          >
            <Input
              type="password"
              className="customInputLogin mb--8"
              placeholder="Nhập mật khẩu"
              maxLength={250}
              onKeyPress={(e) => onEnterPress(e)}
            />
          </Form.Item>
          <label className="title-hidden-pass">Hiện mật khẩu</label>
          <Button className="btn-login mt--40 mb--58" onClick={handleSubmit}>
            Đăng nhập
          </Button>
          <label className="title-hidden-pass">Quên mật khẩu đăng nhập ?</label>
        </Form>
      </Col>
      <Col span={15} hidden={!errLogin}>
        <div className="error-login">
          <div className="form-error">
            <Image
              src="/images/error.png"
              height={24}
              className="login-image mb--22"
              objectFit="contain"
            />
            <p className="title-error mb--26">Sai thông tin đăng nhập</p>
            <p className="des-error mb--37">
              Email hoặc Mật khẩu không chính <br /> xác. Vui lòng kiểm tra lại
            </p>
            <Button className="btn-error-login mt--22 mb--22">OK</Button>
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default LoginPage;
