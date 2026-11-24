"use strict";

require("../css/communities.css");

console.log('Hello communities.js');
/*
$(".category").click(function() {
    alert(this.id); // or alert($(this).attr('id'));
});

*/

$(".category").click(function () {
  // localStorage.setItem('clicked', $(this).val());
  // alert(this.id);
  // var ruta = Routing.generate('FilterCC'); NEED options={"expose"=true} controller
  var idCategory = this.id;
  var ruta = './CommunitiesCryptoCategory'; //Ajax Function to send a get request

  $.ajax({
    type: "POST",
    url: ruta,
    data: {
      "catid": "1"
    },
    dataType: "json",
    success: function success(data) {
      console.log(data);
      var userselected = $(".category").text();
      var rutaFinal = '../public/communities?community=c.id&filterValue=' + idCategory; //alert(rutaFinal);
      // $('.latestpost').replaceWith('<div class="region">' + data + '</div>');
      //alert($("#categories_name :selected").text());

      location.href = rutaFinal;
    }
  });
}); //CryptoFormat

function formatCryptoData(crypto) {
  if (!crypto.id) {
    return crypto.text;
  }
  /*\img\cryptos\btc.png*/


  var baseUrl = "./img/cryptos";
  var $crypto = $('<span><img style="max-width:16px" src="' + baseUrl + '/' + crypto.text.toLowerCase() + '.png" class="img-crypto" /> ' + crypto.text + '</span>');
  return $crypto;
}

; //Categories((Cryptos))

$('#categories_name').select2({
  width: '100%',
  placeholder: "Select an Option",
  allowClear: true,
  templateResult: formatCryptoData,
  templateSelection: formatCryptoData
});
$(function () {
  var selected = localStorage.getItem('selected');

  if (selected) {
    $("#categories_name").val(selected); // Si se selecciona.
  }

  $("#categories_name").change(function () {
    localStorage.setItem('selected', $(this).val()); // var ruta = Routing.generate('FilterCC'); NEED options={"expose"=true} controller

    var ruta = './CommunitiesCryptoCategory'; //Ajax Function to send a get request

    $.ajax({
      type: "POST",
      url: ruta,
      data: {
        "catid": "1"
      },
      dataType: "json",
      success: function success(data) {
        console.log(data);
        var userselected = $("#categories_name :selected").val();
        var rutaFinal = '../public/communities?community=c.id&filterValue=' + userselected; // $('.latestpost').replaceWith('<div class="region">' + data + '</div>');
        //alert($("#categories_name :selected").text());

        location.href = rutaFinal;
      }
    });
  });
}); //New community convert to select2

$('#new_community_categories').select2({
  width: '100%',
  placeholder: "Select an Option",
  allowClear: true,
  templateResult: formatCryptoData,
  templateSelection: formatCryptoData
});