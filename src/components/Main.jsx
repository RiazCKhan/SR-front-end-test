import { useState } from "react"
import PurchaseList from "./PurchaseList"
import ShipmentList from "./ShipmentList"
import axios from "axios"
import augShipment from '../data/api-data1';

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical } from '@fortawesome/free-solid-svg-icons'

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
    console.log("i am validating your purchase")
    console.log(Object.keys(customerName))
    console.log(Object.values(customerName))
    console.log(Object.keys(allPurchaseOrders))

    let isValid = true
    const invalids = []
    for (let key of Object.keys(allPurchaseOrders)) {
      if (!customerName[key] || customerName[key] === '') {
        invalids.push(key)
        isValid = false
      }
    }

    console.log("but is it valid? ", isValid)
    console.log("the invalids: ", invalids)
  }

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
    console.log(id)
    console.log(event.target.value)
    const text = event.target.value;
    customerOnChange(event, id);
  };

  function handleOnDragEnd(result) {
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