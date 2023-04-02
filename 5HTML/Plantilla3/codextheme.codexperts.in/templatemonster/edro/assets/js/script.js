//*** Loader Start
$(window).on('load', function() {
    $(".codex-loader").fadeOut("slow");
});

$(document).ready(function() {

    //*** sticky header     
    $(window).scroll(function() {
        if($(this).scrollTop() > 50){
            $('header').addClass("sticky");
            $('header.land-header').removeClass("fixed");
        } else {
            $('header').removeClass("sticky");
            $('header.land-header').addClass("fixed");
        }
    });
   
    
    //*** menu js
    $(document).on("click",'.menu-action',function(){    
        $('.menu-list').toggleClass('open');  
        $('.cdx-layer.menu-layer').toggleClass("active");
        $(this).toggleClass("toggle-active");
        $('body').addClass("overflow-hidden")
      });
    if($(window).width() < 1200){
      $(".submenu-list,.secodnmenu-list").slideUp('');
      $(".menu-list li.menu-item > a" ).on( "click", function() {      
        $(this).parents('.menu-list').find(".submenu-list").slideUp('');  
        $(this).parents('.menu-list').find(".secodnmenu-list").slideUp('');                
        if($(this).next(".submenu-list").is(':hidden')){
          $(this).next(".submenu-list").slideToggle('');  
        }                
      });
      $(".menu-list li.sub-menu-item > a" ).on( "click", function() {      
        $(this).parents('.menu-list').find(".secodnmenu-list").slideUp('');         
        if($(this).next(".secodnmenu-list").is(':hidden')){
          $(this).next(".secodnmenu-list").slideToggle('');  
        }                
      });
      $(".land-header .menu-list li").on("click",function(){    
        $('.menu-list').removeClass('open')
        $('.cdx-layer.menu-layer').removeClass("active");
        $('.menu-action').removeClass("toggle-active");
      });
      $(document).on("click",'.cdx-layer.menu-layer',function(){    
        $(".menu-list").removeClass("open");
        $(this).removeClass("active");
        $('.menu-action').removeClass("toggle-active");
        $('body').removeClass("overflow-hidden")
      });
      $(document).on("click",'.close-menu',function(){    
        $(".menu-list").removeClass("open");       
        $('.menu-action').removeClass("toggle-active");
        $('.cdx-layer.menu-layer').removeClass("active");
        $('body').removeClass("overflow-hidden")
      });   
    }


    //*** Grid & List View - START 
    $( ".listview-toggle" ).on( "click", function() {
      $('.grid-view').addClass('list-view').removeClass('grid-view');       
    });
    $( ".gridview-toggle" ).on( "click", function() {
      $('.list-view').addClass('grid-view').removeClass('list-view');    
    });
    $( ".filter-toggle" ).on( "click", function() {
      $('.filter-sidebar .cdx-sidebar, .filter-sidebar .cdx-layer').addClass('active');
    });
    $( ".filter-sidebar .cdx-layer" ).on( "click", function() {
        $('.filter-sidebar .cdx-sidebar, .filter-sidebar .cdx-layer').removeClass('active');
    });

    $(".filter-sidebar .close-filter" ).on( "click", function() {
        $('.filter-sidebar .cdx-sidebar, .filter-sidebar .cdx-layer').removeClass('active');
    });

    //*** serach bar
    $( ".search-toggle" ).on( "click", function() {
        $(".search-bar").addClass('open');   
    });
    $( ".clsoe-search" ).on( "click", function() {
        $(".search-bar").removeClass('open');
    });


    //*** Filter Start   
    $(".cdx-tabs li").on("click",function(){    
      $(this).siblings("li.active").removeClass("active");
      $(this).addClass("active");
    });


    // *** Password Hide Show
    $('.toggle-show').click(function(){
      var inp = $('.showhide-password');
      if (inp.attr('type') == 'password') {
        setTimeout(function(){
            inp.attr('type','text');  
            $(".toggle-show").addClass('fa-eye-slash');   
        },250);
        } else {
          setTimeout(function(){
            inp.attr('type','password');;
            $(".toggle-show").removeClass('fa-eye-slash');
          },250);        
        } 
    });



  //*** Drowpdown Menu
  $(".dropdownmenu .dropdown-action" ).on( "click", function() { 
    if($(".dropdownitem-list").hasClass("open")){
      $('.dropdownitem-list').removeClass('open');  
    }  
    $(this).siblings('.dropdownitem-list').toggleClass('open');   
  });



	//*** background image
	$('.img-src').css({'display' : 'none'});
	$('.img-src').each(function () {
	  $(this).parent().css({
	    'background-image':'url(' + $(this).attr('src')+ ')',
	    'background-size': 'cover',
	    'background-position': 'center',
	    'display' : 'block'
	  }); 
	});


	//*** accordion
	$('.collapse').on('shown.bs.collapse', function () {
	    $(this).prev().addClass('active');
	});
	$('.collapse').on('hidden.bs.collapse', function () {
	    $(this).prev().removeClass('active');
	});


	//*** video popup
	$('.popup-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	//*** Back To Top
    $(window).scroll(function() {
      if ($(window).scrollTop() > 450) {
        $('.scroll-top').addClass('show');
      } else {
        $('.scroll-top').removeClass('show');
      } 
    });
    $(document).ready(function(){
      $(document).on("click",'.scroll-top',function(){    
        $('html, body').animate({scrollTop:0}, '450');
      });
    });


    //*** Quantity Counter - START 
    $(document).on('click','.count-plus',function(){
      $(this).siblings('.pro-qty').val(parseInt($(this).siblings('.pro-qty').val()) + 1 );
    });
    $(document).on('click','.count-minus',function(){
      $(this).siblings('.pro-qty').val(parseInt($(this).siblings('.pro-qty').val()) - 1 );
      if ($(this).siblings('.pro-qty').val() == 0) {
        $(this).siblings('.pro-qty').val(1);
      }
    });


    //*** Chat Popup Start
    $(".livechat-bar .chat-toggle").on("click",function(){         
      $('.livechat-bar .livechat-box').addClass("show");
    });
    $(".livechat-bar .close-chat").on("click",function(){         
      $('.livechat-bar .livechat-box').removeClass("show");
    });


    //*** Cookie Start   
    // window.setTimeout(function(){
    //     $(".cookie-grid").addClass('active')
    // }, 2000);

    // $('.cookie-grid .btn').on('click',function(){
    //     $(this).parents('.cookie-grid').removeClass('active')
    // });
});



//*** on load popup
// $(window).on('load', function() {
//   $('.festival-popup').modal('show');
// });









$(document).on("click", function(event){ 
  //*** DropdownMenu-Hide
  var $trigger = $(".dropdownmenu , .dropdownitem-list");
  if($trigger !== event.target && !$trigger.has(event.target).length){ 
    if($(".dropdownitem-list").hasClass("open")){
      $('.dropdownitem-list').removeClass('open');  
    }                 
  }  

  //*** SearchBar-Hide
  var $trigger2 = $(".search-bar, .search-toggle, .search-bar.open");
  if($trigger2 !== event.target && !$trigger2.has(event.target).length){ 
    if($(".search-bar").hasClass("open")){
      $('.search-bar').removeClass('open');  
    }                 
  }  

  //*** Menu 
  var $triggermenu = $(".menu-action, .menu-list");
  if($triggermenu !== event.target && !$triggermenu.has(event.target).length){        
    $(".menu-list").removeClass(".open");        
  }     
});  


//*** sal js
sal({
    'threshold': 0.01,
    // 'once': !![]
      once: false
});


$('<div class="theme-customizer"> <div class="darkmode-btn"><i class="fa fa-moon-o"></i></div><div class="lightmode-btn"><i class="fa fa-sun-o"></i></div></div>').appendTo($('body'));


//*** customzier start
if (localStorage.getItem('screenMode') == 'darkmode-btn') {
  $("body").addClass("dark-mode");
  $('.darkmode-btn').fadeOut();
  $('.lightmode-btn').fadeIn();
}
$('.lightmode-btn').click(function(){
  localStorage.setItem('screenMode', 'lightmode-btn');
  $("body").removeClass("dark-mode");
  $(this).fadeOut();
  $('.darkmode-btn').fadeIn();
});
$(".darkmode-btn").click(function(){
  localStorage.setItem('screenMode', 'darkmode-btn');
  $("body").addClass("dark-mode");   
  $(this).fadeOut();
  $('.lightmode-btn').fadeIn();
});