import React, { Component } from "react";
import UserItem from "./UserItem";
import PropTypes from "prop-types";

const Users = ({ users }) => {
  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridGap: "1rem"
  };

  return (
    <div style={userStyle}>
      {users.map(user => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired
};

export default Users;
