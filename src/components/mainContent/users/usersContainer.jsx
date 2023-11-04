import React from "react";
import { connect } from "react-redux";
import Users from "./users";
import {
  toggleFollowingProgress,
  getUsers,
  follow,
  unfollow,
} from "../../redux/reducer/usersReducer";
import Preloader from "../../../common/preloader/Preloader";
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../Hoc/WithAuthRedirect";

class UsersComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    if (!this.props.isAuth) return <Navigate to={"/login"} />;
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          onPageChanged={this.onPageChanged}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          followingInProgress={this.props.followingInProgress}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          isAuth={this.props.isAuth}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  toggleFollowingProgress,
  getUsers,
  follow,
  unfollow,
})(withAuthRedirect(UsersComponent));
