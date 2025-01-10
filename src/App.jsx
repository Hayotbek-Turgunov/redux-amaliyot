import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./router/Home/Home";
import CreateUser from "./router/CreateUser/CreateUser";
import AllUsers from "./router/All-Users/AllUsers";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/all-users" element={<AllUsers />} />
      </Routes>
    </div>
  );
}

export default App;
