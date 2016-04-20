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

  allStores.push(this);

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

var appendRow = document.getElementById('sales');

function displaySales(location) {
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

// Location_1.prototype.render = function() {
//   var appendRow = document.getElementById('sales');
//   var tr = document.createElement('tr');
//   var th = document.createElement('th');
//   th.textContent = this.locationName;
//   tr.appendChild(th);
//   appendRow.appendChild(tr);
//
//   for (var i = 0; i < this.calculateCookieSales().length; i++) {
//     td = document.createElement('td');
//     td.textContent = this.calculateCookieSales()[i];
//     tr.appendChild(td);
//   }

};

var pikePlace = new Location_1('Pike Place', 17, 88, 5.2);
var seaTac = new Location_1('Sea Tac Airport', 6, 24, 1.2);
var sourthCenter = new Location_1('South Center', 11, 38, 1.9);
var bellevue = new Location_1('Bellevue', 20, 48, 3.3);
var alki = new Location_1('Alki', 3, 24, 2.6);
for (var i = 0; i < allStores.length; i++) {
  displaySales(allStores[i]);
}  //needed so initial data shows

function handleAddChangeStore(event) {
  event.preventDefault();
  var store = event.target.store.value;
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.target.maxCust.value);
  var avgCookies = parseInt(event.target.averageCookies.value);

  appendRow.textContent = ' ';

  var newStore = new Location_1(store, minCust, maxCust, avgCookies);
  console.log('new store created', newStore);
  // allStores.push(newStore);
  for (var i = 0; i < allStores.length; i++) {
    displaySales(allStores[i]);
    console.log('New store created.');
  }
}
var salesPage = document.getElementById('sales-stores');
salesPage.addEventListener('submit', handleAddChangeStore);
