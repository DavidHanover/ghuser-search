import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Spinner from "./components/layout/Spinner";
import Search from "./components/users/Search";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };

  //search github users through github api endpoint
  handleSearch = async search => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  //clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  //set alert in case form submission is bad.
  //pass in prop down to "search" component
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
  }
  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Navbar></Navbar>
        <div className="container">
          <Search
            submitSearch={this.handleSearch}
            clearUsers={this.clearUsers}
            showClear={users.length ? true : false}
            setAlert={this.setAlert}
          />
          {loading ? <Spinner /> : <Users users={users} />}
        </div>
      </div>
    );
  }
}
export default App;
