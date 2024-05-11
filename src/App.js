import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path="/warehouses"></Route>
          <Route path="/inventories"></Route>
        </Switch>
      <Footer />
    </Router>
  )
}

export default App;