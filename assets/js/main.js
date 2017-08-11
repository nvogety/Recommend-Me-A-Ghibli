
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
        html+="<div class='card' style='width: 25rem; margin: 20px auto'><img class='card-img-top' src='"+info[results[i]].img+"' alt='Card image cap'><div class='card-block'><h4 class='card-title'>"+info[results[i]].name+"</h4><p class='card-text'>"+info[results[i]].text+"</p><a href='"+info[results[i]].link+"' class='btn btn-primary'>Wikipedia Article</a></div></div>"
        //html+='<p>'+results[i]+'</p>'
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

var movies = {
  "happy": ["totoro", "kiki", "ponyo", "onlyYesterday"],
  "sad": ["fireflies", "windRises", "kaguya"],
  "romantic": ["howl", "poppyHill", "whisperHearts"],
  "nostalgic": ["totoro", "mononoke", "howl", "spiritedAway"],
  "adventure": ["arrietty", "mononoke", "nausicaa", "earthSea"],
  "comedy": ["catReturns", "porco"],
  "fantasy": ["spiritedAway", "nausicaa", "earthSea"],
  "random": ["mononoke", "arrietty", "windRises"]
};

var info = {
  "totoro":{
    name: 'My Neighbor Totoro',
    img: 'http://static.tvtropes.org/pmwiki/pub/images/totorogang.png',
    text: 'Dummy Text',
    link: 'https://en.wikipedia.org/wiki/My_Neighbor_Totoro'
  },
  "kiki":{
    name: "Kiki's Delivery Service",
    img: 'http://wallpapersin4k.net/wp-content/uploads/2017/02/Kikis-Delivery-Service-Movie-Wallpapers-3.jpg',
    text: 'Dummy Text',
    link: 'https://en.wikipedia.org/wiki/Kiki%27s_Delivery_Service'
  },
  "ponyo":{
    name: "Ponyo",
    img: 'http://3.bp.blogspot.com/_YO8CezyesrM/TFoV8J9uPKI/AAAAAAAAD3s/By_KMySHb94/s400/ponyo1_.jpg',
    text: 'Dummy Text',
    link: 'https://en.wikipedia.org/wiki/Ponyo'
  },
  "onlyYesterday":{
    name: "Only Yesterday",
    img: 'https://i0.wp.com/thewellredmage.files.wordpress.com/2016/12/960.jpg?w=386&h=217&crop&ssl=1',
    text: 'Dummy Text',
    link: 'https://en.wikipedia.org/wiki/Only_Yesterday_(1991_film)'
  },
  "fireflies":{
    name: "Grave of the Fireflies",
    img: 'https://lh3.googleusercontent.com/op3b9-3ceoCWvfTWSIG0jQODm7DBTipbMkCZB5qNpMzhocPvhYH1wFmnR68ttnsgLwQZslszuc3dvLrq=w480-h257-no',
    text: 'Dummy Text',
    link: 'https://en.wikipedia.org/wiki/Grave_of_the_Fireflies'
  },
  "windRises":{
    name: "The Wind Rises",
    img: 'https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/CWA/image/YfNOovU1EAn60M2hzvfeigHF420.jpeg',
    text: 'Dummy Text',
    link: 'https://en.wikipedia.org/wiki/The_Wind_Rises'
  },
  "kaguya":{
    name: "The Tale of the Princess Kaguya",
    img: 'http://1.bp.blogspot.com/-OrF4F8uOslU/VabYCPL184I/AAAAAAAAhVk/rEzyGOrns68/w1200-h630-p-k-no-nu/princesa-Kaguya-banner-alto.jpg',
    text: 'Dummy Text',
    link: 'https://en.wikipedia.org/wiki/The_Tale_of_the_Princess_Kaguya'
  },
  "howl":{
    name: "Howl's Moving Castle",
    img: 'https://68.media.tumblr.com/c603efb87b955b26aa4ae35aac3bf82f/tumblr_n04arm3TlF1rx69rlo1_500.jpg',
    text: 'Dummy Text',
    link: 'https://en.wikipedia.org/wiki/Howl%27s_Moving_Castle_(film)'
  },
  "poppyHill":{
    name: "From Up on Poppy Hill",
    img: 'http://2.bp.blogspot.com/-_YvRYCFq8pQ/TwKKB98P0AI/AAAAAAAAAdc/nalINDtm-xw/s1600/qZeTpKWZkp6VrQ.jpg',
    text: 'Dummy Text',
    link: 'https://en.wikipedia.org/wiki/From_Up_on_Poppy_Hill'
  },
  "whisperHearts":{
    name: "Whisper of the Heart",
    img: 'http://movieboozer.com/wp-content/uploads/2015/09/whisper-of-the-heart-50f08d724491d-498x280.jpg',
    text: 'Dummy Text',
    link: 'https://en.wikipedia.org/wiki/Whisper_of_the_Heart'
  },
  "mononoke":{
    name: "Princess Mononoke",
    img: 'https://livingstorymode.files.wordpress.com/2017/01/mononoke.jpg?w=461&h=259',
    text: 'Dummy Text',
    link: 'https://en.wikipedia.org/wiki/Princess_Mononoke'
  },
  "spiritedAway":{
    name: "Spirited Away",
    img: 'http://1.bp.blogspot.com/-VY0E5GwGoQg/Uewry672fBI/AAAAAAAABRg/VmKy0DcfJyk/s1600/large.jpg',
    text: 'Dummy Text',
    link: 'https://en.wikipedia.org/wiki/Spirited_Away'
  },
  "arrietty":{
    name: "The Secret World of Arrietty",
    img: 'https://upload.wikimedia.org/wikipedia/hu/6/6f/Arrietty.png',
    text: 'Dummy Text',
    link: 'https://en.wikipedia.org/wiki/Arrietty'
  },
  "nausicaa":{
    name: "Nausicaa of the Valley of the Wind ",
    img: 'https://pics.prcm.jp/7emmnrsy7/24490917/jpeg/24490917.jpeg',
    text: 'Dummy Text',
    link: 'https://en.wikipedia.org/wiki/Nausica%C3%A4_of_the_Valley_of_the_Wind_(film)'
  },
  "earthSea":{
    name: "Tales from Earthsea",
    img: 'http://m2.paperblog.com/i/270/2704775/i-racconti-di-terramare-L-bdKX2M.jpeg',
    text: 'Dummy Text',
    link: 'https://en.wikipedia.org/wiki/Tales_from_Earthsea_(film)'
  },
  "catReturns":{
    name: "The Cat Returns",
    img: 'https://images-na.ssl-images-amazon.com/images/I/41anIKXhsCL._SX466_.jpg',
    text: 'Dummy Text',
    link: 'https://en.wikipedia.org/wiki/The_Cat_Returns'
  },
  "porco":{
    name: "Porco Rosso",
    img: 'http://livedoor.blogimg.jp/diet2channel/imgs/c/c/cc25d3fd-s.jpg',
    text: 'Dummy Text',
    link: 'https://en.wikipedia.org/wiki/Porco_Rosso'
  },




}
