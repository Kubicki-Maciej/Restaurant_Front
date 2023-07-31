import React from 'react';
import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import './App.css';

import KitchenScreen from './screens/KitchenScreen';

function App() {
  return (
    <div className="wrapper">
      {/* <KitchenApi/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/kitchen" element={ <KitchenScreen />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;