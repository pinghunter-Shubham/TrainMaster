const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}

const navSpans = document.querySelectorAll('.booking-nav span');

navSpans.forEach(span => {
    span.addEventListener('click', function() {
        navSpans.forEach(sibling => sibling.classList.remove('active'));
        this.classList.add('active');
    });
});


const searchInput = document.querySelector('.search-input');
const trainData = document.getElementById('train-data');
const allTrains = [
    {trainNo: 12311, trainName: "Rajdhani Express", origin: "New Delhi", destination: "Kolkata", departureTime: "16:20", arrivalTime: "05:50"},
    {trainNo: 12002, trainName: "Shatabdi Express", origin: "Mumbai CST", destination: "Ahmedabad", departureTime: "06:10", arrivalTime: "02:00"},
    {trainNo: 12245, trainName: "Duronto Express", origin: "Delhi", destination: "Howrah", departureTime: "22:30", arrivalTime: "11:00"},
    {trainNo: 10104, trainName: "Goa Express", origin: "Mumbai CST", destination: "Goa", departureTime: "17:00", arrivalTime: "08:15"},
    {trainNo: 12354, trainName: "Himalayan Queen", origin: "Kalka", destination: "Shimla", departureTime: "10:30", arrivalTime: "14:15"},
    {trainNo: 12555, trainName: "Uttaranchal Sampark Kranti Express", origin: "Delhi", destination: "Dehradun", departureTime: "22:30", arrivalTime: "06:15"},
    {trainNo: 19023, trainName: "Intercity Express", origin: "Chennai Central", destination: "Bengaluru KSR", departureTime: "06:00", arrivalTime: "11:15"},
    {trainNo: 12624, trainName: "Double Decker Express", origin: "Kolkata", destination: "Puri", departureTime: "13:30", arrivalTime: "20:45"},
    {trainNo: 16317, trainName: "Island Express", origin: "Mangalore", destination: "Kanyakumari", departureTime: "22:40", arrivalTime: "10:30"},
    {trainNo: 12009, trainName: "Jan Shatabdi Express", origin: "Lucknow", destination: "Delhi", departureTime: "06:15", arrivalTime: "22:20"}
  ];
function displayTrains(trains) {
  trainData.innerHTML = "";
  trains.forEach(train => {
    const tableRow = `
      <tr>
        <td>${train.trainNo}</td>
        <td>${train.trainName}</td>
        <td>${train.origin}</td>
        <td>${train.destination}</td>
        <td>${train.departureTime}</td>
        <td>${train.arrivalTime}</td>
      </tr>
    `;
    trainData.insertAdjacentHTML('beforeend', tableRow);
  });
}

displayTrains(allTrains);

searchInput.addEventListener('keyup', function() {
  const searchTerm = this.value.toLowerCase();
  const filteredTrains = allTrains.filter(train => train.trainName.toLowerCase().includes(searchTerm));
  displayTrains(filteredTrains);
});
