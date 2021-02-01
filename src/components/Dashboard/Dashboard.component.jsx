import React, { Component } from "react";
import { Redirect, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./dashboard.styles.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false,
    };
  }
  signOut = () => { 
    localStorage.removeItem("token");
    this.setState({
      islogout: true,
    });
  };
  render() {
    if (this.state.islogout) {
      return <Redirect to="/login" />;
    }
    const { match } = this.props;
    return (
      <div>
        <ul>
          <li className="push-right">
            <button onClick={this.signOut} href="#">
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Dashboard);
