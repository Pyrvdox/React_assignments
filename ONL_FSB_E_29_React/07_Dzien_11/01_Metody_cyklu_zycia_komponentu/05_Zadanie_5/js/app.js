import React from "react";
import { createRoot } from "react-dom/client";
import StrobeLight from "./StrobeLight";

const App = () => {
    return <StrobeLight color={"red"} frequency={1000}/>
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
