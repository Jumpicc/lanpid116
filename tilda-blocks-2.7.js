function t517_unifyHeights(recid){
	if($(window).width()>=960){$('#rec'+recid+' .t517 .t-container .t517__row')
		.each(function(){
			var t517__highestBox=1;
			var t517__currow=$(this);
			$('.t517__col',this)
			.each(function(){
				var t517__curcol=$(this);
				var t517__curcolinfo=t517__curcol.find('.t517__sectioninfowrapper');
				var t517__curcolpers=t517__curcol.find('.t517__personwrapper');
				var t517__curcolinnerheight=t517__curcolinfo.outerHeight()+t517__curcolpers.outerHeight();
				if(t517__curcolinnerheight>t517__highestBox){
					t517__highestBox=t517__curcolinnerheight}});
					$('.t517__col',this).css('height',t517__highestBox)})}}
