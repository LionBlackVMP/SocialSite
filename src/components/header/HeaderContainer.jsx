import React from "react";
import logo from "../../assets/img/logo.svg";

import Header from "./header";
import { connect } from "react-redux";
import { getAccountInfo } from "../redux/reducer/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAccountInfo();
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { getAccountInfo })(HeaderContainer);
