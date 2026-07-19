import { Outlet } from "react-router";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

//레이아웃 컴포넌트 : 전체 페이지의 구조를 정의
function MainLayout() {
  return (
    <>
      <Header />
      <Sidebar />
      <Footer />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
