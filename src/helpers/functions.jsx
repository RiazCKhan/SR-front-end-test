  // Get All Customer Name Data
  export const updateNameHandler = (index, customerName, data) => {
    let updateName = Object.assign({}, customerName)
    updateName[index] = data
    return updateName
  }

  // Get All Customer Purchase No. Data
  export const updatePurchaseHandler = (index, purchaseOrder, data) => {
    let updatePurchase = Object.assign({}, purchaseOrder)
    updatePurchase[index] = data
    return updatePurchase
  }

  // Get All Customer Shipping Data
  export const updateShipperHandler = (index, shipperName, data) => {
    let updateShipper = Object.assign({}, shipperName)
    updateShipper[index] = data
    return updateShipper
  }

  // Get All Customer Case Data 
  export const updateCaseHandler = (index, caseNumber, data) => {
    let updateCase = Object.assign({}, caseNumber)
    updateCase[index] = data
    return updateCase
  }

  // Get All Customer Data and Create one Obj for Axios Call
  export const aggregateCustomerShipData = (names, orderNums, shippers, cases) => {
    const result = {}
    let keys = Object.keys(names)

    for (const key of keys) {
      let obj = {
        name: names[key],
        orderNum: orderNums[key],
        shipper: shippers[key],
        cases: cases[key]
      }
      result[key] = obj
    }
    return result
  }