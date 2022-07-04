import { jediOrder } from 'fontawesome'
import './PurchaseListItem.css'

export default function PurchaseListItem(props) {

  const { customer, purchaseOrderNumber, shipper, cases, index, customerName, updateHandler } = props

  return (
    <section className='purchase-card'>
      <article>
        <div>{customer}</div>
        <input
          type="text"
          name="customerName"
          id="customerName"
          value={customerName[index]}
          placeholder="String"
          onChange={(event) => updateHandler(index, { customerName: event.target.value })} />
      </article>

      <article>
        <div>{purchaseOrderNumber}</div>
        <input
          typeof='text'
          name="purchase-order-number"
          // value={purchaseOrderNumberInfo}
          placeholder="String"
          onChange={(event) => { }} />
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