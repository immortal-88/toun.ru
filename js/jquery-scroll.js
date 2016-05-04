$(function() {

  $("#scroll-arrow").on('click', function() {
    scrollToElem('content', 500);
  });

  function scrollToElem(elem, speed) { //elem - id элемента
  	if(document.getElementById(elem)) {
  		var destination = $('#'+elem).offset().top;
  		$("html,body").animate({scrollTop: destination}, speed, function() {
  		  $('#menuTop').removeClass('menu-hide');
  		});
  	}
  }
});
