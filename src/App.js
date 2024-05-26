import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage"
import AddWarehouse from "./pages/AddWarehousePage/AddWarehouse";
import AllWarehouses from "./pages/AllWarehouses/AllWarehouses.js";
import AllInventories from "./pages/AllInventories/AllInventories.js";
import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<AllWarehouses/>}/>
          <Route path="/warehouses" element={<AllWarehouses />} />
          <Route path="/warehouses/details" element={<Navigate to="/warehouses/details/1"/>} />
          <Route path="/warehouses/details/:warehouseId" element={< WarehouseDetailsPage />} />
          <Route path="/inventories" element={<AllInventories/>}/>
          <Route path="/addwarehouses" element = {<AddWarehouse /> } />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App;