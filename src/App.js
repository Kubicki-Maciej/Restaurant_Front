import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import KitchenScreen from "./screens/KitchenScreen";
import LoginScreen from "./screens/LoginScreen";
import WaiterScreen from "./screens/WaiterScreen";
import ManagerScreen from "./screens/ManagerScreen";
import ActiveOrderScreen from "./screens/WaiterScreens/ActiveOrderScreen";
function App() {
  return (
    <div className="wrapper">
      {/* <KitchenApi/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/kitchen" element={<KitchenScreen />} />
          <Route path="/waiter/*" element={<WaiterScreen />} />
          <Route path="/manager" element={<ManagerScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
