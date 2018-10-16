import React from "react";
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
const imgLogo = require("../../../images/logo.png");
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class PCHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      current: "top",
      modalVisiable: false,
      action: "login",
      hasLogined: false,
      userNickName: "",
      userID: 0
    };
  }

  handleClick = e => {
    if ((e.key = "register")) {
      this.setState({
        current: "register"
      });
      this.setModalVisible(true);
    } else {
      this.setState({
        current: e.key
      });
    }
  };

  setModalVisible(value) {
    this.setState({
      modalVisiable: value
    });
  }

  handleSubmit = e => {
    const form = this.props.form;
    e.preventDefault();
    var myFetchOptions = {
      method: "GET"
    };
    var r_username = form.getFieldValue("r_username");
    var r_password = form.getFieldValue("r_password");
    var r_confirmPassword = form.getFieldValue("r_confirmPassword");

    fetch(
      "http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName=" +
        r_username +
        "&r_password=" +
        r_password +
        "&r_confirmPassword=" +
        r_confirmPassword,
      myFetchOptions
    )
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({ userNickName: json.NickUserName, userid: json.UserId });
      });
    message.success("请求成功！");
    console.log(this.state.current)
    this.setModalVisible(false);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const userShow = this.state.hasLogined ? (
      <Menu.Item key="logout" className="register">
        <Button type="primary" htmlType="button">
          {this.state.userNickName}
        </Button>
        &nbsp;&nbsp;
        {/* <Link target="_blank">
        <Button type="danger" htmlType="button">个人中心</Button>
      </Link> */}
        &nbsp;&nbsp;
        <Button type="ghost" htmlType="button">
          退出
        </Button>
      </Menu.Item>
    ) : (
      <Menu.Item key="register" className="register">
        <Icon type="appstore" />
        注册/登录
      </Menu.Item>
    );
    return (
      <header>
        <Row>
          <Col span={2} />
          <Col span={4}>
            <a href="/" className="logo">
              <img src={imgLogo} alt="logo" />
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu
              mode="horizontal"
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
            >
              <Menu.Item key="top">
                <Icon type="appstore" />
                头条
              </Menu.Item>
              <Menu.Item key="shehui">
                <Icon type="appstore" />
                社会
              </Menu.Item>
              <Menu.Item key="guonei">
                <Icon type="appstore" />
                国内
              </Menu.Item>
              <Menu.Item key="guoji">
                <Icon type="appstore" />
                国际
              </Menu.Item>
              <Menu.Item key="yule">
                <Icon type="appstore" />
                娱乐
              </Menu.Item>
              <Menu.Item key="tiyu">
                <Icon type="appstore" />
                体育
              </Menu.Item>
              <Menu.Item key="keji">
                <Icon type="appstore" />
                科技
              </Menu.Item>
              <Menu.Item key="shishang">
                <Icon type="appstore" />
                时尚
              </Menu.Item>
              {userShow}
            </Menu>

            <Modal
              title="用户中心"
              wrapClassName="vertical-center-modal"
              onOk={() => this.setModalVisible(false)}
              okText="关闭"
              onCancel={() => this.setModalVisible(false)}
              visible={this.state.modalVisiable}
            >
              <Tabs type="card">
                <TabPane tab="注册" key="2">
                  <Form onSubmit={this.handleSubmit}>
                    <FormItem label="账户">
                      {getFieldDecorator("r_username", {
                        rules: [
                          {
                            required: true,
                            message: "请输入您的账号!"
                          }
                        ]
                      })(<Input placeholder="请输入您的账号" />)}
                    </FormItem>
                    <FormItem label="密码">
                      {getFieldDecorator("r_password", {
                        rules: [
                          {
                            required: true,
                            message: "请输入您的密码!"
                          }
                        ]
                      })(
                        <Input placeholder="请输入您的密码" type="password" />
                      )}
                    </FormItem>
                    <FormItem label="确认密码">
                      {getFieldDecorator("r_confirmPassword", {
                        rules: [
                          {
                            required: true,
                            message: "请再次输入您的密码!"
                          }
                        ]
                      })(
                        <Input
                          placeholder="请再次输入您的密码"
                          type="password"
                        />
                      )}
                    </FormItem>
                    <Button type="primary" htmlType="submit">
                      注册
                    </Button>
                  </Form>
                </TabPane>
              </Tabs>
            </Modal>
          </Col>
          <Col span={2} />
        </Row>
      </header>
    );
  }
}

export default (PCHeader = Form.create({})(PCHeader));
