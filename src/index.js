import "./app.css";
import { $ } from "./utils/selector";
import App from "./app";

const $target = $("body");
console.log("app is running");
new App({ $target });
