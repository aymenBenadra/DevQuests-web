import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import "./styles/index.css";
import App from "./components/App";
import { AuthProvider } from "./contexts/AuthContext";
import { AlertProvider } from "./contexts/AlertContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ModulesProvider } from "./contexts/ModulesContext";

const queryClient = new QueryClient({
  retry: false,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AlertProvider>
      <AuthProvider>
        <ModulesProvider>
          <QueryClientProvider client={queryClient}>
            {window.innerWidth >= 768 && (
              <AnimatedCursor
                innerSize={15}
                outerSize={30}
                outerScale={2}
                color="35, 176, 165"
              />
            )}
            <App />
            {/* <ReactQueryDevtools /> */}
          </QueryClientProvider>
        </ModulesProvider>
      </AuthProvider>
    </AlertProvider>
  </BrowserRouter>
);
