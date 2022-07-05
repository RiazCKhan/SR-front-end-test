import { useState } from "react";
import PurchaseListItem from "./PurchaseListItem";
import augShipment from '../data/api-data1';

export default function PurchaseList() {

  const [customerName, setCustomerName] = useState({})
  const [purchaseOrder, setPurchaseOrder] = useState({})
  const [shipperName, setShipperName] = useState({})
  const [caseNumber, setCaseNumber] = useState({})

  // Get All Customer Name Data
  const updateNameHandler = (index, customerName, data) => {
    let updateName = Object.assign({}, customerName)
    updateName[index] = data
    return updateName
  }

  // Get All Customer Purchase No. Data
  const updatePurchaseHandler = (index, purchaseOrder, data) => {
    let updatePurchase = Object.assign({}, purchaseOrder)
    updatePurchase[index] = data
    return updatePurchase
  }

  // Get All Customer Shipping Data
  const updateShipperHandler = (index, shipperName, data) => {
    let updateShipper = Object.assign({}, shipperName)
    updateShipper[index] = data
    return updateShipper
  }

  // Get All Customer Case Data 
  const updateCaseHandler = (index, caseNumber, data) => {
    let updateCase = Object.assign({}, caseNumber)
    updateCase[index] = data
    return updateCase
  }

  // Get All Customer Data and Create one Obj for Axios Call
  const aggregateData = (names, orderNums, shippers, cases) => {
    const result = {}
    let keys = Object.keys(names)

    for (const key of keys) {
      let obj = {
        name: names[key],
        orderNum: orderNums[key],
        shipper: shippers[key],
        cases: cases[key]
      }
      result[key] = obj
    }
    return result
  }

  aggregateData(customerName, purchaseOrder, shipperName, caseNumber)

  const allPurchaseOrders = augShipment[0].elements
  const eachPurchaseOrder = allPurchaseOrders.map((order, index) => {
    return (
      <PurchaseListItem
        key={order.id}
        {...order}
        index={index}
        customer={order.list[0]['name']}
        purchaseOrderNumber={order.list[1]['name']}
        shipper={order.list[2]['name']}
        cases={order.list[3]['name']}

        customerName={customerName}
        setCustomerName={setCustomerName}
        updateNameHandler={updateNameHandler}

        purchaseOrder={purchaseOrder}
        setPurchaseOrder={setPurchaseOrder}
        updatePurchaseHandler={updatePurchaseHandler}

        shipperName={shipperName}
        setShipperName={setShipperName}
        updateShipperHandler={updateShipperHandler}

        caseNumber={caseNumber}
        setCaseNumber={setCaseNumber}
        updateCaseHandler={updateCaseHandler}
      />
    )
  })

  return (
    <>
      <h3>{augShipment[0]['sectionTitle']}</h3>
      {eachPurchaseOrder}
    </>
  )
}