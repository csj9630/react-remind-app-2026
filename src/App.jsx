import { useState } from "react";
import { Routes, Route, NavLink } from "react-router";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import DocumentPage from "./pages/DocumentPage";
import SettingsPage from "./pages/SettingsPage";
import PracticePage from "./pages/PracticePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello</h1>

      {/* Routes를 App에 쓰고, nav 링크는 Siderbar component에 작성. */}
      {/* 직접 url을 연결하진 않지만 하위 모든 route를 공통 레이아웃으로 감싼다. */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/chat" element={<ChatPage />}></Route>
          <Route path="/documents" element={<DocumentPage />}></Route>
          <Route path="/settings" element={<SettingsPage />}></Route>
          <Route path="/practice" element={<PracticePage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
