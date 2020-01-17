import React, { Component } from "react";

class UserItem extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      username: "mojombo",
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
          alt={this.state.username + " avatar image"}
          className="round-img"
          style={{ width: "60px" }}
        />
      </div>
    );
  }
}

export default UserItem;
