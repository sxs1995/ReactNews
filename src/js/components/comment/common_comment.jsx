import React from "react";
import { Row, Col } from "antd";
import { Form, Input, Button, Card, notification } from "antd";
const FormItem = Form.Item;
const { TextArea } = Input;
class CommonComments extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: ""
    };
  }
  componentDidMount() {
    var myFetchOptions = {
      method: "GET"
    };
    fetch(
      "http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" +
        this.props.uniquekey,
      myFetchOptions
    )
      .then(response => response.json())
      .then(json => {
        this.setState({ comments: json });
      });
  }
  handleSubmit(e) {
    e.preventDefault();
    var myFetchOptions = {
      method: "GET"
    };
    var formdata = this.props.form.getFieldsValue();
    console.log(formdata);
    fetch(
      "http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" +
        localStorage.userid +
        "&uniquekey=" +
        this.props.uniquekey +
        "&commnet=" +
        formdata.remark,
      myFetchOptions
    )
      .then(response => response.json())
      .then(json => {
        this.componentDidMount();
      });
  }

  addUserCollection = () => {
    var myFetchOptions = {
      method: "GET"
    };
    fetch(
      "http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" +
        localStorage.userid +
        "&uniquekey=" +
        this.props.uniquekey,
      myFetchOptions
    )
      .then(response => response.json())
      .then(json => {
        //收藏成功以后进行一下全局的提醒
        notification["success"]({
          message: "ReactNews提醒",
          description: "收藏此文章成功"
        });
      });
  };

  render() {
    let { getFieldDecorator } = this.props.form;
    const { comments } = this.state;
    const commnetList = comments.length
      ? comments.map((comment, index) => (
          <Card
            key={index}
            title={comment.UserName}
            extra={<a href="#"> 发布于 {comment.datetime} </a>}
          >
            <p>{comment.Comments}</p>
          </Card>
        ))
      : "没有加载到任何评论";
    return (
      <div className="comment">
        <Row>
          <Col span={24}>
            {commnetList}
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormItem label="您的评论">
                {getFieldDecorator("remark", {
                  initialValue: "",
                  rules: [{ required: true, message: "随便写!" }]
                })(
                  <TextArea
                    autosize={{ minRows: 2, maxRows: 6 }}
                    placeholder="随便写"
                  />
                )}
              </FormItem>
              <Button type="primary" htmlType="submit">
                提交评论
              </Button>
              &nbsp;&nbsp;
              <Button
                type="primary"
                htmlType="button"
                onClick={this.addUserCollection}
              >
                收藏
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
export default (CommonComments = Form.create({})(CommonComments));
