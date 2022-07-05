import { useState, useEffect } from "react";
import ShipmentListItem from "./ShipmentListItem";
import augShipment from "../data/api-data1";

export default function ShipmentList(props) {

const { setShipmentData } = props

  const [driverName, setDriverName] = useState("")
  const [tempNumber, setTempNumber] = useState("")
  const [truckName, setTruckName] = useState("")
  const [trailerSize, setTrailerSize] = useState("")

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
        setDriverName={setDriverName}

        temp={order.list[1]['name']}
        tempNumber={tempNumber}
        setTempNumber={setTempNumber}

        truck={order.list[2]['name']}
        trucks={{ ...order.list[2]['elements'] }}
        setTruckName={setTruckName}

        trailer={order.list[3]['name']}
        trailers={{ ...order.list[3]['elements'] }}
        setTrailerSize={setTrailerSize}
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