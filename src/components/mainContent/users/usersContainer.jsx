import React from "react";
import { connect } from "react-redux";
import Users from "./users";
import {
  followAC,
  setUsersAC,
  unfollowAC,
} from "../../redux/reducer/usersReducer";

let mapStateToProps = (state) => {
  debugger;
  return {
    users: state.usersPage.users,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      debugger;
      dispatch(setUsersAC(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
