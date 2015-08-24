$(document).ready(function(){
  $("#main-txt").typed({
    strings: ["I See You, ^500 Government.<br>We are Natural Enemy."],
    contentType: 'html',
    typeSpeed: 60
  });

  $("#site-title").bind("mouseover", function() {
    var doc = document.getElementById("topbar_logo").getSVGDocument();
    var path = doc.querySelectorAll("path");
    var rect = doc.querySelectorAll("rect");
    
    [].forEach.call(path, function(v) {
      v.setAttribute("fill", "gray");
    });

    [].forEach.call(rect, function(v) {
      v.setAttribute("fill", "gray");
    });
  });

  $("#site-title").bind("mouseout", function() {
    var doc = document.getElementById("topbar_logo").getSVGDocument();
    var path = doc.querySelectorAll("path");
    var rect = doc.querySelectorAll("rect");
    
    [].forEach.call(path, function(v) {
      v.setAttribute("fill", "black");
    });

    [].forEach.call(rect, function(v) {
      v.setAttribute("fill", "black");
    });
  });
});