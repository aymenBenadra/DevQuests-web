import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import App from "./components/App";
import { AuthProvider } from "./contexts/AuthContext";
import { AlertProvider } from "./contexts/AlertContext";
import { RoadmapsProvider } from "./contexts/RoadmapsContext";
import { ResourcesProvider } from "./contexts/ResourcesContext";
import { ModulesProvider } from "./contexts/ModulesContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  retry: false,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AlertProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RoadmapsProvider>
            <ModulesProvider>
              <ResourcesProvider>
                <App />
                <ReactQueryDevtools />
              </ResourcesProvider>
            </ModulesProvider>
          </RoadmapsProvider>
        </QueryClientProvider>
      </AuthProvider>
    </AlertProvider>
  </BrowserRouter>
);
