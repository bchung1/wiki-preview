$('a').hoverIntent({
	over: function(event) { 
		var href = event.target.href; 
		var text = $('body').find("p:first").text(); 
		getHrefHtml(href, this); 
	}, 
	out: function(){

	},
	interval: 200
})


function getHrefHtml(href, currLink){
	$.ajax({ 
		url: href, 
		success: function(html) { 
			getFirstParagraph(html, currLink); 
		} 
	});
}


function getFirstParagraph(htmlText, currLink){
	var  html = $.parseHTML(htmlText);
	var  first_bolded_word = $(html).find('#mw-content-text p > b:first');
	var first_para = $(first_bolded_word).closest('p').text();
	$(currLink).attr({
		'data-balloon-length': 'xlarge',
		'data-balloon': first_para,
		'data-balloon-pos': 'up'
	});

}