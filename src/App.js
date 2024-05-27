
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage"
import InventoryItemDetailsPage from "./pages/InventoryItemDetailsPage/InventoryItemDetailsPage";
import AddWarehouse from "./pages/AddWarehousePage/AddWarehouse";
import AllWarehouses from "./pages/AllWarehouses/AllWarehouses.js";
import AllInventories from "./pages/AllInventories/AllInventories.js";
import "./App.scss";
import EditInventory from "./components/Main/EditInventory";
import AddNewInventory from "./pages/AddNewInventory/AddNewInventory.js"

function App() {
  return (
    <Router>

        <Header />
          <Routes>
            <Route path="/" element={<AllWarehouses />} />
            <Route path="/warehouses" element={<AllWarehouses />} />
            <Route path="warehouses/edit" element={<Navigate to="/warehouses/edit/1" />} />
            <Route path="warehouses/edit/:warehouseId" element={<EditWarehousePage />} />
            <Route path="/warehouses/details" element={<Navigate to="/warehouses/details/1" />} />
            <Route path="/warehouses/details/:warehouseId" element={<WarehouseDetailsPage />} />
            <Route path="/inventories" element={<AllInventories />} />
            <Route path="/inventories/details/:inventoryId" element={<InventoryItemDetailsPage />} />
            <Route path="/inventories/edit/:inventoryId" element={< EditInventory />} />
            <Route path="/addwarehouses" element={<AddWarehouse />} />
            <Route path="/addinventory" element={<AddNewInventory />} />
          </Routes>
    
        <Footer />


    </Router>
  );
}

export default App;
