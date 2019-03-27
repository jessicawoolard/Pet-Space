(function ($) {
    $(function () {
        $(function () {
            $('#form_signup_form').parsley();

        });
        window.initMap = function (latitude, longitude) {
            var latlng = new google.maps.LatLng(latitude, longitude);
            let map = new google.maps.Map(document.getElementById('map'), {
                center: latlng,
                zoom: 11
            });
            var cityCircle = new google.maps.Circle({

                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.35,
                map: map,
                center: latlng,
                radius: 1500
            });
        };

        let mapElement = $("#map");
        let latitude = mapElement.data("latitude");
        let longitude = mapElement.data("longitude");

        setTimeout(function() {
            initMap(latitude, longitude);
        }, 1000);



        // function loadCoordinates() {
        //     let user = $("#map").data("user-id");
        //     $.ajax('/api/users/' + user, {
        //         'method': 'GET',
        //         'success': function (data) {
        //             let latitude = data["latitude"];
        //             let longitude = data["longitude"];
        //             initMap(latitude, longitude)
        //         },
        //         'error': function (xhr) {
        //             console.log(xhr.statusText);
        //         }
        //     });
        // }
        //
        // loadCoordinates();

    });
}(jQuery));



