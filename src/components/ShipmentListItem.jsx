import './ShipmentListItem.css'

export default function ShipmentListItem(props) {

  const { driver, drivers, setDriverName,
    temp, tempNumber, setTempNumber,
    truck, trucks, setTruckName,
    trailer, trailers, setTrailerSize, handleShipmentChange, shipError
  } = props

console.log(shipError)

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
          <select className={`${shipError.driver} shipment-content`}
            onChange={(event) => handleShipmentChange(event, "driver", setDriverName)} 
            >
            <option value=""> Select </option>
            {driverOptions}
          </select>
        </article>

        <article>
          <div>{temp}</div>
          <input
            type="text"
            name="temp"
            className={`${shipError.tempNum} shipment-content-temp`}
            placeholder="Number"
            value={tempNumber || ""}

            onChange={(event) => handleShipmentChange(event, "tempNum", setTempNumber)} 
            />
        </article>
      </section>

      <section className='shipment-card'>
        <article>
          <div>{truck}</div>
          <select className={`${shipError.truck} shipment-content`}
            onChange={(event) => handleShipmentChange(event, "truck", setTruckName)} 
            >
            <option value=""> Select </option>
            {truckOptions}
          </select>
        </article>

        <article>
          <div>{trailer}</div>
          <select className={`${shipError.trailer} shipment-content`}
            onChange={(event) => handleShipmentChange(event, "trailer", setTrailerSize)} 
            >
            <option value=""> Select </option>
            {trailerOptions}
          </select>
        </article>
      </section>
    </>
  )
}