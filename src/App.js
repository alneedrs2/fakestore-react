import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import AllProducts from "./components/AllProducts/AllProducts";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [count, setCount] = useState(0);
  const setCartCount = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Header count={count}></Header>
      <AllProducts setCartCount={setCartCount}></AllProducts>
    </div>
  );
}

export default App;
