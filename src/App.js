import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import UserLoginStyle from "./Components/LoginValidation/UserLoginStyle";
import UserSignup from "./Components/SignUpValidation/UserSignup";
import UserForgetPassword from "./Components/ForgetPassword/UserForgetPassword";
import Home from "./Pages/Home/Home";
import NoMatch from "./Pages/404Page/404Page";

class App extends React.Component {
  state = {
    isLog: false,
  };

  handleLogin = (isLog) => this.setState({ isLog });
  render() {
    const { isLog } = this.state;
    return (
      <div>
        <Switch>
          <Route
            path="/login"
            render={() => <UserLoginStyle isLogin={this.handleLogin} />}
          />
          <Route
            exact
            path="/"
            render={() =>
              !isLog ? (
                <Redirect to="/login" />
              ) : (
                <Home handleLogged={this.handleLogin} />
              )
            }
          />
          <Route path="/home" component={Home} />
          <Route path="/login" component={UserLoginStyle} />
          <Route path="/register" component={UserSignup} />
          <Route path="/forget-password" component={UserForgetPassword} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
