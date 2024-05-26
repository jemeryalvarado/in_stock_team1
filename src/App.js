import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage"
import InventoryItemDetailsPage from "./pages/InventoryItemDetailsPage/InventoryItemDetailsPage";
import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<WarehousesPage />}/>
          <Route path="/warehouses" element={<WarehousesPage />} />
          <Route path="/warehouses/details" element={<Navigate to="/warehouses/details/1"/>} />
          <Route path="/warehouses/details/:warehouseId" element={< WarehouseDetailsPage />} />
          <Route path="/inventories"/>
          <Route path="/inventories/details/:inventoryId" element={< InventoryItemDetailsPage />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App;