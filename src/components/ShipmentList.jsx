import { useState } from "react";
import ShipmentListItem from "./ShipmentListItem";
import augShipment from "../data/api-data1";

export default function ShipmentList() {

  const [driverName, setDriverName] = useState({})
  const [tempNumber, setTempNumber] = useState({})
  const [truckName, setTruckName] = useState({})
  const [trailerSize, setTrailerSize] = useState({})

  const allShipmentOrders = augShipment[1].elements
  const eachShipmentOrder = allShipmentOrders.map((order) => {
    return (
      <ShipmentListItem
        key={order.id}
        driver={order.list[0]['name']}
        driverOne={order.list[0]['elements'][0]['value']}
        driverTwo={order.list[0]['elements'][1]['value']}

        temp={order.list[1]['name']}

        truck={order.list[2]['name']}
        truckOne={order.list[2]['elements'][0]['value']}
        truckTwo={order.list[2]['elements'][1]['value']}

        trailer={order.list[3]['name']}
        trailerOne={order.list[3]['elements'][0]['value']}
        trailerTwo={order.list[3]['elements'][1]['value']}

        driverName={driverName}
        setDriverName={setDriverName}

        tempNumber={tempNumber}
        setTempNumber={setTempNumber}

        truckName={truckName}
        setTruckName={setTruckName}

        trailerSize={trailerSize}
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