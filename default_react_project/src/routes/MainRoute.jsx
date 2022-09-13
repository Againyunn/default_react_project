import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

// page components
import MainPage from "pages/MainPage";
import Login from "components/user/login/Login";

import Header from "layouts/header";
import Footer from "layouts/footer";

// header와 footer 모두 포함된 full layout
// Outlet에 nested할 컴포넌트가 위치
const FullLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

function MainRoute(props) {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<FullLayout />}>
            <Route path="/" element={<MainPage />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>죄송합니다. 잘못된 페이지 입니다.</p>
              </main>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default MainRoute;
