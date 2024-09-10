import { Routes, Route, Outlet } from "react-router-dom";
import Create from "./pages/Create";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Read from "./pages/Read";
import Homepage from "./pages/Homepage";
import Users from "./pages/Users";
import SingleUser from "./pages/SingleUser";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
      </Route>

      <Route path='users' element={<Layout />}>
      <Route index element={<Users />} />
      <Route path=':userId' element={<SingleUser />} />
    </Route>

      <Route path="/create" element={<Create />} />

      <Route path="/read/:id" element={<Read />} />
    </Routes>
  );
}

export default App;
