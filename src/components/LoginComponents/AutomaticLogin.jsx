import React from "react";

function AutomaticLogin({ buttonName, navigateTo }) {
  return <button onClick={navigateTo}>{buttonName}</button>;
}

export default AutomaticLogin;
