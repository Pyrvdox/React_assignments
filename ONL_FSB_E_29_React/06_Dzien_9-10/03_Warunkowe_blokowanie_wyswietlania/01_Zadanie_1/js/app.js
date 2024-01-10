import React from "react";
import { createRoot } from "react-dom/client";
import SecretStuff from "./SecretStuff";

const App = () => {
    return <SecretStuff password={"abc"} correctPassword={"abc"} secret={"h3h3"}/>
}


const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
