import { useState } from "react";
import PurchaseListItem from "./PurchaseListItem";
import augShipment from '../data/api-data1';

export default function PurchaseList() {

  const [customerName, setCustomerName] = useState({})
  const [purchaseOrder, setPurchaseOrder] = useState({})
  const [shipperName, setShipperName] = useState({})
  const [caseNumber, setCaseNumber] = useState({})

  console.log(customerName)
  console.log(purchaseOrder)

  const updateNameHandler = (index, customerName, data) => {
    let updateName = Object.assign({}, customerName)
    updateName[index] = data
    return updateName
  }

  const updatePurchaseHandler = (index, purchaseOrder, data) => {
    let updatePurchase = Object.assign({}, purchaseOrder)
    updatePurchase[index] = data
    return updatePurchase
  }

  const updateShipperHandler = (index, shipperName, data) => {
    let updateShipper = Object.assign({}, shipperName)
    updateShipper[index] = data
    return updateShipper
  }

  const updateCaseHandler = (index, caseNumber, data) => {
    let updateCase = Object.assign({}, caseNumber)
    updateCase[index] = data
    return updateCase
  }


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