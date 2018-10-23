import React from "react";
import {
  Icon,
  Tabs,
  message,
  Form,
  Input,
  Button,
  Modal
} from "antd";
const imgLogo = require("../../../images/logo.png");
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class MobileHeader extends React.Component {
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

  login = e => {
    this.setModalVisible(true);
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
        console.log(json);
        this.setState({ userNickName: json.NickUserName, userid: json.UserId });
      });
    message.success("请求成功！");
    console.log(this.state.current);
    this.setModalVisible(false);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const userShow = this.state.hasLogined ? (
        <Icon type="inbox" />
    ) : (
      <Icon type="setting" onClick={this.login} />
    );
    return (
      <div id="mobileheader">
        <header>
          <img src={imgLogo} alt="logo" />
          <span>ReactNews</span>
          {userShow}
        </header>
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
                  })(<Input placeholder="请输入您的密码" type="password" />)}
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
                    <Input placeholder="请再次输入您的密码" type="password" />
                  )}
                </FormItem>
                <Button type="primary" htmlType="submit">
                  注册
                </Button>
              </Form>
            </TabPane>
          </Tabs>
        </Modal>
      </div>
    );
  }
}

export default (MobileHeader = Form.create({})(MobileHeader));