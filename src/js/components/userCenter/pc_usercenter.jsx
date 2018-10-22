import React from "react";
import ReactDom from "react-dom";
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
export default class PCUserCenter extends React.Component {
  render() {
    return (
      <Tabs>
        <TabPane tab="我的收藏列表" key="1" />
        <TabPane tab="我的评论列表" key="2" />
        <TabPane tab="我的列表" key="3" />
      </Tabs>
    );
  }
}