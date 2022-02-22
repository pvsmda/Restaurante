import { BrowserRouter as Router } from "react-router-dom";

import { Routes } from "./routes/index";

import GlobalStyle from "./styles/global";

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
  </>
);

export default App;
