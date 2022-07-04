import './PurchaseListItem.css'

export default function PurchaseListItem(props) {

const { customer, purchaseOrderNumber, shipper, cases } = props

  return (
    <section className='purchase-card'>
      <article>
        <div>{customer}</div>
        <input placeholder="String" />
      </article>

      <article>
        <div>{purchaseOrderNumber}</div>
        <input placeholder="String" />
      </article>

      <article>
        <div>{shipper}</div>
        <input placeholder="String" />
      </article>

      <article>
        <div>{cases}</div>
        <input placeholder="Number" />
      </article>
    </section>
  )
}