import { useState } from "react"
import axios from "axios"
import PurchaseList from "./PurchaseList"
import ShipmentList from "./ShipmentList"
import augShipment from '../data/api-data1';

import { DragDropContext } from "react-beautiful-dnd";

import { updateNameHandler, updatePurchaseHandler, updateShipperHandler, updateCaseHandler, aggregateCustomerShipData } from "../helpers/functions";

import './Main.css'

export default function Main() {
  const [customerName, setCustomerName] = useState({})
  const allPurchaseOrders = augShipment[0].elements
  const [customerOrders, setCustomerOrders] = useState(allPurchaseOrders)

  const [purchaseData, setPurchaseData] = useState([])
  const [shipmentData, setShipmentData] = useState([])

  const validatePurchase = () => {
    const allPurchaseOrders = augShipment[0].elements

    let isValid = true
    const invalids = []
    for (let key of Object.keys(allPurchaseOrders)) {
      if (!customerName[key] || customerName[key] === '') {
        invalids.push(key)
        isValid = false
      }
    }
  }

  //  if invalids includes index = true, then apply errorClass
  // onChange --- If value is present (i.e., not undefined or "") then remove errorClass

  const submitForm = (event) => {
    validatePurchase()

    // const formData = {
    //   purchaseData,
    //   shipmentData
    // }

    // axios.post('api/form', { formData })
    //   .then(res => console.log('Sending Data: ', formData))
    //   .catch(error => console.log('Oops... Something went wrong', error))
  }

  const customerOnChange = (event, index) => {
    setCustomerName(updateNameHandler(index, customerName, event.target.value))
  }

  const handleChange = (event, id) => {
    const text = event.target.value;
    customerOnChange(event, id);
  };

  const handleOnDragEnd = (result) => {
    console.log(result)
    const orders = Array.from(customerOrders)
    const [reorderedItem] = orders.splice(result.source.index, 1);
    orders.splice(result.destination.index, 0, reorderedItem);
    setCustomerOrders(orders)
  }

  const purchaseItems = customerOrders.map((order, index) => (
    <PurchaseList
      key={order.id}
      setPurchaseData={setPurchaseData}
      customerName={customerName}
      handleChange={handleChange}
      index={index}
      errorClass={"error"}
      customerOrders={customerOrders}
      setCustomerOrders={setCustomerOrders}
    />
  ))

  return (
    <>
      <h3>{augShipment[0]['sectionTitle']}</h3>
      <form>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          {purchaseItems}
        </DragDropContext>
        <ShipmentList
          setShipmentData={setShipmentData}
        />
        <div className="btn-container">
          <button className="submit-btn" onClick={(event) => { submitForm(event) }}>Submit</button>
        </div>
      </form>
    </>
  )
}