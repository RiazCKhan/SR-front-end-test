import { useState } from "react";
import PurchaseListItem from "./PurchaseListItem";
import augShipment from '../data/api-data1';

export default function PurchaseList() {

  const [customerName, setCustomerName] = useState({})

  const updateNameHandler = (index, customerName, data) => {
    let updateName = Object.assign({}, customerName)
    updateName[index] = data
    return updateName
  }

  console.log(customerName)

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