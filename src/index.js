import "./app.css";
import { $ } from "./utils/selector";
import App from "./app";

const $target = $("body");
new App({ $target });
