import { useState, useEffect } from "react";
import augShipment from '../data/api-data1';

import { Droppable, Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical } from '@fortawesome/free-solid-svg-icons'

import { aggregateCustomerShipData } from "../helpers/functions";

import "./PurchaseList.css";

export default function PurchaseList(props) {

  const { customerName, purchaseOrder, shipperName, caseNumber, handleChange, handleChange2, handleChange3, handleChange4, errorClass, setPurchaseData, customerOrders, index } = props

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
                    className={errorClass[index] === undefined ? null : errorClass[index]['name']}
                    type="text"
                    name="customer-name"
                    value={customerName[index] || ""}
                    placeholder="String"
                    onChange={(event) => { handleChange(event, index) }}
                  />
                </article>

                <article>
                  <div>{order.list[1]['name']}</div>
                  <input
                    className={errorClass[index] === undefined ? null : errorClass[index]['orderNum']}
                    type='text'
                    name="purchase-order-number"
                    value={purchaseOrder[index] || ""}
                    placeholder="String"
                    onChange={(event) => { handleChange2(event, index) }}
                  />
                </article>

                <article>
                  <div>{order.list[2]['name']}</div>
                  <input
                    className={errorClass[index] === undefined ? null : errorClass[index]['shipper']}
                    type="text"
                    name="shipper"
                    value={shipperName[index] || ""}
                    placeholder="String"
                    onChange={(event) => { handleChange3(event, index) }}
                  />
                </article>

                <article>
                  <div>{order.list[3]['name']}</div>
                  <input
                    className={errorClass[index] === undefined ? null : errorClass[index]['case']}
                    type="text"
                    name="cases"
                    value={caseNumber[index] || ""}
                    placeholder="Number"
                    onChange={(event) => { handleChange4(event, index) }}
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

