import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

import { BrowserRouter, Routes, Route} from "react-router-dom";

import products from "./components/Products/products.json"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          {
            products.map((product,index)=>{
              return(
                <Route path={"/"+product.url} element={<Products imgsrc={product.imgsrc} name={product.name} description={product.description}/>} key={index}/>
              )
            })
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
