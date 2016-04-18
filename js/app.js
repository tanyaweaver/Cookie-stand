var location_1 = {
  locationName: 'Pike Place',
  openTime: 6,
  closeTime: 20,
  minCustomers: 17,
  maxCustomers: 88,
  cookiePerSale: 5.2,
  calculateCustomerPerHour: function(){
    var customerPerHourRandom = Math.floor(Math.random() * (this.maxCustomers - (this.minCustomers + 1)) + this.minCustomers);
    return customerPerHourRandom;
  },
  calculateCookieSalesPerHour: function(){
    var allHours = [];
    var salesPerHour;
    for (var i = this.openTime; i < this.closeTime; i++){
      if(i < 12){
        salesPerHour = i + 'am: ' + Math.floor(this.calculateCustomerPerHour() * this.cookiePerSale) + 'cookies';
      }else if(i === 12){
        salesPerHour = i + 'pm: ' + Math.floor(this.calculateCustomerPerHour() * this.cookiePerSale) + 'cookies';
      }else{
        salesPerHour = (i - 12) + 'pm:' + Math.floor(this.calculateCustomerPerHour() * this.cookiePerSale) + 'cookies';
      }
      allHours.push(salesPerHour);
    }
    return allHours;
  },
  calculateTotalSales: function(){},
  display: function(){
    var store = document.getElementById('LocationOne');
    store.textContent = this.locationName;
    a = [];

    for(var i = 0; i < a.length; i++){
      var list = document.createElement('li');
      list.textContent = a[i];
      store.appendChild(list);
    }
  }
};
