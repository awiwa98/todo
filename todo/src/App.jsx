import { Route, Routes } from "react-router-dom";
import Todo from "./pages/Todo";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import "./styles.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;

