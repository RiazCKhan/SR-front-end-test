const data2 = [{
  id: 1,
  sectionTitle: 'Shipment May',
  type: 'list',
  column: 4,
  prop: 'shipments',
  draggable: true,
  elements: [
    {
      id: "2",
      type: 'element-group',
      width: '12',
      name: "driver-picker",
      list: [
        {
          id: 4,          
          name: 'Purchase Order No.',
          placeholder: 'String',
          value: '',
          require: true,
          passedCheck: true,
          type: 'string',
          width: '3',
          prop: 'purchase_order_no',
        },
        {
          id: 5,          
          name: 'Shipper',
          placeholder: 'String',
          value: '',
          require: true,
          passedCheck: true,
          type: 'string',
          width: '3',
          prop: 'shipper',
        },
        
        {
          id: 6,          
          name: 'Cases',
          placeholder: 'Number',
          value: '',
          require: true,
          passedCheck: true,
          type: 'number',
          width: '3',
          prop: 'cases',
        }
      ]
    },
    {
      id: "7",
      type: 'element-group',
      width: '12',
      name: "driver-picker",
      list: [
        {
          id: 11,          
          name: 'Customer 1',
          placeholder: 'String',
          value: '',
          require: true,
          passedCheck: true,
          type: 'string',
          width: '3',
          prop: 'cases',
        }
      ]
    },
    {
      id: "12",
      type: 'element-group',
      width: '12',
      name: "driver-picker",
      list: [
        {
          id: 13,          
          name: 'Customer 2',
          placeholder: 'String',
          value: '',
          require: true,
          passedCheck: true,
          type: 'string',
          width: '3',
          prop: 'customer',
        },
        {
          id: 14,          
          name: 'Purchase Order No.',
          placeholder: 'String',
          value: '',
          require: true,
          passedCheck: true,
          type: 'string',
          width: '3',
          prop: 'purchase_order_no',
        },
        {
          id: 15,          
          name: 'Shipper',
          placeholder: 'String',
          value: '',
          require: true,
          passedCheck: true,
          type: 'string',
          width: '3',
          prop: 'shipper',
        },
        {
          id: 16,          
          name: 'Cases',
          placeholder: 'Number',
          value: '',
          require: true,
          passedCheck: true,
          type: 'number',
          width: '3',
          prop: 'cases',
        }
      ]
    },
    {
      id: "17",
      type: 'element-group',
      width: '12',
      name: "driver-picker",
      list: [
        {
          id: 18,          
          name: 'Customer 3',
          placeholder: 'String',
          value: '',
          require: true,
          passedCheck: true,
          type: 'string',
          width: '3',
          prop: 'customer',
        },
        {
          id: 21,          
          name: 'Cases',
          placeholder: 'Number',
          value: '',
          require: true,
          passedCheck: true,
          type: 'number',
          width: '3',
          prop: 'cases',
        }
      ]
    },
  ]
},
{
sectionTitle: "New Shippment",
row: 2,
column: 2,
id: 22,
formType: 'normal',
elements: [
  {
    id: 23,
    type: 'element-group',
    width: '12',
    list: [
      {
        name: "Driver", 
        type: 'dropdown',
        id: 24,
        require: true,
        passedCheck: true,
        value:'',
        elements: [{ id: 1, value: 'Steve' }, { id: 2, value: 'Mike' }]
      },
      {
        name: "Temp", 
        type: 'number',
        placeholder: "Number",
        id: 25,
        require: true,
        passedCheck: true,
        value:'',
      },

      {
        id: 26,
        name: 'Truck',
        type: 'dropdown',
        width: '6',
        prop: 'driver',
        require: true,
        passedCheck: true,
        value:'',
        elements: [{ id: 1, value: 'Purple 1' }, { id: 2, value: 'Yellow 2' }]
      },
      {
        id: 27,
        name: 'Trailer',
        type: 'dropdown',
        width: '6',
        prop: 'trailer',
        require: true,
        passedCheck: true,
        value:'',
        elements: [{ id: 1, value: 'Small' }, { id: 2, value: 'Large' }]
      },
    ]
  }
]
},
{
  id: 1,
  sectionTitle: 'Shipment June',
  type: 'list',
  column: 4,
  prop: 'shipments',
  draggable: true,
  elements: [
    {
      id: "2",
      type: 'element-group',
      width: '12',
      name: "driver-picker",
      list: [
        {
          id: 4,          
          name: 'Purchase Order No.',
          placeholder: 'String',
          value: '',
          require: true,
          passedCheck: true,
          type: 'string',
          width: '3',
          prop: 'purchase_order_no',
        },
        {
          id: 5,          
          name: 'Shipper',
          placeholder: 'String',
          value: '',
          require: true,
          passedCheck: true,
          type: 'string',
          width: '3',
          prop: 'shipper',
        },
        
        {
          id: 6,          
          name: 'Cases',
          placeholder: 'Number',
          value: '',
          require: true,
          passedCheck: true,
          type: 'number',
          width: '3',
          prop: 'cases',
        }
      ]
    },
    {
      id: "7",
      type: 'element-group',
      width: '12',
      name: "driver-picker",
      list: [
        {
          id: 11,          
          name: 'Cases',
          placeholder: 'Number',
          value: '',
          require: true,
          passedCheck: true,
          type: 'number',
          width: '3',
          prop: 'cases',
        }
      ]
    },
    {
      id: "12",
      type: 'element-group',
      width: '12',
      name: "driver-picker",
      list: [
        {
          id: 13,          
          name: 'Customer2',
          placeholder: 'String',
          value: '',
          require: true,
          passedCheck: true,
          type: 'string',
          width: '3',
          prop: 'customer',
        },
        {
          id: 14,          
          name: 'Purchase Order No.',
          placeholder: 'String',
          value: '',
          require: true,
          passedCheck: true,
          type: 'string',
          width: '3',
          prop: 'purchase_order_no',
        },
        {
          id: 15,          
          name: 'Shipper',
          placeholder: 'String',
          value: '',
          require: true,
          passedCheck: true,
          type: 'string',
          width: '3',
          prop: 'shipper',
        },
        {
          id: 16,          
          name: 'Cases',
          placeholder: 'Number',
          value: '',
          require: true,
          passedCheck: true,
          type: 'number',
          width: '3',
          prop: 'cases',
        }
      ]
    },
  ]
},
]