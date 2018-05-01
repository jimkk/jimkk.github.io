compressEnabled = false;
expandEnabled = false;

function isScrolledIntoView(elem)
{
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();
  return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function() {
  if(compressEnabled && isScrolledIntoView($('#compress'))){
    console.log("Compressing...");
    let projects = $(".projects");
    //projects.css("height", "100px");
    projects.css("position", "fixed", "top", "0");
    projects.children('.project').each(function() {
      $(this).height(150);
      $(this).width(300);
      $(this).find('figure').css("height", "0px");
      $(this).find(".description").css("height", "0px");
    })
  }
  if(expandEnabled && isScrolledIntoView($('#expand'))){
    console.log("Expanding...");
    let projects = $(".projects");
    //projects.css("height", "100px");
    projects.removeAttr("style");
    projects.children('.project').each(function() {
      $(this).removeAttr( "style" );
      $(this).find('figure').removeAttr("style");
      $(this).find(".description").removeAttr("style");
    })
  }
});
