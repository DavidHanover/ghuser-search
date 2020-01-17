import React, { Component } from "react";

class UserItem extends Component {
  static defaultProps = {
    id: 0,
    username: "null user",
    avatar_url:
      "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png",
    profile_url: "https://github.com"
  };
  render() {
    const { username, avatar_url, profile_url } = this.props;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt={username + " avatar image"}
          className="round-img"
          style={{ width: "60px" }}
        />
        <div>
          <a href={profile_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
