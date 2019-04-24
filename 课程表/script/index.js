function ById(id){
	return typeof(id) === "string"?document.getElementById(id):id;
}

var index = 0,
  timer = null,
  banner = ById("bgp"),
  pics = ById("bgp").getElementsByTagName("a"),
  dots = ById("circle").getElementsByTagName("i"),
  len = pics.length;

  console.log(banner);

function bannerImg() {
	banner.onmouseover = function(){
		if(timer) clearInterval(timer);
	}

	banner.onmouseout = function(){
      timer = setInterval(function(){
		index++;
		if(index >= len) index = 0;
		changeImg();
	  }, 3000)
	}
	banner.onmouseout();

	for(var m=0; m<len; m++) {
		dots[m].id = m;
		dots[m].onmouseover = function(){
			index = this.id;
			changeImg();
		}
	}

}

function changeImg(){
	for(var i=0; i<len; i++){
		pics[i].style.display = "none";
	}
	pics[index].style.display = "block";
}

bannerImg();
