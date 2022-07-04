import './ShipmentListItem.css'

export default function ShipmentListItem() {
  return (
    <>
      <section className='shipment-card'>
        <article>
          <div>Driver</div>
          <input placeholder="String" />
        </article>

        <article>
          <div>Temp</div>
          <input placeholder="String" />
        </article>
      </section>

      <section className='shipment-card'>
        <article>
          <div>Truck</div>
          <input placeholder="String" />
        </article>

        <article>
          <div>Trailer</div>
          <input placeholder="String" />
        </article>
      </section>
    </>
  )
}