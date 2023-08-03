import React from 'react';
import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import './App.css';

import KitchenScreen from './screens/KitchenScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <div className="wrapper">
      {/* <KitchenApi/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/kitchen" element={ <KitchenScreen />}/>
          <Route path="/login" element={ <LoginScreen />}/>
          <Route path="/register" element={ <LoginScreen />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;