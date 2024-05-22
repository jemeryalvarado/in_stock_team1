import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          
         {/* @the person who is in charge of adding the warehouse component>>
         Please pass the "warehouses" component function as a prop in the "/" route as well.
         Since "/" is going to be homepage and our homepage is going to be warehouses.
         */}

          <Route path="/" element={<WarehousesPage />}/>
          <Route path="/warehouses" element={<WarehousesPage />} />
          <Route path="/inventories"/>
          <Route path="/addwarehouses" element = {<AddWarehouse /> } />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App;