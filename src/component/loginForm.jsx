import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };
  username = React.createRef();

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }
  handleSubmit = (e) => {
    e.preventDefault();

    const username = this.username.current.value;

    console.log("summit");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;

    return (
      <div>
        <h1>Login Form</h1>
        <Input
          name="username"
          value={account.username}
          label="Username"
          onChange={this.handleChange}
        />
        <Input
          name="password"
          value={account.password}
          label="Password"
          onChange={this.handleChange}
        />

        <button className="btn btn-primary ">Login</button>
      </div>
    );
  }
}

export default LoginForm;
