import React from "react";
import Header from "../Header";
import ForgetPassword from "./ForgetPassword";

const UserForgetPassword = () => {
  return (
    <section>
      <section>
        <main className="user-login-interface mango">
          <Header />
          <ForgetPassword />
        </main>
        <footer className="user-login-footer"></footer>
      </section>
    </section>
  );
};
export default UserForgetPassword;
