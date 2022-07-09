import { useState } from "react"
import axios from "axios"
import PurchaseList from "./PurchaseList"
import ShipmentList from "./ShipmentList"
import augShipment from '../data/api-data1';

import { DragDropContext } from "react-beautiful-dnd";

import { updateNameHandler, updatePurchaseHandler, updateShipperHandler, updateCaseHandler } from "../helpers/functions";

import './Main.css'

export default function Main() {

  const [customerName, setCustomerName] = useState({})
  const [purchaseOrder, setPurchaseOrder] = useState({})
  const [shipperName, setShipperName] = useState({})
  const [caseNumber, setCaseNumber] = useState({})

  const [purchaseData, setPurchaseData] = useState([])
  const [shipmentData, setShipmentData] = useState([])

  const allPurchaseOrders = augShipment[0].elements
  const [customerOrders, setCustomerOrders] = useState(allPurchaseOrders)

  const initializeVal = () => {
    const invalidInputs = {};
    for (let key of Object.keys(allPurchaseOrders)) {
      if (!customerName[key] || customerName[key] === '') {
        let obj = {
          name: invalidInputs[key] = "valid",
          orderNum: invalidInputs[key] = "valid",
          shipper: invalidInputs[key] = "valid",
          case: invalidInputs[key] = "valid",

        }
        invalidInputs[key] = obj
      }
    }
    return invalidInputs
  }

  const [errorClass, setErrorClass] = useState(initializeVal())

  const handleOnDragEnd = (result) => {
    const orders = Array.from(customerOrders)
    const [reorderedItem] = orders.splice(result.source.index, 1);
    orders.splice(result.destination.index, 0, reorderedItem);
    setCustomerOrders(orders)
  }

  const validatePurchase = () => {
    const allPurchaseOrders = augShipment[0].elements
    const invalidInputs = {};

    for (let key of Object.keys(allPurchaseOrders)) {
      if (!customerName[key] || customerName[key] === '') {
        let obj = {
          name: invalidInputs[key] = "error",
          orderNum: invalidInputs[key] = "error",
          shipper: invalidInputs[key] = "error",
          case: invalidInputs[key] = "error",

        }
        invalidInputs[key] = obj
      }
    }
    setErrorClass(errorClass => ({
      ...errorClass,
      ...invalidInputs
    }))
  }

  const submitForm = (event) => {
    validatePurchase()

    const formData = {
      purchaseData,
      shipmentData
    }

    // axios.post('api/form', { formData })
    //   .then(res => console.log('Sending Data: ', formData))
    //   .catch(error => console.log('Oops... Something went wrong', error))
  }

  const customerOnChange = (event, index) => {
    setCustomerName(updateNameHandler(index, customerName, event.target.value))
  }

  const purchaseOrderOnChange = (event, index) => {
    setPurchaseOrder(updatePurchaseHandler(index, purchaseOrder, event.target.value))
  }

  const shipNameOnChange = (event, index) => {
    setShipperName(updateShipperHandler(index, shipperName, event.target.value))
  }

  const caseNumOnChange = (event, index) => {
    setCaseNumber(updateCaseHandler(index, caseNumber, event.target.value))
  }

  const handleChange = (event, id) => {
    const text = event.target.value;
    if (text.length >= 1) {
      setErrorClass(prevState => ({
        ...prevState,
        [id]: {
          ...prevState[id],
          name: "valid"
        }
      }))
    }
    customerOnChange(event, id);
  };

  const handleChange2 = (event, id) => {
    const text = event.target.value;
    if (text.length >= 1) {
      setErrorClass(prevState => ({
        ...prevState,
        [id]: {
          ...prevState[id],
          orderNum: "valid"
        }
      }))
    }
    purchaseOrderOnChange(event, id)
  };

  const handleChange3 = (event, id) => {
    const text = event.target.value;
    if (text.length >= 1) {
      setErrorClass(prevState => ({
        ...prevState,
        [id]: {
          ...prevState[id],
          shipper: "valid"
        }
      }))
    }
    shipNameOnChange(event, id)
  };

  const handleChange4 = (event, id) => {
    const text = event.target.value;
    if (text.length >= 1) {
      setErrorClass(prevState => ({
        ...prevState,
        [id]: {
          ...prevState[id],
          case: "valid"
        }
      }))
    }
    caseNumOnChange(event, id)
  };

  const purchaseItems = customerOrders.map((order, index) => (
    <PurchaseList
      key={order.id}
      setPurchaseData={setPurchaseData}
      customerName={customerName}
      purchaseOrder={purchaseOrder}
      shipperName={shipperName}
      caseNumber={caseNumber}
      handleChange={handleChange}
      handleChange2={handleChange2}
      handleChange3={handleChange3}
      handleChange4={handleChange4}
      index={index}
      errorClass={errorClass}
      customerOrders={customerOrders}
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