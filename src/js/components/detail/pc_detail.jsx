import React from "react";
import { Row, Col, BackTop } from "antd";
import PCHeader from "../header/pc_header";
import PCFooter from "../footer/pc_footer";
import PCNewsImageBlock from "../list/pc_newsimage";
import CommonComments from "../comment/common_comment";
export default class PCNewsDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      newsItem: ""
    };
  }

  componentDidMount() {
    var myFetchOptions = {
      method: "GET"
    };
    //获取router中的 this.props.match
    console.log(this.props.match.params.uniquekey);
    fetch(
      "http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" +
        this.props.match.params.uniquekey,
      myFetchOptions
    )
      .then(response => response.json())
      .then(json => {
        this.setState({ newsItem: json });
        document.title =
          this.state.newsItem.title + " - React News | React 驱动的新闻平台";
      });
  }

  createMarkup() {
    return { __html: this.state.newsItem.pagecontent };
  }

  render() {
    return (
      <div>
        <PCHeader />
        <Row>
          <Col span={2} />
          <Col span={14} className="container">
            <div
              className="articleContainer"
              dangerouslySetInnerHTML={this.createMarkup()}
            />
            <CommonComments uniquekey={this.props.match.params.uniquekey} />
          </Col>
          <Col span={6}>
            <PCNewsImageBlock
              count={40}
              type="top"
              width="100%"
              cardTitle="相关新闻"
              imageWidth="150px"
            />
          </Col>
          <Col span={2} />
        </Row>
        <PCFooter />
        <BackTop />
      </div>
    );
  }
}
