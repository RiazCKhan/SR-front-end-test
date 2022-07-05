import './ShipmentListItem.css'
import './Error.css';

export default function ShipmentListItem(props) {

  const { driver, drivers, setDriverName, 
    temp, tempNumber, setTempNumber,
    truck, trucks, setTruckName,
    trailer, trailers, setTrailerSize
  } = props

  const allDrivers = Object.values(drivers)
  const driverOptions = allDrivers.map((driver) => {
    return (
      <option key={driver.id} value={driver.value}> {driver.value} </option>
    )
  })

  const allTrucks = Object.values(trucks)
  const truckOptions = allTrucks.map((truck) => {
    return (
      <option key={truck.id} value={truck.value}> {truck.value} </option>
    )
  })

  const allTrailers = Object.values(trailers)
  const trailerOptions = allTrailers.map((size) => {
    return (
      <option key={size.id} value={size.value}> {size.value} </option>
    )
  })

  return (
    <>
      <section className='shipment-card'>
        <article>
          <div>{driver}</div>
          <select className='shipment-content' required
            onChange={(event) => setDriverName(event.target.value)} >
            <option value=""> Select </option>
            {driverOptions}
          </select>
        </article>

        <article>
          <div>{temp}</div>
          <input
            type="text"
            name="temp"
            className='shipment-content-temp'
            placeholder="Number"
            value={tempNumber || ""}
            required
            onChange={(event) => setTempNumber(event.target.value)} />
        </article>
      </section>

      <section className='shipment-card'>
        <article>
          <div>{truck}</div>
          <select className='shipment-content' required
            onChange={(event) => setTruckName(event.target.value)} >
            <option value=""> Select </option>
            {truckOptions}
          </select>
        </article>

        <article>
          <div>{trailer}</div>
          <select className='shipment-content' required
            onChange={(event) => setTrailerSize(event.target.value)} >
            <option value=""> Select </option>
            {trailerOptions}
          </select>
        </article>
      </section>
    </>
  )
}