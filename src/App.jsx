import React from "react";
import style from "./general/app.module.scss";
import Header from "./components/header/header";
import Profile from "./components/mainContent/profile/profile";
import Navbar from "./components/navigation/navigation";
import DialogsContainer from "./components/mainContent/dialogs/dialogsContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Groups from "./components/mainContent/groups/groups";
import Settings from "./components/mainContent/settings/settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={style.wrapper}>
        <Header />
        <Navbar />
        <div className={style.content}>
          <Routes>
            <Route path="Profile" element={<Profile store={props.store} />} />
            <Route
              path="Dialogs/*"
              element={
                <DialogsContainer
                  state={props.state.dialogsPage}
                  dispatch={props.dispatch}
                  store={props.store}
                />
              }
            />
            <Route path="Groups" element={<Groups />} />
            <Route path="Settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
