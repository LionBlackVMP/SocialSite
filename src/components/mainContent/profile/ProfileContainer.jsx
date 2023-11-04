import React from "react";
import Profile from "./profile";
import axios from "axios";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/reducer/profileReducer";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../Hoc/WithAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) userId = 2;
    this.props.getUserProfile(userId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});
const withRouter = (Component) => {
  return (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };
};

export default connect(mapStateToProps, { getUserProfile })(
  withRouter(withAuthRedirect(ProfileContainer))
);
