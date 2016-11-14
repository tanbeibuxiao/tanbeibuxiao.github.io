	var tabWindow = document.querySelector(".tabwindow ");
	var topBanner = document.querySelector(".tabimgs  li"),
		topBannerImgs = document.querySelectorAll(".tabimgs  img"),
		arrImg = ["img/g0.png","img/g1.png","img/g2.png","img/g3.png","img/g4.png","img/g5.png"];
	var bannerNum = 0;
	var bannerTimer = null;
	var oneTimer = null;

	tabWindow.onmouseover = function (){
		clearInterval(bannerTimer);
		clearTimeout(oneTimer);
	}

	tabWindow.onmouseout = function (){
		oneTimer = setTimeout(autoplay,500);
	}

	//banner图片自动播放
	oneTimer;

	function autoplay(){
		bannerTimer = setInterval(function(){
			bannerNum++;
			if (bannerNum === arrImg.length){
				bannerNum = 0;
			}
			tabBanner(bannerNum);
			btnsTab(bannerNum);
		},2000);
	}

	//banner无缝滚动
	function tabBanner(num){
		topBannerImgs[1].src = arrImg[num];
		Move(topBanner,{"left":-841},1000,function(){
			topBanner.style.left = 0;
			topBannerImgs[0].src = arrImg[num];
		});
	};

	//点击前后按钮切换banner
	var bannerPrev = document.querySelector(".tabwindow .previous a");
	var bannerNext = document.querySelector(".tabwindow .next a");
	var tabBtns = document.querySelectorAll(".tabwindow .tabbtns a");

	bannerNext.onclick = function (){
		bannerNum++;
		if ( bannerNum === arrImg.length){
			bannerNum = 0;
		}
		topBannerImgs[0].src = arrImg[bannerNum];
		btnsTab(bannerNum);
	}

	bannerPrev.onclick = function (){
		bannerNum--;
		if ( bannerNum<0 ){
			bannerNum = arrImg.length-1;
		}
		topBannerImgs[0].src = arrImg[bannerNum];
		btnsTab(bannerNum);
	}

	function btnsTab(a){
		for (var i = 0; i < tabBtns.length; i++) {
			tabBtns[i].className = "";
		}
		tabBtns[a].className = "a1";
	}
    //点击小圆点切换banner
    for (var i = 0;i<tabBtns.length;i++){
        tabBtns[i].index = i;
        tabBtns[i].onclick = function () {
            bannerNum = this.index;
            topBannerImgs[0].src = arrImg[bannerNum];
            btnsTab(bannerNum);
        }
    }

	//背景换肤
	var changeBgBtns = document.querySelectorAll(".tabbgc a");
	var header = document.getElementById('header');
	var logo = document.querySelector(".headercontent .logo");
	var bgNum = 0;

	for (var i = 0; i < changeBgBtns.length; i++) {
		changeBgBtns[i].index=i;
		
		changeBgBtns[i].onmouseover = function (){
			this.className = "active";
		}

		changeBgBtns[i].onclick = function (){
			bgNum = this.index;
			clearBg(bgNum);
		}
		changeBgBtns[i].onmouseout = function (){
			clearBg(bgNum);
		}
	}

	changeBgBtns[0].addEventListener("click",function(){
		clearBg(0);
		document.body.style.backgroundImage = "url(img/bj1.png)";
		header.style.backgroundImage = "url(img/headerbg1.png)";
		logo.style.backgroundImage = "url(img/logo1.png)";
	});	
		
	changeBgBtns[1].addEventListener("click",function(){
		clearBg(1);
		document.body.style.backgroundImage = "url(img/bj2.jpg)";
		header.style.backgroundImage = "url(img/headerbg2.png)";
		logo.style.backgroundImage = "url(img/logo2.png)";
	});

	changeBgBtns[2].addEventListener("click",function(){
		clearBg(2);
		document.body.style.backgroundImage = "url(img/bj3.jpg)";
		header.style.backgroundImage = "url(img/headerbg3.png)";
		logo.style.backgroundImage = "url(img/logo3.png)";
	});
	
	function clearBg(bgNum){
		for (var i = 0; i < changeBgBtns.length; i++) {
			changeBgBtns[i].className = "";
		}
		changeBgBtns[bgNum].className = "active";
	}

	//本页跳转
	var tabbtn1 = document.getElementById("tabbtn1");
	var tabHeader = document.querySelectorAll(".headercontent .nav a");
    var contentSections = document.querySelectorAll("#concent > div");

	for (var i = 0; i < tabHeader.length; i++) {
		tabHeader[i].index = i;
		tabHeader[i].onmouseover = function (){
			tabbtn1.style.left = 134*(this.index)+"px";
		}
	}
	/*tabHeader[0].onclick = function(){
		window.scrollTo(0,0);
	}
	tabHeader[1].onclick = function(){
		window.scrollTo(0,677);
	}
	tabHeader[2].onclick = function(){
		window.scrollTo(0,1283);
	}
	tabHeader[3].onclick = function(){
		window.scrollTo(0,1935);
	}*/
	/*var _targetTop = jQuery("#"+_rel).offset().top;
	jQuery("html,body").animate({scrollTop:_targetTop},o.timer);*/

	/*for (var i = 0; i < tabHeader.length; i++) {
		tabHeader[i].index = i;
		tabHeader[i].onclick = function(){
			console.log(getDis(contentSections[this.index])-130);
			console.log(contentSections[1].offsetTop);
			window.scrollTo(0,getDis(contentSections[this.index])||0);
		}
	}

	function getDis(element){
		var y = element.getBoundingClientRect().top;
		y += document.documentElement.scrollTop || document.body.scrollTop;
		return y;
	}*/

    //web-design-works的选项卡切换
    var works = document.querySelectorAll(".web-design-works>div");
    var webnavs = document.querySelectorAll(".webnav a");
    for (var i = 0; i < webnavs.length; i++) {
    	webnavs[i].index = i;
    	webnavs[i].onclick = function (){
    		for (var i = 0; i < webnavs.length; i++) {
    			webnavs[i].parentNode.className = "";
    			works[i].className = "";
    		}
    		webnavs[this.index].parentNode.className = "allweb";
    		works[this.index].className = "active";
    	}
    }

    // 放大镜效果
    var webImgs = document.querySelectorAll(".web-design-works .webimg");
    var mask = document.getElementById("#mask");
    var bigPicImgs = document.querySelectorAll(".big-pic img");

    for (var i = 0; i < webImgs.length; i++) {
    	 webImgs[i].index = i;
    	 webImgs[i].onmouseover = function(){
	    	var img = this.getElementsByTagName("img")[0];
	    	var webZoom = this.getElementsByTagName("div")[0];
	    	img.style.opacity  = 0;
	    	webZoom.style.top = "-122px";
	    	webZoom.onclick = function (){
	    		mask.style.display = "block";
	    		bigPicImgs[0].src = ""
	    	}
	    	this.onmouseout = function(){
		    	img.style.opacity  = 1;
		    	webZoom.style.top = "-245px";
		    }
	    }
    }

    //aboutus切换选项卡
    
    var aboutNavLis = document.querySelectorAll(".aboutnav>li");
    var aboutNavMove = document.querySelector(".aboutnavmove");
    var aboutUl = document.querySelector("#aboutUl");
	
	for (var i = 0; i < aboutNavLis.length; i++) {
		aboutNavLis[i].index = i;
		aboutNavLis[i].onclick = function(){
			aboutNavMove.style["margin-left"] = (this.index)*80+"px";
			aboutUl.style.left = -(this.index)*827+"px";
		}  
	}
	
