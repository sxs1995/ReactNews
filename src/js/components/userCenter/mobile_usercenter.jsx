import React from "react";
import ReactDom from "react-dom";
import MobileHeader from "../header/mobile_header";
import MobileFooter from "../footer/mobile_footer";
import { Row, Col, Modal, Menu, Icon } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Tabs,
  message,
  Form,
  Input,
  Button,
  Checkbox,
  Card,
  notification,
  Upload
} from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;
export default class MobileUserCenter extends React.Component {
  render() {
    return (
      <div>
        <MobileHeader />
        <Row>
          <Col span={2} />
          <Col span={20}>
            <Tabs>
              <TabPane tab="我的收藏列表" key="1">
                1
              </TabPane>
              <TabPane tab="我的评论列表" key="2">
                1
              </TabPane>
              <TabPane tab="我的列表" key="3">
                1
              </TabPane>
            </Tabs>
          </Col>
          <Col span={2} />
        </Row>
        <MobileFooter />
      </div>
    );
  }
}
