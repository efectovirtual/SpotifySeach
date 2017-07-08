$(document).ready(function(){


var buscarSpotify = function(busquedaQ) {

  var template = Handlebars.compile($('#contenido-spotify').html());
 
  var accessToken = 'BQA4xjicMqmim33ExpEpSNWVyqMXOJYaoa2dRTgQczTjPAR7ZeL_0tBoJFtJUF0DuS-iPCPRDnXIxjdSz82NPCucaelBUhcYwyvyNhOSgpmw1Yuj8BeHt_n2se9Ci13eNVDW3mIDJO89H8xQciCJYYeUaa3BWbYTIDjCThk';

   $.ajax({
     url: 'https://api.spotify.com/v1/search',
     dataType: 'json',
     method: "GET",
     data: {q: busquedaQ, type: 'track,artist'},
     headers: {
         'Authorization': 'Bearer ' + accessToken
     },                    
     success: function(data) {   

        $('.content').append(template({sPreview : data.tracks.items}));
                      
     }
  }); 

}

    $('#buscadorC').on('keyup', function(e) {

      $('.content').html('');
      var busqueda = $(this).val();
      
      if (e.which === 13) {
        buscarSpotify(busqueda);
      }

  });


});