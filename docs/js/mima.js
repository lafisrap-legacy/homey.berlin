// MAMI Javascript extensions

$( () => {

	// Image Gallery - Tabs
	$( "#startingpoints .nav-tabs li" ).click((e) => {
		var href = e.target.getAttribute("href");

		$( href + " ul li:first-child span" ).trigger("click");
	});

	// Image Gallery - Checkboxes
	$( ".checkbox-modal input" ).change((e) => {
		let id = e.target.getAttribute("checkbox");
		$(".checkbox-modal input[checkbox='"+id+"']").prop('checked', e.target.checked);
		$("#portfoliolist .mix[checkbox='"+id+"']" ).toggleClass("selected");

		let checked = [];

		$( "#portfoliolist .checkbox-modal input" ).filter(function(elem) { 
			if( $(this).is(":checked") ) 
				checked.push({
					image: $(this).attr("img"),
					id: $(this).attr("img-id")
				});
		});

		if( checked.length ) {
			$( ".navbar-name" ).text( checked.length + " image/s selected." );
		}

		let images = "";

		$.each(checked, (index, image) => {
			images += '<div class="image"><img src="'+image.image+'" class="img-responsive" /></div>';
		})		

		$( "#contact .thumbnails").html(images);

		document.mamiImagesChecked = checked;
	});


	// Workaround: Restart Owl-Carousels once first video is loaded
	$( "#abilities2 .owl-prev").trigger("gotostart", [1]);
	$("#abilities2 .item_topic1 video").on('loadeddata', function() {
		$( "#abilities2 .owl-prev").trigger("gotostart", [0])
	});
});