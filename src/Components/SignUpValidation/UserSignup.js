import React from "react";
import Header from "../Header";
import SignUp from "./Signup";
const UserSignup = () => {
  return (
    <section>
      <section>
        <main>
          <Header />
          <SignUp />
        </main>
        <footer className="user-login-footer"></footer>
      </section>
    </section>
  );
};
export default UserSignup;
