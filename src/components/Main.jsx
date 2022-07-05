import axios from "axios"
import { useState } from "react"
import PurchaseList from "./PurchaseList"
import ShipmentList from "./ShipmentList"

import './Main.css'

export default function Main() {

  const [purchaseData, setPurchaseData] = useState([])
  const [shipmentData, setShipmentData] = useState([])

  const fakeSubmit = () => {
    console.log('Yah you did it!')
  }

  const submitForm = () => {
    const formData = {
      purchaseData,
      shipmentData
    }

    axios.post('/pathway', { formData })
      .then(res => console.log('Sending Data: ', formData))
      .catch(error => console.log('Oops... Something went wrong', error))
  }

  return (
    <>
      <PurchaseList
        setPurchaseData={setPurchaseData}
      />
      <ShipmentList
        setShipmentData={setShipmentData}
      />
      <div>
        <button className="submit-btn" onClick={() => fakeSubmit()}>Submit</button>
      </div>
    </>
  )
}