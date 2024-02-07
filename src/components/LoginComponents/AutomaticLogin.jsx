import React from "react";

import { SlideButton } from "../../screens/style/LoginScreenElements";

function AutomaticLogin({ buttonName, navigateTo }) {
  return (
    <SlideButton
      style={{ margin: "2px", marginTop: "10px" }}
      onClick={navigateTo}
    >
      <span>{buttonName}</span>
    </SlideButton>
  );
}

export default AutomaticLogin;
