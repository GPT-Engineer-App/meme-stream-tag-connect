import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import UploadMeme from "./pages/UploadMeme.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/upload" element={<UploadMeme />} />
      </Routes>
    </Router>
  );
}

export default App;
