
var movies = {
  "happy": ["totoro", "howls", "kiki"],
  "sad": ["fireflies", "nauticaa", "marnie"],
  "romantic": ["marnie", "wind", "ponyo"]
};


$(".btn-outline-primary").click(function(){
  $(this).toggleClass("active");
});

$("#select").click(function(){
  var html = "";
  var selected = [];
  var exists = false;
  
  $( ".active" ).each(function( index ) {
    var results = movies[$(this).attr('id')];
    for (i = 0; i < results.length; i++) {
      for (j = 0; j < selected.length; j++) {
        if(results[i]==selected[j]){
          exists = true;
          break;
        }
        exists = false;
      }
      if(!exists){
        selected.push(results[i]);
        html+='<p>'+results[i]+'</p>'
      }
    }
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
