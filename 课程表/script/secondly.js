function byId(id){
	return typeof(id) === "string"?document.getElementById(id):id;
}


var index = 0,
  timer = null,
  banner = byId("inner"),
  pics = byId("pics").getElementsByTagName("a"),
  dots = byId("dots").getElementsByTagName("i"),
  len = pics.length;
  console.log(len);

function slideChange() {
  banner.onmouseover = function() {
  	if(timer) clearInterval(timer);
  }
  banner.onmouseout = function() {
  	timer = setInterval(function(){
      index++;
      if(index >= len) index = 0;
      changeImg();
  	}, 3000)
  }
  banner.onmouseout();

  // dots
  for(var m=0; m< len; m++) {
    dots[m].id = m;
    dots[m].onclick = function() {
    	index = this.id;
    	changeImg();
    }
  }
}

function changeImg() {
	for(var i=0; i<len; i++) {
      pics[i].style.display = "none";
      dots[i].className = "";
	}
	pics[index].style.display = "block";
	dots[index].className = "active";
}

slideChange();