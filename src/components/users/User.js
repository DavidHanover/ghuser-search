import React, { Component, Fragment } from "react";
import Spinner from "../layout/Spinner";

export default class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    if (this.props.loading) return <Spinner />;

    return (
      <Fragment>
        <h1>{name}</h1>
      </Fragment>
    );
  }
}
