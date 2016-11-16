$(document).ready(function(){
   
   var jinn = [
       'http://img.lum.dolimg.com/v1/images/Qui-Gon-Jinn_d89416e8.jpeg?region=0%2C1%2C1536%2C864&width=768',
       'http://vignette3.wikia.nocookie.net/disney/images/7/7b/Qui-gon_jinn_and_ben_kenobi.jpg/revision/latest?cb=20131030230015',
       'http://vignette4.wikia.nocookie.net/disney/images/d/de/Qui-gon-jinn.jpg/revision/latest?cb=20131030230457',
       'http://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/54b008afe4b0160e5972de21/1420822704832/',
       'http://41.media.tumblr.com/e21aae73ca3de8248d7e51e3cfb5725a/tumblr_nwtxy5Y6JZ1uvim24o1_1280.png',
       'http://theforce.net/episode1/oldpreq/characters/pics/t-quigon2.jpg',
       'http://static.comicvine.com/uploads/original/11116/111165168/3996001-1904617066-39681.jpg',
       'https://s-media-cache-ak0.pinimg.com/736x/89/c0/8a/89c08a1d21fe402d9c3600fc51f8b5e1.jpg',
       'http://25.media.tumblr.com/bea120a7951ebfcf03f41550e522a915/tumblr_myqpkgmA7Q1qke34uo1_250.gif',
       'http://38.media.tumblr.com/tumblr_m4nvdh5A0E1rn637d.gif'
   ];
   
   $("body").css('cursor','url(http://w17.snunit.k12.il/images/big_arrow.png),auto');
   });

    $('img').each(function() {
        $(this).attr('src', jinn[Math.floor(Math.random()*jinn.length)]);
    });
    
    $('img').click(function(){
        window.open('https://impetegerardwhatsyourproblem.wordpress.com/2016/01/26/star-wars-who-is-snoke-warning-nerd-alert/');
    });

});
