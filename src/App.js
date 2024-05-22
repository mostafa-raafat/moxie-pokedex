import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import HomePage from "./pages/home";
import PokemonDetailPage from "./pages/pokemon";

// Components
import NotFound from "./components/NotFound/NotFound";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pokemon/:name" element={<PokemonDetailPage />} />
      <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
    </Routes>
  </Router>
);

export default App;
