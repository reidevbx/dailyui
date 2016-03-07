$(function(){
	for (i=100 ;i>0 ; i--){
		$(".works").append('<div class="work">' +
								'<div class="pic" >'+
									'<img src="images/day'+i+'.jpg" style="display:none">'+
								'</div>'+
								'<div class="day">'+
									'<p>'+i+'</p>'+
								'</div>'+
								'<div class="loader">'+
									'<div class="loader-inner cube-transition">'+
										'<div></div>'+
									'</div>'+
								'</div>'+
							'</div>');

	}

	$(".pic img").load(function(){
			console.log($(this).attr("src"));
			console.log($($(this).parent()).attr('class'));
			//console.log($(this).parent.attr('class'));

			$(this).show();
			$(this).parent().parent().find(".loader").hide();
	});

	$(".pic img").error(function(){
			$(this).parent().parent().hide();

	});

		$.ajax({url:"links.txt",
				type: "GET", 
				data: {},
				cached: false,
				dataType: "json",
				success: function(data){
						// console.log(data);
						$(".user .links .facebook").append("<a href='" + data.facebook + "' target='blank'><i class='mdi mdi-facebook-box'></i></a>")
						$(".user .links .website").append("<a href='" + data.website + "' target='blank'><i class='mdi mdi-web'></i></a>")
						$(".user .links .dribbble").append("<a href='" + data.dribbble + "' target='blank'><i class='mdi mdi-dribbble-box'></i></a>")
						$(".user .links .twitter").append("<a href='" + data.twitter + "' target='blank'><i class='mdi mdi-twitter-box'></i></a>")
						$(".user .links .behance").append("<a href='" + data.behance + "' target='blank'><i class='mdi mdi-behance'></i></a>")
						$(".user .links .linkedin").append("<a href='" + data.linkedin + "' target='blank'><i class='mdi mdi-linkedin-box'></i></a>")
					}
				});	


})
