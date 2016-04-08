$(document).ready(function(){
   
   var jinn = [
    'http://img.lum.dolimg.com/v1/images/Qui-Gon-Jinn_d89416e8.jpeg?region=0%2C1%2C1536%2C864&width=768',
    'http://vignette3.wikia.nocookie.net/disney/images/7/7b/Qui-gon_jinn_and_ben_kenobi.jpg/revision/latest?cb=20131030230015',
    'http://vignette4.wikia.nocookie.net/disney/images/d/de/Qui-gon-jinn.jpg/revision/latest?cb=20131030230457',
    'http://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/54b008afe4b0160e5972de21/1420822704832/',
    'http://41.media.tumblr.com/e21aae73ca3de8248d7e51e3cfb5725a/tumblr_nwtxy5Y6JZ1uvim24o1_1280.png',
    'http://theforce.net/episode1/oldpreq/characters/pics/t-quigon2.jpg'
   ]
   
   var jinned = jinn[Math.floor(Math.random()*jinn.length)];

	$('img').attr('src', jinned );

	alert("Qui Gon Jinn, Snoke Confirmed!");

});
