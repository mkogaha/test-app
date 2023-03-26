import { StrictMode } from "react";
import ReactDom from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");

// 参考のレポジトリ
// https://github.com/reachscript-jak/react-intermediate-practice-app
ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
