import { useState } from "react";
import ShipmentListItem from "./ShipmentListItem";
import augShipment from "../data/api-data1";

export default function ShipmentList() {

  const [driverName, setDriverName] = useState({})
  const [tempNumber, setTempNumber] = useState({})
  const [truckName, setTruckName] = useState({})
  const [trailerSize, setTrailerSize] = useState({})

    // Get All Driver Name Data
    const updateDriverHandler = (index, driverName, data) => {
      let updateName = Object.assign({}, driverName)
      updateName[index] = data
      return updateName
    }
  
    // Get All Temp # Data
    const updateTempHandler = (index, tempNumber, data) => {
      let updateTemp = Object.assign({}, tempNumber)
      updateTemp[index] = data
      return updateTemp
    }
  
    // Get All Truck Name Data
    const updateTruckHandler = (index, truckName, data) => {
      let updateTruck = Object.assign({}, truckName)
      updateTruck[index] = data
      return updateTruck
    }
  
    // Get All Trailer Size Data 
    const updateTrailerHandler = (index, trailerSize, data) => {
      let updateTrailer = Object.assign({}, trailerSize)
      updateTrailer[index] = data
      return updateTrailer
    }

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
        updateDriverHandler={updateDriverHandler}

        tempNumber={tempNumber}
        setTempNumber={setTempNumber}
        updateTempHandler={updateTempHandler}

        truckName={truckName}
        setTruckName={setTruckName}
        updateTruckHandler={updateTruckHandler}

        trailerSize={trailerSize}
        setTrailerSize={setTrailerSize}
        updateTrailerHandler={updateTrailerHandler}
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