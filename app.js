var map
var petWelfare
this.myMap = function (weather) {
    petWelfare = { lat: 30.476297, lng:  -86.493117 };
    map = new google.maps.Map(document.getElementById('googleMap1'), {
        zoom: 16,
        center: petWelfare,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    })
    var marker = new google.maps.Marker({
        position: petWelfare,
        map: map
    });
}