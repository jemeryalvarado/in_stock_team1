import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/warehouses"></Route>
          <Route path="/inventories"></Route>
        </Routes>
      <Footer />
    </Router>
  )
}

export default App;