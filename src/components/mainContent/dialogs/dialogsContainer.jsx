import { withAuthRedirect } from "../../Hoc/WithAuthRedirect";
import {
  addMessageTextCreator,
  addMessageToPublicationsCreator,
} from "../../redux/reducer/dialogsReducer";
import Dialogs from "./dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsPage };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageTextCreator());
    },
    onMessageChange: (text) => {
      dispatch(addMessageToPublicationsCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(Dialogs));
export default DialogsContainer;
