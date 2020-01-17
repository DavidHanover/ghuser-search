import React, { Component } from "react";

class UserItem extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      login: "mojombo",
      avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
      html_url: "https://github.com/mojombo"
    };
    console.log(this.state);
  }
  render() {
    return (
      <div className="card text-center">
        <img
          src={this.state.avatar_url}
          alt={this.state.login + " avatar image"}
        />
      </div>
    );
  }
}

export default UserItem;
