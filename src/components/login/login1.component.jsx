import React, { Component } from "react";
import "./login1.style.css";
import { Redirect } from "react-router-dom";
import Logo from "./logo.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      loginParams: {
        user_id: "",
        user_password: "",
      },
    };
  }
  handleFormChange = (e) => {
    let loginParamsNew = { ...this.state.loginParams };
    let val = e.target.value;
    loginParamsNew[e.target.name] = val;
    this.setState({
      loginParams: loginParamsNew,
    });
  };

  login = (e) => {
    let user_id = this.state.loginParams.user_id;
    let user_password = this.state.loginParams.user_password;
    if (user_id === "admin@abc.com" && user_password === "admin123") {
      localStorage.setItem("token", "T");
      this.setState({
        islogged: true,
      });
    } else {
      alert("Enter correct Email or Password");
    }
    e.preventDefault();
  };
  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login__page">
        <div className="container login__container">
          <div className="row">
            <div className="col-sm-12">
              <div className="row login__inner">
                <div className="col-sm-5">
                  <div className="logo__div">
                    <img src={Logo} alt="logo" />
                    {/* <h2>Hello, Logo will be here</h2> */}
                  </div>
                </div>
                <div className="col-sm-7 form__container">
                  <h2>Sign In</h2>
                  <form onSubmit={this.login} className="form___signin">
                    <div className="form-group">
                      <input
                        type="email"
                        name="user_id"
                        onChange={this.handleFormChange}
                        placeholder="Enter email"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        name="user_password"
                        onChange={this.handleFormChange}
                        placeholder="Enter Password"
                        className="form-control"
                      />
                    </div>
                    <button className="btn btn-default" value="Login">
                      Submit
                    </button>
                  </form>
                  <span className="forget__password">
                    Forgot Password?<a href="#"> Click Here!</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
