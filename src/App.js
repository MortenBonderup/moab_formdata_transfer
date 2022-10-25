import { Navigate, Route, Routes } from "react-router-dom";
import ResultPage from "./pages/ResultPage";
import HomePage from "./pages/HomePage";
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="result" element={<ResultPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
