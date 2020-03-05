$(function() {
  var backgroundArray = ['images/book.jpg', 'images/candle.jpg', 'images/darkMetal.jpg', 'images/stars.jpg', 'images/wood.jpg'];
  $('.everything').css('background-image', `url(${backgroundArray[Math.floor(Math.random()*5)]}`);

  var userMsg = getCookie("userInput");
  var cookieConsentBoolean = getCookie("consent");
  cookieConsentBoolean = Boolean(cookieConsentBoolean);

  if (userMsg) {
    $('.textBox, .submit').css('display', 'none');
    $('.middle').append($(`<h1 style='color: rgb(120,117,127);' class='msgHeader'>${userMsg}</h1>`));
  } else {
    $(".cookieConsentDiv").css("display", "block");
    $('.textBox, .submit').css('display', 'inline-block');
  }

  if (cookieConsentBoolean) {
    $(".cookieConsentDiv").css("display", "none");
  }


  $('.submit').click(function() {
    let userResponse = $('.textBox').val();
    if (userResponse != "" && cookieConsentBoolean) {
      let today = new Date();
      let tomorrow = new Date();
      tomorrow.setDate(today.getDate() + 1);
      document.cookie = `userInput=${userResponse}; expires=${tomorrow}`;
      location.reload();
    }
  });

  $('.cookieConsentButton').click(function() {
    let today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    document.cookie = `consent=true; expires=${tomorrow}`;
    location.reload();
  });
})

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
