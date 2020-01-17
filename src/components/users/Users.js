import React, { Component } from "react";
import UserItem from "./UserItem";

export class Users extends Component {
  state = {
    users: [
      {
        id: 1,
        username: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        profile_url: "https://github.com/mojombo"
      },
      {
        id: 2,
        username: "defunkt",
        avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
        profile_url: "https://github.com/defunkt"
      },
      {
        id: 3,
        username: "pjhyett",
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        profile_url: "https://github.com/pjhyett"
      }
    ]
  };
  render() {
    const { users } = this.state;
    return (
      <div>
        {users.map(user => {
          return (
            <UserItem
              key={user.id}
              id={user.id}
              username={user.username}
              avatar_url={user.avatar_url}
              profile_url={user.profile_url}
            />
          );
        })}
      </div>
    );
  }
}

export default Users;
