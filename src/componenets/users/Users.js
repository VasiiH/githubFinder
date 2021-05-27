import React, { Component } from "react";
import UserItems from "./UserItems";

class Users extends Component {
  state = {
    users: [
      {
        id: 1,
        login: "VasiharanV",
        avatar_url: "https://avatars.githubusercontent.com/u/40349239?v=4",
        html_url: "https://github.com/vasiih",
      },
      {
        id: 2,
        login: "mojombo",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/vasiih",
      },
      {
        id: 3,
        login: "VasiharanV",
        avatar_url: "https://avatars.githubusercontent.com/u/40349239?v=4",
        html_url: "https://github.com/vasiih",
      },
    ],
  };

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle ={
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGab: '1rem'
}
export default Users;
