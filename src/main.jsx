import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/main.css";
import "./styles/App.css";
import "./styles/Navbar.css";

import { Provider } from "react-redux";
import { store } from "./store/store";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
