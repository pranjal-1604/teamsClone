import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./SocketContext";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
