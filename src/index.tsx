import { render } from "react-dom"
//! Components
import { GlobalStyles } from "./App.styles"
import App from "./App"

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.querySelector("#app")
)
