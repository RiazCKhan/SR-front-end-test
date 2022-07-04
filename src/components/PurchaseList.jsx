import PurchaseListItem from "./PurchaseListItem"
import augShipment from '../data/api-data1'

export default function PurchaseList() {

  const allOrders = augShipment[0].elements

  const eachOrder = allOrders.map((order) => {
    return (
      <PurchaseListItem
        key={order.id}
        customer={order.list[0]['name']}
        purchaseOrderNumber={order.list[1]['name']}
        shipper={order.list[2]['name']}
        cases={order.list[3]['name']}
      />
    )
  })

  return (
    <>
      {eachOrder}
    </>
  )
}