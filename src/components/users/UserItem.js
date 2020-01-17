import React, { Component } from "react";

const UserItem = props => {
  const { username, avatar_url, profile_url } = props.user;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt={username + " avatar image"}
        className="round-img"
        style={{ width: "60px" }}
      />
      <h4>{username}</h4>
      <div>
        <a href={profile_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};

UserItem.defaultProps = {
  user: {
    id: 0,
    username: "null user",
    avatar_url:
      "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png",
    profile_url: "https://github.com"
  }
};
export default UserItem;
