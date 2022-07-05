import axios from "axios"
import { useState } from "react"
import PurchaseList from "./PurchaseList"
import ShipmentList from "./ShipmentList"

import './Main.css'

export default function Main() {

  const [purchaseData, setPurchaseData] = useState([])
  const [shipmentData, setShipmentData] = useState([])

  const fakeSubmit = (event) => {
    event.preventDefault();

    console.log('Yah you did it!')
  }

  const submitForm = (event) => {
    event.preventDefault();

    if (Object.keys(purchaseData).length === 0) return null
    if (Object.keys(shipmentData).length === 0) return null

    const formData = {
      purchaseData,
      shipmentData
    }

    axios.post('/pathway', { formData })
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
        <button className="submit-btn" onClick={() => fakeSubmit()}>Submit</button>
      </div>
    </form>
  )
}