import AppRoutes from "@modules/router.jsx";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "@components/header";

export default function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
}
