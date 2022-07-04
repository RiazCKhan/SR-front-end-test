import './ShipmentListItem.css'

export default function ShipmentListItem(props) {

  const { driver, driverOne, driverTwo, temp,
    truck, truckOne, truckTwo,
    trailer, trailerOne, trailerTwo } = props

  return (
    <>
      <section className='shipment-card'>
        <article>
          <div>{driver}</div>
          <select className='shipment-content'>
            <option> Select </option>
            <option> {driverOne} </option>
            <option> {driverTwo} </option>
          </select>
        </article>

        <article>
          <div>{temp}</div>
          <input className='shipment-content-temp' placeholder="Number" />
        </article>
      </section>

      <section className='shipment-card'>
        <article>
          <div>{truck}</div>
          <select className='shipment-content'>
            <option> Select </option>
            <option> {truckOne} </option>
          <option> {truckTwo} </option>
          </select>
        </article>

        <article>
          <div>{trailer}</div>
          <select className='shipment-content'>
            <option> Select </option>
            <option> {trailerOne} </option>
            <option> {trailerTwo} </option>
          </select>
        </article>
      </section>
    </>
  )
}