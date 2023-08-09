import Home from "./pages/Home";
import Game from "./pages/Game";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="hello">Hello World</div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/game-kemerdekaan-ri" element={<Game />} />
      </Routes>
    </>
  );
}
