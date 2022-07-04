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
        trailer={order.list[3]['name']}
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