import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PCIndex from './js/components/pc_index'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={PCIndex} />
      </Router>
    );
  }
}

export default App;
