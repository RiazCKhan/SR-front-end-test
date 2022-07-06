import axios from "axios"
import { useState } from "react"
import PurchaseList from "./PurchaseList"
import ShipmentList from "./ShipmentList"

import './Main.css'

export default function Main() {

  const [purchaseData, setPurchaseData] = useState([])
  const [shipmentData, setShipmentData] = useState([])

  const submitForm = (event) => {

    if (Object.keys(purchaseData).length === 0) return false
    if (Object.keys(shipmentData).length === 0) return false

    const formData = {
      purchaseData,
      shipmentData
    }

    axios.post('api/form', { formData })
      .then(res => console.log('Sending Data: ', formData))
      .catch(error => console.log('Oops... Something went wrong', error))
  }

  return (
    <form>
      <PurchaseList
        setPurchaseData={setPurchaseData}
      />
      <ShipmentList
        setShipmentData={setShipmentData}
      />
      <div className="btn-container">
        <button className="submit-btn" onClick={(event) => { submitForm(event) }}>Submit</button>
      </div>
    </form>
  )
}