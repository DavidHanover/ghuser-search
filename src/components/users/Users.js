import React, { Component } from "react";
import UserItem from "./UserItem";

const Users = ({ users }) => {
  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridGap: "1rem"
  };

  return (
    <div style={userStyle}>
      {users.map(user => {
        return <UserItem user={user} key={user.id} />;
      })}
    </div>
  );
};

export default Users;
