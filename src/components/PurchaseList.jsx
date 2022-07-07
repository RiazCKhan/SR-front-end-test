import { useState, useEffect } from "react";
import augShipment from '../data/api-data1';

import { Droppable, Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical } from '@fortawesome/free-solid-svg-icons'

import { updateNameHandler, updatePurchaseHandler, updateShipperHandler, updateCaseHandler, aggregateCustomerShipData } from "../helpers/functions";

import "./PurchaseList.css";

export default function PurchaseList(props) {

  const { customerName, handleChange, index, errorClass, setPurchaseData, customerOrders, setCustomerOrders } = props

  const [purchaseOrder, setPurchaseOrder] = useState({})
  const [shipperName, setShipperName] = useState({})
  const [caseNumber, setCaseNumber] = useState({})


  // useEffect Updating Parent State
  useEffect(() => {
    setPurchaseData(aggregateCustomerShipData(customerName, purchaseOrder, shipperName, caseNumber))
  }, [setPurchaseData, customerName, purchaseOrder, shipperName, caseNumber])


  const order = customerOrders[index]

  return (
    <Droppable key={order.id} droppableId={order.id} index={index}>
      {(provided) => (
        <ul {...provided.droppableProps} ref={provided.innerRef}>
          <Draggable key={order.id} draggableId={order.id} index={index}>
            {(provided) => (
              <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className='purchase-card'> <FontAwesomeIcon icon={faGripVertical} size={"2x"} />
                <article>
                  <div>{order.list[0]['name']}</div>
                  <input
                    className={errorClass}
                    type="text"
                    name="customer-name"
                    value={customerName[index] || ""}
                    placeholder="String"
                    required
                    onChange={(event) => { handleChange(event, index) }}
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
            )}
          </Draggable>
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}

