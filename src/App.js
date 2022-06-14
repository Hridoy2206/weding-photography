import { Route, Routes } from "react-router-dom";
import "./App.css";
import CheckOut from "./component/pages/CheckOut/CheckOut";
import Home from "./component/pages/Home/Home/Home";
import Footer from "./component/sheared/Footer/Footer";
import Header from "./component/sheared/Header/Header";
import Login from "./component/sheared/Login/Login";
import NotFound from "./component/sheared/NotFound/NotFound";
import SignUp from "./component/sheared/SignUp/SignUp";
import RequireAuth from "./RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/service"
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
