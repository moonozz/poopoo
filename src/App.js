import "./App.css";
import "./styles/utilities.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Result from "./pages/Result";
import Header from "./components/Header";

function App() {
  return (
    <div className="max-w-screen-md bg-mainBg h-auto w-full">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
