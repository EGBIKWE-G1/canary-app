import React from "react";
import Header from "../Header";
import Login from "./Login";
import "../UserLoginStyle.css";

const UserLoginStyle = () => {
  return (
    <section>
      <section>
        <main className="user-login-interface mango">
          <Header />
          <Login />
        </main>
        <footer className="user-login-footer"></footer>
      </section>
    </section>
  );
};
export default UserLoginStyle;
