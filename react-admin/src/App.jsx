import { useState } from "react";
import Topbar from "./components/Topbar";
import Root from "./routes/root";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline />
      <Topbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
