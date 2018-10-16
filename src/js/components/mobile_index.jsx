import React from "react";
import MobileHeader from "./header/mobile_header";
import MobileFooter from "./footer/mobile_footer";
import {
  Row,
  Col,
  Menu,
  Icon,
  Tabs,
  message,
  Form,
  Input,
  Button,
  Modal
} from "antd";
const TabPane = Tabs.TabPane;
export default class MobileIndex extends React.Component {
  render() {
    return (
      <div>
        <MobileHeader />
        <Tabs>
          <TabPane tab="头条" key="1"/>
          <TabPane tab="社会" key="2"/>
          <TabPane tab="国内" key="3"/>
          <TabPane tab="国际" key="4"/>
          <TabPane tab="娱乐" key="5"/>
          <TabPane tab="头条" key="6"/>
        </Tabs>
        <MobileFooter />
      </div>
    );
  }
}
