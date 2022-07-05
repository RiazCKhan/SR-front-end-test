import { useState } from "react";
import ShipmentListItem from "./ShipmentListItem";
import augShipment from "../data/api-data1";

export default function ShipmentList() {

  const [driverName, setDriverName] = useState("")
  const [tempNumber, setTempNumber] = useState("")
  const [truckName, setTruckName] = useState("")
  const [trailerSize, setTrailerSize] = useState("")

  console.log('driver name', driverName)
  console.log('temp #', tempNumber)
  console.log('truck name', truckName)
  console.log('trailer size', trailerSize)

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
        drivers={{... order.list[0]['elements']}}
        setDriverName={setDriverName}

        temp={order.list[1]['name']}
        tempNumber={tempNumber}
        setTempNumber={setTempNumber}

        truck={order.list[2]['name']}
        trucks={{... order.list[2]['elements']}}
        setTruckName={setTruckName}

        trailer={order.list[3]['name']}
        trailers={{... order.list[3]['elements']}}
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