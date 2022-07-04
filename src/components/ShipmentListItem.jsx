import './ShipmentListItem.css'

export default function ShipmentListItem(props) {

const { driver, temp, truck, trailer } = props

  return (
    <>
      <section className='shipment-card'>
        <article>
          <div>{driver}</div>
          <input placeholder="String" />
        </article>

        <article>
          <div>{temp}</div>
          <input placeholder="Number" />
        </article>
      </section>

      <section className='shipment-card'>
        <article>
          <div>{truck}</div>
          <input placeholder="String" />
        </article>

        <article>
          <div>{trailer}</div>
          <input placeholder="String" />
        </article>
      </section>
    </>
  )
}