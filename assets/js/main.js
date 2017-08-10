
$(".btn-outline-primary").click(function(){
  $(this).toggleClass("active");
});


$("#select").click(function(){
  var html = "";

  $( ".active" ).each(function( index ) {
    html+='<p>'+$(this).attr('id')+'</p>'
    console.log(html);
  });

  $('#myModal').on('shown.bs.modal', function() {

    $('#myModal').find('.modal-body').append(html);
  });
  $("#myModal").modal('show');

});

$(".close").click(function(){
  console.log("refreshing now");
  location.reload();
});
