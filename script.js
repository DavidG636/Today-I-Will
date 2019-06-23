$(function () {
  var backgroundArray = ['images/book.jpg', 'images/candle.jpg', 'images/darkMetal.jpg', 'images/stars.jpg', 'images/wood.jpg'];
  $('body').css('background-image',`url(${backgroundArray[Math.floor(Math.random()*5)]}`);
})
