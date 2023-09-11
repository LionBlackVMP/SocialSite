import React from "react";
import style from "./users.module.scss";

let Users = (props) => {
  debugger;
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: false,
        fullName: "Dmitry",
        status: "Hello world!",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 2,
        followed: false,
        fullName: "John",
        status: "Hey!",
        location: { city: "New York", country: "America" },
      },
      {
        id: 3,
        followed: true,
        fullName: "Anna",
        status: "Hello world!",
        location: { city: "Kiev", country: "Ukrane" },
      },
      {
        id: 4,
        followed: false,
        fullName: "Silva",
        status: "Hello world!",
        location: { city: "Berlin", country: "Germany" },
      },
    ]);
  }

  return (
    <div>
      {" "}
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </span>
          </span>
        </div>
      ))}{" "}
    </div>
  );
};

export default Users;
