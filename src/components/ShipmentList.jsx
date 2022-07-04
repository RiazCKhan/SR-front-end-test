import ShipmentListItem from "./ShipmentListItem";
import augShipment from "../data/api-data1";

export default function ShipmentList() {

  const allShipmentOrders = augShipment[1].elements

  const eachShipmentOrder = allShipmentOrders.map((order) => {
    return (
      <ShipmentListItem 
      key={order.id}
      driver={order.list[0]['name']}
      Temp={order.list[1]['name']}
      Truck={order.list[2]['name']}
      Trailer={order.list[3]['name']}
      />
    )
  })

  return (
    <>
    {eachShipmentOrder}
    </>
  )
}