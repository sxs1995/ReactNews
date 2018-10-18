import React from "react";
import { Row, Col } from "antd";
import PCNewsBlock from "./pc_newsblock";
import PCNewsImage from "./pc_newsimage";
import carousel_1 from "../../../images/carousel_1.jpg";
import carousel_2 from "../../../images/carousel_2.jpg";
import carousel_3 from "../../../images/carousel_3.jpg";
import carousel_4 from "../../../images/carousel_4.jpg";

import { Tabs, Carousel } from "antd";
const TabPane = Tabs.TabPane;

export default class NewsContainer extends React.Component {
  render() {
    const setting = {
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1
    };

    return (
      <div>
        <Row>
          <Col span={2}>1</Col>
          <Col span={20} className="container">
            <div className="leftContainer">
              <div className="carousel">
                <Carousel effect="fade" {...setting}>
                  <div>
                    <img src={carousel_1} alt="" />
                  </div>
                  <div>
                    <img src={carousel_2} alt="" />
                  </div>
                  <div>
                    <img src={carousel_3} alt="" />
                  </div>
                  <div>
                    <img src={carousel_4} alt="" />
                  </div>
                </Carousel>
              </div>
              <div>
                <PCNewsImage
                  count={6}
                  type="guoji"
                  width="400px"
                  cartTitle="国际头条"
                  imageWidth="112px"
                />
              </div>
            </div>
            <Tabs className="tabs_news">
              <TabPane tab="新闻" key="1">
                <PCNewsBlock
                  count={22}
                  type="top"
                  width="100%"
                  bordered="false"
                />
              </TabPane>
              <TabPane tab="国际" key="2">
                <PCNewsBlock
                  count={12}
                  type="guoji"
                  width="100%"
                  bordered="false"
                />
              </TabPane>
            </Tabs>
            <div>
              <PCNewsImage
                count={11}
                type="guonei"
                width="100%"
                cartTitle="国内新闻"
                imageWidth="130px"
              />
              <PCNewsImage
                count={11}
                type="yule"
                width="100%"
                cartTitle="娱乐新闻"
                imageWidth="130px"
              />
            </div>
          </Col>
          <Col span={2}>1</Col>
        </Row>
      </div>
    );
  }
}
