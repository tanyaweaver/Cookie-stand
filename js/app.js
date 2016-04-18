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
    //var salesPerHour;
    //var salesPerHourToArray;
    //var salesWithTimes = [];
    var totalSales = 0;

    for (var i = 0; i < (this.closeTime - this.openTime); i++){
      salesPerHour = Math.floor(this.calculateCustomerPerHour() * this.cookiePerSale);
      allHours.push(salesPerHour);
      totalSales = totalSales + salesPerHour;
    }
    allHours.push(totalSales);
    // for (var i = this.openTime; i < this.closeTime; i++){
    //   if(i < 12){
    //     salesPerHourToArray = i + 'am: ' + allHours[i] + 'cookies';
    //   }else if(i === 12){
    //     salesPerHourToArray = i + 'pm: ' + allHours[i] + 'cookies';
    //   }else{
    //     salesPerHourToArray = (i - 12) + 'pm:' + allHours[i] + 'cookies';
    //   }
    //   salesWithTimes.push(salesPerHourToArray);
    // }
    // //var totalSales =
    // return salesWithTimes
    return allHours;
  },
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
