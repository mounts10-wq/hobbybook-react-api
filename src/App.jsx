import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import SavedBooks from "./pages/SavedBooks";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/saved" element={<SavedBooks />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;