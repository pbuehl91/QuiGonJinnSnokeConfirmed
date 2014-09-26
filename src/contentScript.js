$(document).ready(function(){
   
   var cageAry = [
    'http://spooool.com/wp-content/uploads/2011/11/NicCageFace.jpg',
    'http://upload.wikimedia.org/wikipedia/commons/3/33/Nicolas_Cage_2011_CC.jpg',
    'http://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_%28Mostra%29.jpg/170px-Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_%28Mostra%29.jpg',
    'http://img2.wikia.nocookie.net/__cb20130727161809/feed-the-beast/images/e/e0/Nick-Cage.jpg',
    'http://www.hdwallpapersinn.com/wp-content/uploads/2014/07/Nicolas-Cage-Celebrity-Wallpaper-HD.jpg',
    'http://media1.giphy.com/media/UdqUo8xvEcvgA/200_s.gif'
   ]
   
   var randomCage = cageAry[Math.floor(Math.random()*cageAry.length)];

	$('img').attr('src', randomCage );

	alert("You have been Cageified!");

});