import './ShipmentListItem.css'

export default function ShipmentListItem(props) {

  const { driver, drivers, temp,
    truck, truckOne, truckTwo,
    trailer, trailerOne, trailerTwo,
    driverName, setDriverName, updateDriverHandler,
    tempNumber, setTempNumber, updateTempHandler,
    truckName, setTruckName, updateTruckHandler, trailerSize,
    setTrailerSize, updateTrailerHandler
  } = props

  const allDrivers = Object.values(drivers)

  const driverOptions = allDrivers.map((driver) => {
    return (
      <option key={driver.id}> {driver.value} </option>
    )
  })

  return (
    <>
      <section className='shipment-card'>
        <article>
          <div>{driver}</div>
          <select className='shipment-content'>
            <option disabled={true} value=""> Select </option>
            {driverOptions}
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