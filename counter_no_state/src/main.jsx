import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(<App />);
const mainroot = createRoot(document.getElementById("root"));

const rerender = () => {
  mainroot.render(<App />);
};

rerender();

export default rerender;
