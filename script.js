$(function() {
  var backgroundArray = ['images/book.jpg', 'images/candle.jpg', 'images/darkMetal.jpg', 'images/stars.jpg', 'images/wood.jpg'];
  $('.everything').css('background-image', `url(${backgroundArray[Math.floor(Math.random()*5)]}`);

  var userMsg;
  var value = "; " + document.cookie;
  var parts = value.split("; " + 'userInput' + "=");
  if (parts.length == 2) {userMsg = parts.pop().split(";").shift();}

  if (userMsg) {
    $('.startingText, .textBox, .submit').css('display', 'none');
    $('.middle').append($(`<h2 style='color: rgb(120,117,127);' class='msgHeader'>${userMsg}</h2>`));
  }

  else {
    $('.startingText').css('display', 'block');
    $('.textBox, .submit').css('display', 'inline-block');
  }


  $('.submit').click(function() {
    let userResponse = $('.textBox').val();
    var today = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    document.cookie = `userInput=${userResponse}; expires=${tomorrow}`;
    document.cookie = `test='lalala'; expires=${tomorrow}`;
    location.reload();
  });
})
