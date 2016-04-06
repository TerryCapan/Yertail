angular.module('yerTales.services', [])

.factory('Tales', function($http) {
  var addTale = function(tale) {
    console.log(tale, 'services.js')
    return $http({
      method: 'POST',
      url: '/api/tales',
      data: tale
    })
    .then(function(tale) {
      return tale;
    })
  };

  var getTales = function() {
    return $http({
      method: 'GET',
      url: '/api/tales',
    })
    .then(function(tales) {
      return tales.data;
    })
  }

  return {
  addTale: addTale,
  getTales: getTales
  }

})


.factory('Input', function() {
  var words = "Waistcoat pork belly asymmetrical slow-carb XOXO crucifix fingerstache cornhole hashtag flexitarian bicycle rights hoodie disrupt shoreditch Sartorial iPhone freegan actually kickstarter celiac Direct trade DIY you probably haven't heard of them health goth pickled brooklyn plaid cliche intelligentsia art party neutra Migas gastropub vegan brooklyn salvia irony austin typewriter seitan pug waistcoat lomo skateboard poutine chicharrones Pork belly slow-carb brunch kogi waistcoat gastropub wayfarers pug thundercats etsy Art party deep v pour-over kitsch blog scenester irony tattooed banh mi crucifix gastropub kale chips blue bottle Kinfolk taxidermy meggings kogi YOLO drinking vinegar semiotics slow-carb disrupt shoreditch YOLO jean shorts 3 wolf moon poutine vegan scenester hella aesthetic kale chips single-origin coffee kinfolk blue bottle ethical Tote bag pop-up pork belly 90's VHS gluten-free fingerstache franzen scenester try-hard XOXO sriracha post-ironic venmo Single-origin coffee hoodie authentic selfies pug aesthetic chia iPhone street art readymade tattooed brooklyn fingerstache butcher XOXO Asymmetrical listicle vinyl VHS intelligentsia pinterest keffiyeh cold-pressed paleo quinoa squid readymade post-ironic neutra Yuccie etsy literally kickstarter Meh microdosing ennui cliche mustache disrupt etsy heirloom pug scenester pop-up keytar lomo aesthetic Pabst keffiyeh chartreuse direct trade letterpress Drinking vinegar selvage master cleanse cardigan banjo wolf bicycle rights beard slow-carb tattooed schlitz chillwave yr small batch Art party pitchfork schlitz wolf thundercats poutine kitsch Actually semiotics artisan church-key XOXO umami meggings tote bag freegan direct trade next level polaroid paleo lumbersexual cardigan sriracha pinterest tote bag artisan Kickstarter godard pour-over pop-up chambray tofu mustache single-origin coffee ethical sartorial organic flannel swag Brooklyn beard knausgaard forage man braid gastropub green juice echo park franzen Skateboard chartreuse thundercats shoreditch seitan banjo Bespoke squid fashion axe knausgaard tousled lomo hashtag Williamsburg cornhole direct trade fingerstache green juice meggings iPhone dreamcatcher flannel skateboard Skateboard forage ethical austin godard tousled marfa etsy gochujang echo park bushwick letterpress brooklyn Cold-pressed microdosing".split(' ');
  var random = function(array) {
    var randomWords = [];
    while ( randomWords.length < 4 ) {
      randomWords.push(array[Math.floor(Math.random() * array.length -1)])
      // console.log(Math.floor(Math.random() * array.length -1))
    }
    return randomWords;
  };
  return {
    words: words,
    random: random
  }

})