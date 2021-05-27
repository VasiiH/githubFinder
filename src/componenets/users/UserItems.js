import React, { Component } from "react";

class UserItems extends Component {
  render() {
    const { avatar_url, login, html_url } = this.props.user; // destruction
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
