import { Route, Routes } from "react-router-dom";
import { Dashboard, Home, Order, TOPUPACCAUNT, YOURACCAUNT } from "./Pages";
import { styles } from "./style/styles";
import { LogoFull } from "./image";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-icons/ai";
import "react-icons/fa";

export default function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/order" element={<Order />} />
        <Route path="/your-accaunt" element={<YOURACCAUNT />} />
        <Route path="/top-up-accaunt" element={<TOPUPACCAUNT />} />
      </Routes>
    </div>
  );
}
