import React from "react";
import MobileHeader from "./header/mobile_header";
import MobileFooter from "./footer/mobile_footer";
import { Tabs, Carousel } from "antd";
import MobileList from "./list/mobile_list";
import carousel_1 from "../../images/carousel_1.jpg";
import carousel_2 from "../../images/carousel_2.jpg";
import carousel_3 from "../../images/carousel_3.jpg";
import carousel_4 from "../../images/carousel_4.jpg";
const TabPane = Tabs.TabPane;

export default class MobileIndex extends React.Component {
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
        <MobileHeader />
        <Tabs>
          <TabPane tab="头条" key="1">
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
            <MobileList count={20} type="top" />
          </TabPane>
          <TabPane tab="社会" key="2">
            <MobileList count={20} type="shehui" />
          </TabPane>
          <TabPane tab="国内" key="3">
            <MobileList count={20} type="guonei" />
          </TabPane>
          <TabPane tab="国际" key="4">
            <MobileList count={20} type="guoji" />
          </TabPane>
          <TabPane tab="娱乐" key="5">
            <MobileList count={20} type="yule" />
          </TabPane>
        </Tabs>
        <MobileFooter />
      </div>
    );
  }
}
