import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt={login + " avatar image"}
        className="round-img"
        style={{ width: "60px" }}
      />
      <h4>{login}</h4>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
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

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
