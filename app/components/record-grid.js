import Ember from 'ember';

export default Ember.Component.extend({
	gridOptions: {
 
    columnDefs: [
      { headerName: "Product", field: "name" },
      { headerName: 'Units', field: 'units' },
      { headerName: 'Sales', field: 'sales' },
      { headerName: 'Profit', field: 'profit' }
    
    ] ,
     rowData: [
      {
        name: 'Chips',
        units: '223',
        sales: '$54,335',
        profit: '$545,454'
      },
      {
        name: 'MicroController',
        units: '965',
        sales: '$1,900',
        profit: '$800'
      },
      {
        name: 'RasberryPI',
        units: '965',
        sales: '$1,900',
        profit: '$800'
      },
      {
        name: 'ChipSet2',
        units: '555',
        sales: '$1,900',
        profit: '$800'
      },
      {
        name: 'ChipSet3',
        units: '555',
        sales: '$1,900',
        profit: '$800'
      },
      {
        name: 'ChipSet4',
        units: '555',
        sales: '$1,900',
        profit: '$800'
      },
      {
        name: 'ChipSet5',
        units: '555',
        sales: '$1,900',
        profit: '$800'
      }
      ]
 
  }
});
