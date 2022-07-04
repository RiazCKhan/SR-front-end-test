import './PurchaseListItem.css';

export default function PurchaseListItem() {
  return (
    <article className='purchase-card'>
      <section>
        <div>Customer #</div>
        <input placeholder="String" />
      </section>

      <section>
        <div>Purchase Order #</div>
        <input placeholder="String" />
      </section>

      <section>
        <div>Shipper</div>
        <input placeholder="String" />
      </section>

      <section>
        <div>Cases</div>
        <input placeholder="String" />
      </section>
    </article>
  )
}