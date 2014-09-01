var disqus_shortname = 'juanfutbol';
var disqus_identifier;
var disqus_url;
var disqus_number_c=2;
var disqus_per_page=3;

$(document).on("click", "#indepth_button_ver" ,function(){
		var position = $(".indepth_content_top").position();
		$('html, body').animate({
			scrollTop: position.top
		}, 2000);
	});

var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}



 
 var ads_scroll_2=function(){
	 var ventana_alto = $(window).height();
	 ventana_alto=ventana_alto-(ventana_alto*.15)
	 $('.indepth_anuncio_section').css("height",ventana_alto+"px");
	 var div_alto=$("#indepth_anuncio_section .indepth_page_body").height();
	 var margin_top=(ventana_alto-div_alto)/2;
		 $("#indepth_anuncio_section .indepth_page_body").css("margin-top",margin_top);
	 var m_detect=detect_mobile();
	 if(!m_detect){
		$(window).resize(function(){
		 var ventana_alto = $(window).height();
		 ventana_alto=ventana_alto-(ventana_alto*.10)
		 $('#indepth_anuncio_section').css("height",ventana_alto+"px");
		 var div_alto=$("#indepth_anuncio_section .indepth_page_body").height();
		 var margin_top=(ventana_alto-div_alto)/2;
		 $("#indepth_anuncio_section .indepth_page_body").css("margin-top",margin_top);
	 }); 
	 } 
	 
	 var scroller=-60;
	 var top_ant=0;
		 $(document).scroll(function () {
			 var top_doc=$(document).scrollTop();
			 var top_div=$('#suspenso_separador').position().top;
			  var top_bruma=$('#bruma_separador').position().top;
			 var top_test=$('#indepth_intro').position().top;
			 
			 if(!m_detect){
					 //$("#indepth_parallax_back").css("background-position-y",  scroller + "px");
				 }else{
					 if(top_doc>=(top_test+5)){
						 $('#indepth_cover_view').css("position","absolute");
					 }else{
						 $('#indepth_cover_view').css("position","fixed");
					 }
				 }
			 
			 var height_div=$('#indepth_anuncio_section').height();
			 if(top_doc>=top_div-600 && top_doc<=top_div+height_div+600){
			 	if(top_doc>=top_ant){
			 		
				 	scroller=scroller+2;
				 	
			 	}else{
			 		if(scroller>=2){
				 		scroller=scroller-2;
			 		}
				 	
			 	}
				// console.log(top_doc+">="+top_div);
				 //console.log("scroller: "+scroller);
				 if(!m_detect){
					 //$("#indepth_parallax_back").css("background-position-y",  scroller + "px");
				 }else{
					 //("#indepth_parallax_back").animate({"background-position-y":  scroller + "px"},"100");
					 
				 }
				 //$("#indepth_parallax_back").animate({"background-position-y":  scroller + "px"},"fast");
				// $("#indepth_parallax_back").css("background-position-y",  scroller + "px");
				 top_ant=top_doc;
			 }
		 })
 } 
 
  var detect_mobile=function(){
	 var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
 };
 
	var mobile=false;
	
	 if (isMobile.Android())
	 {
	 mobile=true;
	 }
	 else if (isMobile.BlackBerry())
	 {
	 mobile=true;
	 }
	 else if (isMobile.iOS())
	 {
	 mobile=true;
	 }
	 else if (isMobile.Opera())
	 {
	 mobile=true;
	 }
	 else if (isMobile.Windows())
	 {
	 mobile=true;
	 }
	 else
	 {
	 mobile=false;
 }
	 return mobile;
 }
 
 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};

$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	slider(5);
	if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Android')
    {   	
    
			 $('#indepth_cover_view').css("position","absolute");
    }else{
    
    	var ventana_alto = $(window).height();
	 //ventana_alto=ventana_alto-(ventana_alto*.15)
	 	//$('.indepth_anuncio_section').css("height",ventana_alto-(ventana_alto*.10)+"px");
    }
    
    if(navigator.platform == 'iPad'){
	    //$("#indepth_parallax_back").css("background-size", "100%");
	    $("#indepth_parallax_back").css("background-attachment", "initial");
	    console.log("ipad")
    }
		loadDisqus($("#indepth_coments"), "b66571bd-b79b-48f2-a3dd-08e056b32580", "http://juanfutbol.com/indepth/b66571bd-b79b-48f2-a3dd-08e056b32580");
});

$(window).on("resize", function(){
	indepth_sizeAdjust(false);
	 if(navigator.platform == 'iPad'){
	    //$("#indepth_parallax_back").css("background-size", "100%");
	    $("#indepth_parallax_back").css("background-attachment", "initial");
    }
	 if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Android')
    { 
    }else{
    	var ventana_alto = $(window).height();
	 //ventana_alto=ventana_alto-(ventana_alto*.15)
	 	//$('.indepth_anuncio_section').css("height",ventana_alto-(ventana_alto*.10)+"px");
    }
});