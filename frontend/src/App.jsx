import { useState } from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPost from "./pages/AllPost";
import Create from "./pages/Create";
import Update from "./pages/Update";
function App() {

  return (
    <BrowserRouter>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<AllPost />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
