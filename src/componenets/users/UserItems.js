import React, { Component } from "react";

class UserItems extends Component {
  state = {
    id: "id",
    login: "VasiharanV",
    avatar_url: "https://avatars.githubusercontent.com/u/40349239?v=4",
    html_url: "https://github.com/vasiih",
  };
  render() {
    const { avatar_url, login, html_url } = this.state; // destruction
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            Profile
          </a>
        </div>
      </div>
    );
  }
}

export default UserItems;
