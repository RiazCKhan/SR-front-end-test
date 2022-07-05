import './PurchaseListItem.css'

export default function PurchaseListItem(props) {

  const { index, customer, purchaseOrderNumber, shipper, cases,
    customerName, setCustomerName, updateNameHandler,
    purchaseOrder, setPurchaseOrder, updatePurchaseHandler,
    shipperName, setShipperName, updateShipperHandler,
    caseNumber, setCaseNumber, updateCaseHandler
  } = props

  return (
    <section className='purchase-card'>
      <article>
        <div>{customer}</div>
        <input
          type="text"
          name="customer-name"
          placeholder="String"
          value={customerName[index] || ""}
          onChange={(event) => setCustomerName(updateNameHandler(index, customerName, event.target.value))}
        />
      </article>

      <article>
        <div>{purchaseOrderNumber}</div>
        <input
          typeof='text'
          name="purchase-order-number"
          value={purchaseOrder[index] || ""}
          placeholder="String"
          onChange={(event) => setPurchaseOrder(updatePurchaseHandler(index, purchaseOrder, event.target.value))}
        />
      </article>

      <article>
        <div>{shipper}</div>
        <input
          type="text"
          name="shipper"
          value={shipperName[index] || ""}
          placeholder="String"
          onChange={(event) => setShipperName(updateShipperHandler(index, shipperName, event.target.value))}
        />
      </article>

      <article>
        <div>{cases}</div>
        <input
          type="text"
          name="cases"
          value={caseNumber[index] || ""}
          placeholder="Number"
          onChange={(event) => setCaseNumber(updateCaseHandler(index, caseNumber, event.target.value))}
        />
      </article>
    </section>
  )
}