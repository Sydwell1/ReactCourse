import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router";
import GitHub from "./GitHub";

// Home and NotFound are kept in this file to keep the example short
function Home() {
  return <div>Home</div>;
}

function NotFound() {
  return <div>Not Found</div>;
}

function Header() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/github" element={<GitHub />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
