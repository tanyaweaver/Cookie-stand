var allStores = [];
function Location_1 (locationName,minCustomers,maxCustomers,cookiePerSale){
  this.locationName = locationName;
  this.openTime = 6;
  this.closeTime = 21;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.cookiePerSale = cookiePerSale;

  this.calculateCustomerPerHour = function(){
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  };

  this.calculateCookieSales = function(){
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
  };
};

var timesOpenAndTotal = []; //Array with every hour listed with am/pm and 'Total' at the end
function timeAndTotalArray(openTime,closeTime) {
  for (var i = openTime; i <= closeTime; i++){
    if(i < 12){
      timesOpenAndTotal.push(i + 'am');
    }else if(i === 12){
      timesOpenAndTotal.push(i + 'pm');
    }else if(i === closeTime){
      timesOpenAndTotal.push('Total');
    }else{
      timesOpenAndTotal.push((i - 12) + 'pm');
    }
  };
  return timesOpenAndTotal;
}

timeAndTotalArray(6,21);

function displayHeader() {
  var appendHeader = document.getElementById('header');
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = ('Location');
  tr.appendChild(th);
  appendHeader.appendChild(tr);
  for (var i = 0; i < timesOpenAndTotal.length; i++) {
    var th = document.createElement('th');
    th.textContent = timesOpenAndTotal[i];
    tr.appendChild(th);
  }
}

displayHeader();

function displaySales(location) {
  var appendRow = document.getElementById('sales');
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = location.locationName;
  tr.appendChild(th);
  appendRow.appendChild(tr);

  for (var i = 0; i < location.calculateCookieSales().length; i++) {
    td = document.createElement('td');
    td.textContent = location.calculateCookieSales()[i];
    tr.appendChild(td);
  }

}

allStores.push(new Location_1('Pike Place', 17, 88, 5.2));
allStores.push(new Location_1('Sea Tac Airport', 6, 24, 1.2));
allStores.push(new Location_1('South Center', 11, 38, 1.9));
allStores.push(new Location_1('Bellevue', 20, 48, 3.3));
allStores.push(new Location_1('Alki', 3, 24, 2.6));

for (var i = 0; i < allStores.length; i++) {
  displaySales(allStores[i]);
}
