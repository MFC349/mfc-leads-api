import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import {
  CarvingWorkshopsLandingPage,
  CultureToContractLandingPage,
  HealingWarriorSpiritLandingPage,
  ResetLandingPage,
  LandingPageHub
} from "./mfc-funnel-landing-pages";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageHub />} />
        <Route path="/21-day-reset" element={<ResetLandingPage />} />
        <Route
          path="/healing-the-warrior-spirit"
          element={<HealingWarriorSpiritLandingPage />}
        />
        <Route
          path="/culture-to-contract"
          element={<CultureToContractLandingPage />}
        />
        <Route
          path="/carving-workshops"
          element={<CarvingWorkshopsLandingPage />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
