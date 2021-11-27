import React from "react";
import "./landing-page.scss";
import Image from "../../components/Image";
import EnglishTip from "../../assets/images/english-tip.jpg";
import OurJourney from "../../assets/images/our-journey.jpg";
import EnglishTalk from "../../assets/images/english-coffee-talk-cover.jpg";
import FullToeic from "../../assets/images/full-test.png";
import MiniToeic from "../../assets/images/mini-test-1.png";
import bgrImg from "../../assets/images/bgr_landingPage.jpg";
import { Row, Col } from "antd";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const dataToeicTest = [
  {
    type: "full",
    title: "FULL TEST 0070",
    timeTest: "90",
    addressTest: "8100 candidated, Join now",
  },
  {
    type: "full",
    title: "FULL TEST 0071",
    timeTest: "90",
    addressTest: "191 candidated, Join now",
  },
  {
    type: "mini",
    title: "MINI TEST 0070",
    timeTest: "90",
    addressTest: "8101 candidated, Join now",
  },
  // {
  //   type: "mini",
  //   title: "MINI TEST 0070",
  //   timeTest: "90",
  //   addressTest: "8104 candidated, Join now",
  // },
];

const ListHighCrore = [
  {
    customerName: "Customer Name",
    achievements: "950",
  },
  {
    customerName: "Customer Name",
    achievements: "900",
  },
  {
    customerName: "Customer Name",
    achievements: "875",
  },
  {
    customerName: "Customer Name",
    achievements: "875",
  },
  {
    customerName: "Customer Name",
    achievements: "875",
  },
  {
    customerName: "Customer Name",
    achievements: "875",
  },
];

function LandingPage() {
  return (
    <>
      <Header />
      <Row>
        <Col span={18}>
          <Image
            src={bgrImg}
            width="100%"
            height="auto"
            className="image-header"
          />
        </Col>
        <Col span={6} className="info-header">
          <h1>TOEIC TEST</h1>
          <h2>Free TOEIC</h2>
          <h2>test anywhere</h2>
          <p>
            Etq.vn English TOEIC Queen. The leading <br /> online TOEIC test
            platform in VietName
          </p>
          <a href="#"> Join now</a>
        </Col>
      </Row>
      <Row className={"row-tips"}>
        <Col span={8}>
          <Row>
            <Col span={12}>
              <Image
                src={EnglishTip}
                width="100%"
                height={315}
                className="image-header"
              />
            </Col>
            <Col span={12} className="infor-tips">
              <div className="title-tips">Study tips</div>
              <p className="des-tips">Study tips to learn english faster</p>
              <a href="#">Read story</a>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row>
            <Col span={12}>
              <Image
                src={OurJourney}
                width="100%"
                height={315}
                className="image-header"
              />
            </Col>
            <Col span={12} className="infor-tips">
              <div className="title-tips">Study tips</div>
              <p>Study tips to learn english faster</p>
              <a href="#">Read story</a>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row>
            <Col span={12}>
              <Image
                src={EnglishTalk}
                width="100%"
                height={315}
                className="image-header"
              />
            </Col>
            <Col span={12} className="infor-tips">
              <div className="title-tips">Study tips</div>
              <p>Study tips to learn english faster</p>
              <a href="#">Read story</a>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className={"row-tips"}>
        <Col span={24}>
          <h2>Our favorite exams</h2>
        </Col>
        {dataToeicTest.map((item) => {
          switch (item.type) {
            case "full":
              return (
                <Col span={8}>
                  <Row className="row-toeic">
                    <Col span={24}>
                      <Image
                        src={FullToeic}
                        width="100%"
                        height={315}
                        className="image-header"
                      />
                    </Col>
                    <Col span={24}>
                      <div className="title-toeic-test">{item.title}</div>
                      <p className="time-test">{item.timeTest} minutes</p>
                      <p className="address-test">{item.addressTest}</p>
                    </Col>
                  </Row>
                </Col>
              );

            default:
              return (
                <Col span={8}>
                  <Row className="row-toeic">
                    <Col span={24}>
                      <Image
                        src={MiniToeic}
                        width="100%"
                        height={315}
                        className="image-header"
                      />
                    </Col>
                    <Col span={24}>
                      <div className="title-toeic-test">{item.title}</div>
                      <p className="time-test">{item.timeTest} minutes</p>
                      <p className="address-test">{item.addressTest}</p>
                    </Col>
                  </Row>
                </Col>
              );
          }
        })}
      </Row>
      <Row className={"row-tips"}>
        <Col span={24}>
          <h2>Top high score</h2>
        </Col>
        {ListHighCrore.map((item) => (
          <Col span={4}>
            <div className="logo-high"></div>
            <div className="name-high">{item.customerName}</div>
            <div>Achievement: {item.achievements}</div>
          </Col>
        ))}
      </Row>
      <Footer />
    </>
  );
}
export default LandingPage;
