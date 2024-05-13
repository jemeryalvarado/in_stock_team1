import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/warehouses"></Route>
          <Route path="/inventories"></Route>
        </Routes>
      <Footer />
    </Router>
  )
}

export default App;