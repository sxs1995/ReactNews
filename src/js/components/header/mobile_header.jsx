import React from "react";
import { Icon, Tabs, message, Form, Input, Button, Modal } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
    //页面开始向 API 进行提交数据
    e.preventDefault();
    var myFetchOptions = {
      method: "GET"
    };
    var formData = this.props.form.getFieldsValue();
    console.log(formData);
    fetch(
      "http://newsapi.gugujiankong.com/Handler.ashx?action=" +
        this.state.action +
        "&username=" +
        formData.userName +
        "&password=" +
        formData.password +
        "&r_userName=" +
        formData.r_userName +
        "&r_password=" +
        formData.r_password +
        "&r_confirmPassword=" +
        formData.r_confirmPassword,
      myFetchOptions
    )
      .then(response => response.json())
      .then(json => {
        this.setState({ userNickName: json.NickUserName, userid: json.UserId });
      });
    if (this.state.action == "login") {
      this.setState({ hasLogined: true });
    }
    message.success("请求成功！");
    this.setModalVisible(false);
  };

  callback(key) {
    if (key === "1") {
      this.setState({ action: "login" });
    } else if (key === "2") {
      this.setState({ action: "register" });
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const userShow = this.state.hasLogined ? (
      <Link to={`/usercenter`}>
        <Icon type="inbox" />
      </Link>
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
          <Tabs type="card" onChange={this.callback.bind(this)}>
            <TabPane tab="登录" key="1">
              <Form horizontal="true" onSubmit={this.handleSubmit.bind(this)}>
                <FormItem label="账户">
                  {getFieldDecorator("userName", {
                    rules: [
                      {
                        required: true,
                        message: "请输入您的账号!"
                      }
                    ]
                  })(<Input placeholder="请输入您的账号" />)}
                </FormItem>
                <FormItem label="密码">
                  {getFieldDecorator("password", {
                    rules: [
                      {
                        required: true,
                        message: "请输入您的密码!"
                      }
                    ]
                  })(<Input placeholder="请输入您的密码" type="password" />)}
                </FormItem>
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
              </Form>
            </TabPane>
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
