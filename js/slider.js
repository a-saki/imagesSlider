$(function(){

	var $viewport = $('.viewport').width(),
	    $li_width = $('ul.contents li').outerWidth(true),
			$li_size = $('ul.contents li').size(),
			$contents_width = $li_width * $li_size,
			$prev = $('#prev'),
			$next = $('#next'),
			$move_li = 4,
			$nav_img = $('ul.contents li img');

			
	$('ul.contents').css({
		width : $contents_width + 'px'
		});
		
	
	
	$nav_img.on('click',function(){
		var $main_img = $('#main img'),
		    $main_img_last = $('#main img:last'),
				$nav_list = $('ul.contents li');/*変数に入れても入れなくても一緒？*/
				
		$nav_list.removeClass();
		$(this).parent().addClass('active');		
		
		$main_img.before('<img src="' +  $(this).attr('src') + '" />').fadeOut('fast',function(){
			$main_img_last.remove();
			
		});
  });	
		
	$prev.on('click',function(){
		if($prev.attr('class') != 'hide'){
			$('ul.contents:not(:animated)').animate({
				left : '+=' + $li_width * $move_li,
				},200,function(){
					var ul_pos = leftPosition('ul.contents','left');
					$prev.removeClass('hide');
					$next.addClass('show');
					if(ul_pos == 0){
						$prev.addClass('hide').removeClass('show');
						
					}
					
					})
		}
		});
		

		
	$next.on('click',function(){
		if($(this).attr('class') != 'hide'){
			$('ul.contents:not(:animated)').animate({
				left : '-=' + $li_width * $move_li,
				},200,function(){
					var ul_pos = leftPosition('ul.contents','left');
					$prev.addClass('show');
					if(ul_pos == -($contents_width-$li_width* $move_li)){
						$next.addClass('hide').removeClass('show');
					}
					
					});
		}
		});
		
		function leftPosition(ele,pos){
			var position =$(ele).position();
			return position[pos];
		}
});