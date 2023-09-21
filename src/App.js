import React from "react";
import "./App.css";
import Home from "./page/Hone/Hone";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsPage from "./page/NewsPage/NewsPage";

export default function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
