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
  calculateCookieSales: function(){
    var allHours = [];
    var totalSales = 0;

    for (var i = 0; i < (this.closeTime - this.openTime); i++){
      salesPerHour = Math.floor(this.calculateCustomerPerHour() * this.cookiePerSale);
      allHours.push(salesPerHour);
      totalSales = totalSales + salesPerHour;
    }
    allHours.push(totalSales);
    return allHours;
  },

  display: function(){
    var timesOpenAndTotal = [];
    for (var i = this.openTime; i < this.closeTime + 1; i++){
      if(i < 12){
        timesOpenAndTotal.push(i + 'am: ');
      }else if(i === 12){
        timesOpenAndTotal.push(i + 'pm: ');
      }else if(i === this.closeTime){
        timesOpenAndTotal.push('Total:');
      }else{
        timesOpenAndTotal.push((i - 12) + 'pm:');
      }
    }

    var store = document.getElementById('LocationOne');
    store.textContent = this.locationName;
    for(var i = 0; i < timesOpenAndTotal.length; i++){
      var list = document.createElement('li');
      list.textContent = timesOpenAndTotal[i] + this.calculateCookieSales()[i] + ' cookies';
      store.appendChild(list);
    }
  }
};
