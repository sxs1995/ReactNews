import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PCIndex from "./js/components/pc_index";
import MobileIndex from "./js/components/mobile_index";
import MediaQuery from "react-responsive";
import PCNewsDetails from "./js/components/detail/pc_detail";
import MobileNewsDetails from "./js/components/detail/mobile_detail";
// import PCUserContent from "./js/components/userCenter/pc_usercenter";
class App extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query="(min-device-width:1224px)">
          <Router>
            <div>
              <Route exact path="/" component={PCIndex} />
              <Route path="/details/:uniquekey" component={PCNewsDetails} />
            </div>
          </Router>
        </MediaQuery>
        <MediaQuery query="(max-device-width:1224px)">
          <Router>
            <div>
              <Route exact path="/" component={MobileIndex} />
              <Route path="/detail/:uniquekey" component={MobileNewsDetails} />
            </div>
          </Router>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
