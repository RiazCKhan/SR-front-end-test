import ShipmentListItem from "./ShipmentListItem";
import augShipment from "../data/api-data1";

export default function ShipmentList() {

  const allShipmentOrders = augShipment[1].elements

  
  const eachShipmentOrder = allShipmentOrders.map((order) => {
    console.log(order.list[1]['name'])
    return (
      <ShipmentListItem 
      key={order.id}
      driver={order.list[0]['name']}
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