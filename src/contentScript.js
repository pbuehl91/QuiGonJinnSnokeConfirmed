$(document).ready(function(){
   
   var jinn = [
    'http://img.lum.dolimg.com/v1/images/Qui-Gon-Jinn_d89416e8.jpeg?region=0%2C1%2C1536%2C864&width=768',
    'http://vignette3.wikia.nocookie.net/disney/images/7/7b/Qui-gon_jinn_and_ben_kenobi.jpg/revision/latest?cb=20131030230015',
    'http://vignette4.wikia.nocookie.net/disney/images/d/de/Qui-gon-jinn.jpg/revision/latest?cb=20131030230457',
    'http://img2.wikia.nocookie.net/__cb20130727161809/feed-the-beast/images/e/e0/Nick-Cage.jpg',
    'http://www.hdwallpapersinn.com/wp-content/uploads/2014/07/Nicolas-Cage-Celebrity-Wallpaper-HD.jpg',
    'http://media1.giphy.com/media/UdqUo8xvEcvgA/200_s.gif'
   ]
   
   var jinned = jinn[Math.floor(Math.random()*jinn.length)];

	$('img').attr('src', jinned );

	alert("Qui Gon Jinn, Snoke Confirmed!");

});
