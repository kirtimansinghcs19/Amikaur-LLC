import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KaptureTheme from "./KaptureTheme";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./pages/components/header";
import ItemDetail from "./pages/ItemDetail";
import BottomNavBar from "./pages/components/Bottomnavbar";
import { useEffect } from "react";
import NotFound from "./pages/NotFound";

function App() {
  useEffect(() => {
    document.title = "Amikaur LLC"; // Set the new tab title once
  }, []);
  // Empty dependency array ensures this runs once, when the component is mounted

  return (
    <Router>
      <KaptureTheme>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            // Ensure the content takes at least the full height of the viewport
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/job/:id" element={<ItemDetail />} />
            {/* 404 Not Found route */}
            <Route path="*" element={<NotFound />} />{" "}
            {/* Catch-all route for unknown paths */}
          </Routes>
          <BottomNavBar />
        </div>
      </KaptureTheme>
    </Router>
  );
}

export default App;
