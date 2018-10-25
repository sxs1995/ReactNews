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
  constructor() {
    super();
    this.state = {
      previewImage: "",
      previewVisible: false,
      usercollection: ""
    };
  }

  componentDidMount() {
    var myFetchOptions = {
      method: "GET"
    };
    fetch(
      "http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" +
        localStorage.userid,
      myFetchOptions
    )
      .then(response => response.json())
      .then(json => {
        this.setState({ usercollection: json });
      });
  }

  render() {
    const props = {
      action: "http://newsapi.gugujiankong.com/handler.ashx",
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      listType: "picture-card",
      defaultFileList: [
        {
          uid: -1,
          name: "xxx.png",
          state: "done",
          url: "https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png",
          thumbUrl: "https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png"
        }
      ],
      onPreview: file => {
        this.setState({ previewImage: file.url, previewVisible: true });
      }
    };

    const { usercollection } = this.state;
    const usercollectionList = usercollection.length
      ? usercollection.map((uc, index) => (
          <Card
            key={index}
            title={uc.uniquekey}
            extra={
              <a target="_blank" href={`/details/${uc.uniquekey}`}>
                查看
              </a>
            }
          >
            <p>{uc.Title}</p>
          </Card>
        ))
      : "您还没有收藏任何的新闻，快去收藏一些新闻吧。";
    return (
      <div>
        <MobileHeader />
        <Row>
          <Col span={2} />
          <Col span={20}>
            <Tabs>
              <TabPane tab="我的收藏列表" key="1">
                <div className="comment">
                  <Row>
                    <Col span={24}>{usercollectionList}</Col>
                  </Row>
                </div>
              </TabPane>
              <TabPane tab="我的评论列表" key="2">
                1
              </TabPane>
              <TabPane tab="我的头像" key="3">
                <div className="clearfix">
                  <Upload {...props}>
                    <Icon type="plus" />
                    <div className="ant-upload-text" />
                  </Upload>
                  <Modal visible={this.state.previewVisible} footer={null}>
                    <img src={this.state.previewImage} alt="预览" />
                  </Modal>
                </div>
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
