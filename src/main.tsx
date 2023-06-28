import App from "./App";
import "./styles/index.scss";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);