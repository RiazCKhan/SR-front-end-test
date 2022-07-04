import { jediOrder } from 'fontawesome'
import './PurchaseListItem.css'

export default function PurchaseListItem(props) {

  const { index, customer, purchaseOrderNumber, shipper, cases,
    customerName, setCustomerName, updateNameHandler,
    purchaseOrder, setPurchaseOrder, updatePurchaseHandler
  } = props

  return (
    <section className='purchase-card'>
      <article>
        <div>{customer}</div>
        <input
          type="text"
          name="customer-name"
          placeholder="String"
          value={customerName[index] || ""}
          onChange={(event) => setCustomerName(updateNameHandler(index, customerName, event.target.value))} />
      </article>

      <article>
        <div>{purchaseOrderNumber}</div>
        <input
          typeof='text'
          name="purchase-order-number"
          value={purchaseOrder[index] || ""}
          placeholder="String"
          onChange={(event) => setPurchaseOrder(updatePurchaseHandler(index, purchaseOrder, event.target.value))} />
      </article>

      <article>
        <div>{shipper}</div>
        <input
          type="text"
          name="shipper"
          // value={purchaseOrderShipperInfo}
          placeholder="String"
          onChange={(event) => { }} />
      </article>

      <article>
        <div>{cases}</div>
        <input
          type="text"
          name="cases"
          // value={purchaseOrderCasesInfo}
          placeholder="Number"
          onChange={(event) => { }} />
      </article>
    </section>
  )
}