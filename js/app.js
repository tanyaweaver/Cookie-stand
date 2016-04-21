var allStores = [];
function Location (locationName,minCustomers,maxCustomers,cookiePerSale){
  this.locationName = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.cookiePerSale = cookiePerSale;
  allStores.push(this);
}

Location.prototype.calculateCustomerPerHour = function(){
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
};

Location.prototype.calculateCookieSales = function(){
  var allHours = []; //Array with sales for each hour, no time points included
  var totalSales = 0; //summing up elements of the array allHours[]
  var salesPerHour;

  for (var i = 0; i < 15; i++){
    salesPerHour = Math.floor(this.calculateCustomerPerHour() * this.cookiePerSale);
    allHours.push(salesPerHour);
    totalSales = totalSales + salesPerHour;
  }
  allHours.push(totalSales); //adding total sales for the day to the end of the array
  return allHours;
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
};

var pikePlace = new Location('Pike Place', 17, 88, 5.2);
var seaTac = new Location('Sea Tac Airport', 6, 24, 1.2);
var sourthCenter = new Location('South Center', 11, 38, 1.9);
var bellevue = new Location('Bellevue', 20, 48, 3.3);
var alki = new Location('Alki', 3, 24, 2.6);
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

  var newStore = new Location(store, minCust, maxCust, avgCookies);

//if store already in exists, then update the sales
  for (var i = 0; i < allStores.length - 1; i++) {
    if(newStore.locationName === allStores[i].locationName){
      allStores[i] = newStore; //newStore replaces the line with the same locationName
      allStores.splice(allStores.length - 1, 1); //remove newStore from the last position in the array
    }
  }
  for (var i = 0; i < allStores.length; i++) {
    displaySales(allStores[i]);

  }
  // resetting the html form fields - doesn't work though
  store = null;
  minCust = null;
  maxCust = null;
  avgCookies = null;
}
var salesPage = document.getElementById('sales-stores');
salesPage.addEventListener('submit', handleAddChangeStore);
