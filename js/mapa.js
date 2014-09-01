var slider_on=false;
var posicion_cuentos = 0;
var posicion_slider=0;
var intervalID;

var numeroImages=0;

var startslider =function(){
	slider_on=true;
	$("#indepth_mapa_img_"+posicion_slider).show();
	$( "#indepth_mapa_controles #rep" ).removeClass( "pause" );
	clearInterval(intervalID);
	 intervalID=setInterval(function(){
	 	if(posicion_slider<numeroImages-1){
	 		posicion_slider++;
		 	
	 	}else{
	 		posicion_slider=0;
	 	}
	 	slider_change();	 		
	 	
	 }, 3000);
 }

var slider_stop= function(){
				slider_on=false;
				clearInterval(intervalID);
				$( "#indepth_mapa_controles #rep" ).addClass( "pause" );
}

var slider_back=function(){
	 if(posicion_slider>0){
	            posicion_slider = parseInt(posicion_slider,10)-1;
	            slider_change();
	        }
	       slider_stop();
}

var slider_next=function(){
	 if(numeroImages-1>posicion_slider){
            posicion_slider = parseInt(posicion_slider,10)+1;
            slider_change();
	        }
	       slider_stop();
}

var slider_change=function(){
 	
		$(".indepth_mapa_img").hide();
	 	$("#indepth_mapa_img_"+posicion_slider).fadeIn();
	 	$("#indepth_mapa_container_text").animate({"left":-posicion_slider*100+"%"},600);
	 	if(posicion_slider<=0){
		 	$("#indepth_mapa_controles #prev").css("visibility","hidden");
	 	}else{
		 	$("#indepth_mapa_controles #prev").css("visibility","visible");
	 	}
	 	if(posicion_slider>=numeroImages-1){
		 	$("#indepth_mapa_controles #next").css("visibility","hidden");
	 	}else{
		 	$("#indepth_mapa_controles #next").css("visibility","visible");
	 	}
	 	console.log("normal: "+posicion_slider);
}

var slider_change_noeffect=function(){

		$(".indepth_mapa_img").hide();
	 	$("#indepth_mapa_img_"+posicion_slider).fadeIn();
	 	$("#indepth_mapa_container_text").css("left",-posicion_slider*100+"%");
	 	if(posicion_slider<=0){
		 	$("#indepth_mapa_controles #prev").css("visibility","hidden");
	 	}else{
		 	$("#indepth_mapa_controles #prev").css("visibility","visible");
	 	}
	 	if(posicion_slider>=numeroImages-1){
		 	$("#indepth_mapa_controles #next").css("visibility","hidden");
	 	}else{
		 	$("#indepth_mapa_controles #next").css("visibility","visible");
	 	}
	 	 console.log("hover: "+posicion_slider);
}

var slider = function(x){	
	numeroImages=x;
	console.log("start");
	$('.indepth_africa_mapa').waypoint(function(direction) {
	console.log(direction);
		if(!slider_on){
			startslider();
			
		}
	});
	
	 $("#indepth_mapa_controles #rep").on("click",function(){
	 console.log(slider_on);
	 	if(slider_on){
	  		slider_stop();
	  	}else{
	  		slider_next();
		  	startslider();
	  	}
	  });
	  
	   $("#indepth_mapa_controles #prev").on("click",function(){
	   		console.log("prev")
	  		 slider_stop();
	  		 slider_back();
	  		
	  });
	  
	  $("#indepth_mapa_controles #next").on("click",function(){
	   	console.log("next")
	   		slider_stop();
	  		slider_next();
	  });
	  
	  $("#indepth_africa_mapa, #indepth_mapa_map_imgconteneiner img,#indepth_mapa_controles, #indepth_mapa_text, #indepth_mapa_title img").swipe({
		  swipeLeft:function(event) {
		     console.log("prev");
		   slider_stop();
	  		slider_back();
		  },
		  swipeRight:function(event){
			  console.log("next")
	   		slider_stop();
	  		slider_next();
		  }
		  
		});
		
		$("#indepth_mapa_map_imgconteneiner map area").on("mouseenter",function(){
		 	posicion_slider=$(this).attr("position");
		 	slider_stop();
		 	slider_change_noeffect();
			return false;
		})
		
			$("#indepth_mapa_map_imgconteneiner map area").on("click",function(){
				return false;
			})

	
	 } 
 
