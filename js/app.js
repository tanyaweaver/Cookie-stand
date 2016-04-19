var location_1 = {
  locationName: 'Pike Place',
  openTime: 6,
  closeTime: 21,
  minCustomers: 17,
  maxCustomers: 88,
  cookiePerSale: 5.2,

  calculateCustomerPerHour: function(){
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);

  },

  calculateCookieSales: function(){
    var allHours = []; //Array with sales for each hour, no time points included
    var totalSales = 0; //summing up elements of the array allHours[]
    var salesPerHour;

    for (var i = 0; i < (this.closeTime - this.openTime); i++){
      salesPerHour = Math.floor(this.calculateCustomerPerHour() * this.cookiePerSale);
      allHours.push(salesPerHour);
      totalSales = totalSales + salesPerHour;
    }
    allHours.push(totalSales); //adding total sales for the day to the end of the array
    return allHours;
  },

  display: function(){
    var timesOpenAndTotal = []; //Array with every hour listed with am/pm and 'Total' at the end
    for (var i = this.openTime; i <= this.closeTime; i++){
      if(i < 12){
        timesOpenAndTotal.push(i + 'am: ');
      }else if(i === 12){
        timesOpenAndTotal.push(i + 'pm: ');
      }else if(i === this.closeTime){
        timesOpenAndTotal.push('Total: ');
      }else{
        timesOpenAndTotal.push((i - 12) + 'pm: ');
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
location_1.display();

var location_2 = {
  locationName: 'Sea Tac Airport',
  openTime: 6,
  closeTime: 21,
  minCustomers: 6,
  maxCustomers: 24,
  cookiePerSale: 1.2,
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
    for (var i = this.openTime; i <= this.closeTime; i++){
      if(i < 12){
        timesOpenAndTotal.push(i + 'am: ');
      }else if(i === 12){
        timesOpenAndTotal.push(i + 'pm: ');
      }else if(i === this.closeTime){
        timesOpenAndTotal.push('Total: ');
      }else{
        timesOpenAndTotal.push((i - 12) + 'pm: ');
      }
    }

    var store = document.getElementById('LocationTwo');
    store.textContent = this.locationName;
    for(var i = 0; i < timesOpenAndTotal.length; i++){
      var list = document.createElement('li');
      list.textContent = timesOpenAndTotal[i] + this.calculateCookieSales()[i] + ' cookies';
      store.appendChild(list);
    }
  }
};
location_2.display();

var location_3 = {
  locationName: 'Southcenter',
  openTime: 6,
  closeTime: 21,
  minCustomers: 11,
  maxCustomers: 38,
  cookiePerSale: 1.9,
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
    for (var i = this.openTime; i <= this.closeTime; i++){
      if(i < 12){
        timesOpenAndTotal.push(i + 'am: ');
      }else if(i === 12){
        timesOpenAndTotal.push(i + 'pm: ');
      }else if(i === this.closeTime){
        timesOpenAndTotal.push('Total: ');
      }else{
        timesOpenAndTotal.push((i - 12) + 'pm: ');
      }
    }

    var store = document.getElementById('LocationThree');
    store.textContent = this.locationName;
    for(var i = 0; i < timesOpenAndTotal.length; i++){
      var list = document.createElement('li');
      list.textContent = timesOpenAndTotal[i] + this.calculateCookieSales()[i] + ' cookies';
      store.appendChild(list);
    }
  }
};
location_3.display();

var location_4 = {
  locationName: 'Bellevue Square',
  openTime: 6,
  closeTime: 21,
  minCustomers: 20,
  maxCustomers: 48,
  cookiePerSale: 3.3,
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
    for (var i = this.openTime; i <= this.closeTime; i++){
      if(i < 12){
        timesOpenAndTotal.push(i + 'am: ');
      }else if(i === 12){
        timesOpenAndTotal.push(i + 'pm: ');
      }else if(i === this.closeTime){
        timesOpenAndTotal.push('Total: ');
      }else{
        timesOpenAndTotal.push((i - 12) + 'pm: ');
      }
    }

    var store = document.getElementById('LocationFour');
    store.textContent = this.locationName;
    for(var i = 0; i < timesOpenAndTotal.length; i++){
      var list = document.createElement('li');
      list.textContent = timesOpenAndTotal[i] + this.calculateCookieSales()[i] + ' cookies';
      store.appendChild(list);
    }
  }
};
location_4.display();

var location_5 = {
  locationName: 'Alki',
  openTime: 6,
  closeTime: 21,
  minCustomers: 3,
  maxCustomers: 24,
  cookiePerSale: 2.6,
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
    for (var i = this.openTime; i <= this.closeTime; i++){
      if(i < 12){
        timesOpenAndTotal.push(i + 'am: ');
      }else if(i === 12){
        timesOpenAndTotal.push(i + 'pm: ');
      }else if(i === this.closeTime){
        timesOpenAndTotal.push('Total: ');
      }else{
        timesOpenAndTotal.push((i - 12) + 'pm: ');
      }
    }

    var store = document.getElementById('LocationFive');
    store.textContent = this.locationName;
    for(var i = 0; i < timesOpenAndTotal.length; i++){
      var list = document.createElement('li');
      list.textContent = timesOpenAndTotal[i] + this.calculateCookieSales()[i] + ' cookies';
      store.appendChild(list);
    }
  }
};
location_5.display();
