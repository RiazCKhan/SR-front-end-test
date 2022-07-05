import { useState } from "react"
import PurchaseList from "./PurchaseList"
import ShipmentList from "./ShipmentList"

export default function Main() {

  const [purchaseData, setPurchaseData] = useState([])
  const [shipmentData, setShipmentData] = useState([])

  return (
    <>
      <PurchaseList
        setPurchaseData={setPurchaseData}
      />
      <ShipmentList />
    </>
  )
}