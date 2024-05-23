import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage"
import "./App.scss";

require("dotenv").config();
const baseUrl = process.env.REACT_APP_BASE_URL

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<WarehousesPage />}/>
          <Route path="/warehouses" element={<WarehousesPage />} />
          <Route path="/warehouses/details/:warehouseId" element={< WarehouseDetailsPage baseUrl={baseUrl} />} />
          <Route path="/inventories"/>
        </Routes>
      <Footer />
    </Router>
  )
}

export default App;