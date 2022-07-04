import './ShipmentListItem.css'

export default function ShipmentListItem(props) {

const { driver, driverOne, driverTwo, temp, truck, trailer } = props

  return (
    <>
      <section className='shipment-card'>
        <article>
          <div>{driver}</div>
          <select>
            <option> Select </option>
            <option> {driverOne} </option>
            <option> {driverTwo} </option>
          </select>
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