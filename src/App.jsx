import React from "react";
import style from "./general/app.module.scss";
import Header from "./components/header/header";
import Profile from "./components/mainContent/profile/profile";
import Navbar from "./components/navigation/navigation";
import DialogsContainer from "./components/mainContent/dialogs/dialogsContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Groups from "./components/mainContent/groups/groups";
import Settings from "./components/mainContent/settings/settings";
import UsersContainer from "./components/mainContent/users/usersContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={style.wrapper}>
        <Header />
        <Navbar />
        <div className={style.content}>
          <Routes>
            <Route path="Profile" element={<Profile />} />
            <Route path="Dialogs/*" element={<DialogsContainer />} />
            <Route path="users" element={<UsersContainer />} />
            <Route path="Groups" element={<Groups />} />
            <Route path="Settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
