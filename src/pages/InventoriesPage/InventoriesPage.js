import "./InventoriesPage.scss";
import AllInventories from "../../components/AllInventories/AllInventories.js"

function InventoriesPage() {
  return (
    <div className="inventories-page">
      <div className="whitebox">
        <AllInventories />
      </div>
    </div>
  )
}

export default InventoriesPage;
