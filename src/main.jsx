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
import { ModulesProvider } from "./contexts/ModulesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AlertProvider>
      <AuthProvider>
        <RoadmapsProvider>
          <ModulesProvider>
            <QuestionsProvider>
              <ResourcesProvider>
                <App />
              </ResourcesProvider>
            </QuestionsProvider>
          </ModulesProvider>
        </RoadmapsProvider>
      </AuthProvider>
    </AlertProvider>
  </BrowserRouter>
);
