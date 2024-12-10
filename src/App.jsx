import AppRoutes from "@modules/router.jsx";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "@components/header";
import Footer from "@components/footer";

export default function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  );
}
