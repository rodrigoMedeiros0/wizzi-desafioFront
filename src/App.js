import './App.css';

import { Route, BrowserRouter, Routes } from "react-router-dom";
import Checkout from './page/checkout/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
