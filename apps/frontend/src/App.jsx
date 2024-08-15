import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/utils/navbar/Header'
import Error404 from './components/utils/Error404'
import HomePage from './components/pages/Home/HomePage'
import StoreLocator from "./components/utils/Product/StoreLocator";
function App() {
  const backendurl = import.meta.env.VITE_BACKEND_URL;

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StoreLocator />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
