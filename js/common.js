$(document).ready(function() {

	// select

	$(".select__dropdown").hide();

	$(document).click( function(event){
    	$(".select__dropdown").slideUp('fast');
    });

	$(".select").click(function(){
      	$(this).parent().find(".select__dropdown").slideToggle('fast');
      	event.stopPropagation();
    });

	$(".select__dropdown li").on("click", function(event){
		var select = $(this).html();
		var data_attr = $(this).attr('data-attr');
		$(this).parents('.l-select').find('.select__value').html(select);
		$(this).parents('.l-select').find('input').val(data_attr);
		$(this).parent().slideUp('fast');
	});

	// scroll-top


	function scroll_top() {
		var width = $(".container").offset().left;
		var top = ($(".container").offset().top - 67);
		var bottom = $(".footer").offset().top;

		$(".js-scroll-top").css('width', width);
		
		function scroll_show () {
			if($(window).scrollTop() >= top){
				$(".scroll-top").addClass('is-active');
			}
			else {
				$(".scroll-top").removeClass('is-active');
			}
		}
		scroll_show();
	}
	
	scroll_top();

	$(window).resize(function(){
      	scroll_top();
    });
	$(window).scroll(function(){
      	scroll_top();
    });

	$(".scroll-top__inner").click(function(){
		$(window).scrollTop('body');
	});

});