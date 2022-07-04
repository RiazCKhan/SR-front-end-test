import './PurchaseListItem.css'

export default function PurchaseListItem() {
  return (
    <section className='purchase-card'>
      <article>
        <div>Customer #</div>
        <input placeholder="String" />
      </article>

      <article>
        <div>Purchase Order #</div>
        <input placeholder="String" />
      </article>

      <article>
        <div>Shipper</div>
        <input placeholder="String" />
      </article>

      <article>
        <div>Cases</div>
        <input placeholder="String" />
      </article>
    </section>
  )
}