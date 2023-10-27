import React from "react";
import logo from "../../assets/img/logo.svg";

import Header from "./header";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUsersData } from "../redux/reducer/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((responce) => {
        if (responce.data.resultCode === 0) {
          let { id, email, login } = responce.data.data;
          this.props.setAuthUsersData(id, email, login);
        }
      });
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, { setAuthUsersData })(HeaderContainer);
