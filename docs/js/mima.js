// MAMI Javascript extensions

$( () => {
	$( "#startingpoints .nav-tabs li" ).click((e) => {
		var href = e.target.getAttribute("href"),
				dest = $( href + " ul li:first-child span" );

		setTimeout( () => {
			dest.trigger("click")
		}, 200 );
	});
});