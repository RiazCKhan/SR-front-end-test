import { useState, useEffect } from "react";
import ShipmentListItem from "./ShipmentListItem";
import augShipment from "../data/api-data1";

export default function ShipmentList(props) {

  const { setShipmentData, shipError, setShipError, handleShipmentChange, driverName, setDriverName, setTempNumber, tempNumber, truckName, setTruckName, trailerSize, setTrailerSize } = props

  // useEffect Updating Parent State
  useEffect(() => {
    const aggregateShipmentData = {
      driverName,
      tempNumber,
      truckName,
      trailerSize
    }
    setShipmentData(aggregateShipmentData)
  }, [setShipmentData, driverName, tempNumber, truckName, trailerSize])

  const allShipmentOrders = augShipment[1].elements
  const eachShipmentOrder = allShipmentOrders.map((order) => {
    return (
      <ShipmentListItem
        key={order.id}
        driver={order.list[0]['name']}
        drivers={{ ...order.list[0]['elements'] }}
        driverName={driverName}
        setDriverName={setDriverName}

        temp={order.list[1]['name']}
        tempNumber={tempNumber}
        setTempNumber={setTempNumber}

        truck={order.list[2]['name']}
        trucks={{ ...order.list[2]['elements'] }}
        truckName={truckName}
        setTruckName={setTruckName}

        trailer={order.list[3]['name']}
        trailers={{ ...order.list[3]['elements'] }}
        trailerSize={trailerSize}
        setTrailerSize={setTrailerSize}

        handleShipmentChange={handleShipmentChange}
        shipError={shipError}
      />
    )
  })

  return (
    <>
      <h3>{augShipment[1]['sectionTitle']}</h3>
      {eachShipmentOrder}
    </>
  )
}