
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
        html+="<div class='card' style='width: 25rem; margin: 20px auto'><img class='card-img-top' src='"+info[results[i]].img+"' alt='Card image cap'><div class='card-block'><h4 class='card-title'>"+info[results[i]].name+"</h4><p class='card-text'>"+'"'+info[results[i]].text+'..."'+"</p><a href='"+info[results[i]].link+"' class='btn btn-primary'>Wikipedia Article</a></div></div>"
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
    text: '<i>My Neighbor Totoro</i> is a 1988 Japanese animated fantasy film written and directed by Hayao Miyazaki and produced by Studio Ghibli. The film tells the story of the two young daughters (Satsuki and Mei) of a professor and their interactions with friendly wood spirits in postwar rural Japan',
    link: 'https://en.wikipedia.org/wiki/My_Neighbor_Totoro'
  },
  "kiki":{
    name: "Kiki's Delivery Service",
    img: 'http://wallpapersin4k.net/wp-content/uploads/2017/02/Kikis-Delivery-Service-Movie-Wallpapers-3.jpg',
    text: "<i>Kiki's Delivery Service</i> is a 1989 fantasy anime produced by Studio Ghibli and written, produced, and directed by Hayao Miyazaki as an adaptation of the 1985 novel of the same name by Eiko Kadono. The film tells the story of a young witch, Kiki, who moves to a new town and uses her flying ability to earn a living.",
    link: 'https://en.wikipedia.org/wiki/Kiki%27s_Delivery_Service'
  },
  "ponyo":{
    name: "Ponyo",
    img: 'http://3.bp.blogspot.com/_YO8CezyesrM/TFoV8J9uPKI/AAAAAAAAD3s/By_KMySHb94/s400/ponyo1_.jpg',
    text: '<i>Ponyo</i>, initially titled in English as <i>Ponyo on the Cliff by the Sea</i>, is a 2008 Japanese animated fantasy comedy film written and directed by Hayao Miyazaki and produced by Studio Ghibli.The plot centers on a goldfish named Ponyo who befriends a five-year-old human boy, Sōsuke, and wants to become a human girl.',
    link: 'https://en.wikipedia.org/wiki/Ponyo'
  },
  "onlyYesterday":{
    name: "Only Yesterday",
    img: 'https://i0.wp.com/thewellredmage.files.wordpress.com/2016/12/960.jpg?w=386&h=217&crop&ssl=1',
    text: '<i>Only Yesterday</i> is a 1991 Japanese animated drama film written and directed by Isao Takahata, based on the manga of the same title by Hotaru Okamoto and Yuko Tone. <i>Only Yesterday</i> explores a genre traditionally thought to be outside the realm of animated subjects: a realistic drama written for adults, particularly women.',
    link: 'https://en.wikipedia.org/wiki/Only_Yesterday_(1991_film)'
  },
  "fireflies":{
    name: "Grave of the Fireflies",
    img: 'https://lh3.googleusercontent.com/op3b9-3ceoCWvfTWSIG0jQODm7DBTipbMkCZB5qNpMzhocPvhYH1wFmnR68ttnsgLwQZslszuc3dvLrq=w480-h257-no',
    text: '<i>Grave of the Fireflies</i> is a 1988 Japanese animated war drama film written and directed by Isao Takahata and animated by Studio Ghibli. Set in the city of Kobe, Japan, the film tells the story of two siblings, Seita and Setsuko, and their desperate struggle to survive during the final months of the Second World War.',
    link: 'https://en.wikipedia.org/wiki/Grave_of_the_Fireflies'
  },
  "windRises":{
    name: "The Wind Rises",
    img: 'https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/CWA/image/YfNOovU1EAn60M2hzvfeigHF420.jpeg',
    text: '<i>The Wind Rises</i> is a 2013 Japanese animated historical drama film written and directed by Hayao Miyazaki and animated by Studio Ghibli. The Wind Rises is a fictionalized biopic of Jiro Horikoshi, designer of the Mitsubishi A5M fighter aircraft and its successor, the Mitsubishi A6M Zero, used by the Empire of Japan during World War II.',
    link: 'https://en.wikipedia.org/wiki/The_Wind_Rises'
  },
  "kaguya":{
    name: "The Tale of the Princess Kaguya",
    img: 'http://1.bp.blogspot.com/-OrF4F8uOslU/VabYCPL184I/AAAAAAAAhVk/rEzyGOrns68/w1200-h630-p-k-no-nu/princesa-Kaguya-banner-alto.jpg',
    text: '<i>The Tale of the Princess Kaguya</i> is a 2013 Japanese animated fantasy drama film produced by Studio Ghibli. Co-written and directed by Isao Takahata, the film ... is based on the folktale The Tale of the Bamboo Cutter',
    link: 'https://en.wikipedia.org/wiki/The_Tale_of_the_Princess_Kaguya'
  },
  "howl":{
    name: "Howl's Moving Castle",
    img: 'https://68.media.tumblr.com/c603efb87b955b26aa4ae35aac3bf82f/tumblr_n04arm3TlF1rx69rlo1_500.jpg',
    text: "<i>Howl's Moving Castle</i> is a 2004 Japanese animated fantasy film written and directed by Hayao Miyazaki.  The film tells the story of a young hatter named Sophie after she is turned into an old woman by a witch's curse. She encounters a wizard named Howl, and gets caught up in his resistance to fighting for the king.",
    link: 'https://en.wikipedia.org/wiki/Howl%27s_Moving_Castle_(film)'
  },
  "poppyHill":{
    name: "From Up on Poppy Hill",
    img: 'http://2.bp.blogspot.com/-_YvRYCFq8pQ/TwKKB98P0AI/AAAAAAAAAdc/nalINDtm-xw/s1600/qZeTpKWZkp6VrQ.jpg',
    text: "<i>From Up on Poppy Hill</i> tells the story of Umi Matsuzaki, a high school girl living in a boarding house, Coquelicot Manor. When Umi meets Shun Kazama, a member of the school's newspaper club, they decide to clean up the school's clubhouse, Quartier Latin. However, Tokumaru, the chairman of the local high school and a businessman, intends to demolish the building for redevelopment and Umi and Shun, along with Shirō Mizunuma, must persuade him to reconsider.",
    link: 'https://en.wikipedia.org/wiki/From_Up_on_Poppy_Hill'
  },
  "whisperHearts":{
    name: "Whisper of the Heart",
    img: 'http://movieboozer.com/wp-content/uploads/2015/09/whisper-of-the-heart-50f08d724491d-498x280.jpg',
    text: '<i>Whisper of the Heart</i> is a 1995 Japanese animated romantic drama film directed by Yoshifumi Kondō and written by Hayao Miyazaki based on the 1989 manga of the same name by Aoi Hiiragi.',
    link: 'https://en.wikipedia.org/wiki/Whisper_of_the_Heart'
  },
  "mononoke":{
    name: "Princess Mononoke",
    img: 'https://livingstorymode.files.wordpress.com/2017/01/mononoke.jpg?w=461&h=259',
    text: "<i>Princess Mononoke</i> is set in the late Muromachi period (approximately 1336 to 1573) of Japan with fantasy elements. The story follows the young Emishi prince Ashitaka's involvement in a struggle between the gods of a forest and the humans who consume its resources. The term 'Mononoke' is not a name, but a Japanese word for a spirit or monster.",
    link: 'https://en.wikipedia.org/wiki/Princess_Mononoke'
  },
  "spiritedAway":{
    name: "Spirited Away",
    img: 'http://1.bp.blogspot.com/-VY0E5GwGoQg/Uewry672fBI/AAAAAAAABRg/VmKy0DcfJyk/s1600/large.jpg',
    text: "<i>Spirited Away</i> tells the story of Chihiro Ogino, a sullen ten-year-old girl who, while moving to a new neighborhood, enters the spirit world. After her parents are transformed into pigs by the witch Yubaba, Chihiro takes a job working in Yubaba's bathhouse to find a way to free herself and her parents and return to the human world.",
    link: 'https://en.wikipedia.org/wiki/Spirited_Away'
  },
  "arrietty":{
    name: "The Secret World of Arrietty",
    img: 'https://upload.wikimedia.org/wikipedia/hu/6/6f/Arrietty.png',
    text: "<i>Arrietty</i>, titled <i>The Borrower Arrietty</i> in Japan and <i>The Secret World of Arrietty</i> in North America, is a 2010 Japanese animated fantasy film based on <i>The Borrowers</i> by Mary Norton, an English author of children's books, about a family of tiny people who live secretly in the walls and floors of a typical household, borrowing items from humans to survive.",
    link: 'https://en.wikipedia.org/wiki/Arrietty'
  },
  "nausicaa":{
    name: "Nausicaa of the Valley of the Wind ",
    img: 'https://pics.prcm.jp/7emmnrsy7/24490917/jpeg/24490917.jpeg',
    text: 'Taking place in a post-apocalyptic world in the far future, the film tells the story of Nausicaa, the young princess of the Valley of the Wind. She becomes embroiled in a struggle with Tolmekia, a kingdom that tries to use an ancient weapon to eradicate a jungle of mutant giant insects, and attempts to stop the Tolmekians from enraging these creatures.',
    link: 'https://en.wikipedia.org/wiki/Nausica%C3%A4_of_the_Valley_of_the_Wind_(film)'
  },
  "earthSea":{
    name: "Tales from Earthsea",
    img: 'http://m2.paperblog.com/i/270/2704775/i-racconti-di-terramare-L-bdKX2M.jpeg',
    text: "<i>Tales from Earthsea</i> is based on a combination of plot and character elements from the first four books of Ursula K. Le Guin's <i>Earthsea series</i>, as well as the manga The Journey of Shuna by Hayao Miyazaki. The film's title is named from the collection of short stories, Tales from Earthsea, made in 2001.",
    link: 'https://en.wikipedia.org/wiki/Tales_from_Earthsea_(film)'
  },
  "catReturns":{
    name: "The Cat Returns",
    img: 'https://images-na.ssl-images-amazon.com/images/I/41anIKXhsCL._SX466_.jpg',
    text: '<i>The Cat Returns</i> is a 2002 Japanese animated fantasy film directed by Hiroyuki Morita of Studio Ghibli, produced by Toshio Suzuki and Nozomu Takahashi, written by Reiko Yoshida, based on <i>The Cat Returns</i> by Aoi Hiiragi',
    link: 'https://en.wikipedia.org/wiki/The_Cat_Returns'
  },
  "porco":{
    name: "Porco Rosso",
    img: 'http://livedoor.blogimg.jp/diet2channel/imgs/c/c/cc25d3fd-s.jpg',
    text: '<i>Porco Rosso</i> revolves around an Italian World War I ex-fighter ace, now living as a freelance bounty hunter chasing "air pirates" in the Adriatic Sea. However, an unusual curse has transformed him into an anthropomorphic pig. Once called Marco Pagot (Marco Rossolini in the American version), he is now known to the world as "Porco Rosso", Italian for "Red Pig"',
    link: 'https://en.wikipedia.org/wiki/Porco_Rosso'
  },

}
