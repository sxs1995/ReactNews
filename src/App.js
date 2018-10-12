import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PCIndex from "./js/components/pc_index";
import MobileIndex from "./js/components/mobile_index";
import MediaQuery from "react-responsive";
class App extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query="(min-device-width:1224px)">
          <PCIndex />
        </MediaQuery>
        <MediaQuery query="(max-device-width:1224px)">
          <MobileIndex />
        </MediaQuery>
      </div>

      // <Router>
      //   <MediaQuery query="(min-device-width:1224px)">
      //     <Route path="/" component={PCIndex} />
      //   </MediaQuery>
      //   <MediaQuery query="(max-device-width:1224px)">
      //     <Route path="/" component={MobileIndex} />
      //   </MediaQuery>
      // </Router>
    );
  }
}

export default App;
