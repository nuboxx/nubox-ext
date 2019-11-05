import React from "react";

import Home from "../pages/home";
import Bob from "../pages/bob";
import Encrypt from "../pages/encrypt";
import Decrypt from "../pages/decrypt";
import Grant from "../pages/grant";
import Revoke from "../pages/revoke";

const getComponent = page => {
  switch (page) {
    case "home":
    default:
      return <Home />;

    case "bob":
      return <Bob />;

    case "encrypt":
      return <Encrypt />;

    case "decrypt":
      return <Decrypt />;

    case "grant":
      return <Grant />;

    case "revoke":
      return <Revoke />;
  }
};

export default getComponent;
