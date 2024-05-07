document.getElementById('deliveryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var deliveryAddress = document.getElementById('deliveryAddress').value;
    var deliveryItem = document.getElementById('deliveryItem').value;

    console.log('Delivery Request:');
    console.log('Delivery Address: ' + deliveryAddress);
    console.log('Item for Delivery: ' + deliveryItem);
});

document.getElementById('rideForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var pickupLocation = document.getElementById('pickupLocation').value;
    var dropoffLocation = document.getElementById('dropoffLocation').value;

    console.log('Ride Request:');
    console.log('Pickup Location: ' + pickupLocation);
    console.log('Dropoff Location: ' + dropoffLocation);
});