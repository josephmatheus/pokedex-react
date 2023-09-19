import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../HomePage/HomePage";
import { Details } from "../Details/Details";

export const AppRoutes = () => (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/details/:name" element={<Details />} />
      </Routes>
    </BrowserRouter>
);
