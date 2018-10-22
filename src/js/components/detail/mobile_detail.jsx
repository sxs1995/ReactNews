import React from "react";
import { Row, Col, BackTop } from "antd";
import MovbileHeader from "../header/mobile_header";
import MovbileFooter from "../footer/mobile_footer";
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
      <div id="mobileDetailsContainer">
        <MovbileHeader />
        <div className="ucmobileList">
          <Row>
            <Col span={24} className="container">
              <div
                className="articleContainer"
                dangerouslySetInnerHTML={this.createMarkup()}
              />
            </Col>
          </Row>
          <MovbileFooter />
          <BackTop />
        </div>
      </div>
    );
  }
}
