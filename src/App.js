import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage"
import InventoriesPage from "./pages/InventoriesPage/InventoriesPage.js"
import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<WarehousesPage />}/>
          <Route path="/warehouses" element={<WarehousesPage />} />
          <Route path="/inventories"/>
        </Routes>
      <Footer />
    </Router>
  )
}

export default App;