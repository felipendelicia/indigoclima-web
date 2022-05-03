import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
