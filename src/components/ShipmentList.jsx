import ShipmentListItem from "./ShipmentListItem";
import augShipment from "../data/api-data1";

export default function ShipmentList() {

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