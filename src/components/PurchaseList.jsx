import { useState, useEffect } from "react";
import augShipment from '../data/api-data1';

import "./PurchaseList.css";

export default function PurchaseList(props) {

  const { setPurchaseData } = props

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
  const aggregateCustomerShipData = (names, orderNums, shippers, cases) => {
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

  // useEffect Updating Parent State
  useEffect(() => {
    setPurchaseData(aggregateCustomerShipData(customerName, purchaseOrder, shipperName, caseNumber))
  }, [setPurchaseData, customerName, purchaseOrder, shipperName, caseNumber])

  const allPurchaseOrders = augShipment[0].elements

  return (
    <>
      <h3>{augShipment[0]['sectionTitle']}</h3>
      <ul>
        {allPurchaseOrders.map((order, index) => {
          return (
            <li key={order.id} className='purchase-card'>
                <article>
                  <div>{order.list[0]['name']}</div>
                  <input
                    type="text"
                    name="customer-name"
                    value={customerName[index] || ""}
                    placeholder="String"
                    required
                    minLength="3"
                    onChange={(event) => setCustomerName(updateNameHandler(index, customerName, event.target.value))}
                  />
                </article>

                <article>
                  <div>{order.list[1]['name']}</div>
                  <input
                    typeof='text'
                    name="purchase-order-number"
                    value={purchaseOrder[index] || ""}
                    placeholder="String"
                    required
                    onChange={(event) => setPurchaseOrder(updatePurchaseHandler(index, purchaseOrder, event.target.value))}
                  />
                </article>

                <article>
                  <div>{order.list[2]['name']}</div>
                  <input
                    type="text"
                    name="shipper"
                    value={shipperName[index] || ""}
                    placeholder="String"
                    required
                    minLength="3"
                    onChange={(event) => setShipperName(updateShipperHandler(index, shipperName, event.target.value))}
                  />
                </article>

                <article>
                  <div>{order.list[3]['name']}</div>
                  <input
                    type="text"
                    name="cases"
                    value={caseNumber[index] || ""}
                    placeholder="Number"
                    required
                    onChange={(event) => setCaseNumber(updateCaseHandler(index, caseNumber, event.target.value))}
                  />
                </article>
            </li>
          )
        })}
      </ul>
    </>
  )
}