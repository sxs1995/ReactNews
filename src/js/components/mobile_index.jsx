import React from "react";
import MobileHeader from "./header/mobile_header";
import MobileFooter from "./footer/mobile_footer";
import { Tabs } from "antd";
const TabPane = Tabs.TabPane;
export default class MobileIndex extends React.Component {
  render() {
    return (
      <div>
        <MobileHeader />
        <Tabs>
          <TabPane tab="头条" key="1" >头条</TabPane>
          <TabPane tab="社会" key="2" >社会</TabPane>
          <TabPane tab="国内" key="3" >国内</TabPane>
          <TabPane tab="国际" key="4" >国际</TabPane>
          <TabPane tab="娱乐" key="5" >娱乐</TabPane>
          <TabPane tab="头条" key="6" >头条</TabPane>
        </Tabs>
        <MobileFooter />
      </div>
    );
  }
}
