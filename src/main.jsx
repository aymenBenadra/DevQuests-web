import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import App from "./components/App";
import { AuthProvider } from "./contexts/AuthContext";
import { AlertProvider } from "./contexts/AlertContext";
import { RoadmapsProvider } from "./contexts/RoadmapsContext";
import { QuestionsProvider } from "./contexts/QuestionsContext";
import { ResourcesProvider } from "./contexts/ResourcesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AlertProvider>
      <AuthProvider>
        <RoadmapsProvider>
          <QuestionsProvider>
            <ResourcesProvider>
              <App />
            </ResourcesProvider>
          </QuestionsProvider>
        </RoadmapsProvider>
      </AuthProvider>
    </AlertProvider>
  </BrowserRouter>
);
