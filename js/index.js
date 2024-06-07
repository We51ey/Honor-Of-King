window.onload = function() {
	var box = document.getElementsByClassName('carouse1');
	var picture_ul = document.getElementsByClassName('picture-ul');
	var imgs = picture_ul[0].getElementsByTagName('li');
	var btn_ul = document.getElementsByClassName('button-ul');
	var btns = btn_ul[0].getElementsByTagName('li');
	//设置全局变量  ，中间量
	var i = index1 = 0;
	var play = null;
	//图片切换效果
	function show1(a) {
		for (i = 0; i < btns.length; i++) {
			btns[i].className = "";
			btns[a].className = "current";
		}
		for (i = 0; i < imgs.length; i++) {
			imgs[i].style.width = "0px";
			imgs[a].style.width = "600px";
			imgs[a].style.transition="width 0.15s";
			imgs[i].style.transition="width 0.15s";
		}
	}
	//切换按钮功能，背景图片响应一下
	for (i = 0; i < btns.length; i++) {
		//循环里方法调用循环里的变量体
		btns[i].index = i;
		btns[i].onmouseover = function() {
			show1(this.index);
			//取消定时操作
			clearInterval(play);
		}
	}
	//自动播放方法
	function autoPlay() {
		play = setInterval(function() {
			//play 用来保存定时的容器
			index1++;
			index1 >= imgs.length && (index1 = 0);
			show1(index1);
		}, 1000)
	}
	autoPlay();
	
	box.onmouseover = function() {
		clearInterval(play);
	};
	box.onmouseout = function() {
		autoPlay();
	};
	
	
	
	
	var news1_list = document.getElementsByClassName('news-1');
	var news1_btn_li = document.getElementsByClassName("news_btn_li")
	function show2(a) {
		for (i = 0; i < news1_list.length; i++) {
			news1_list[i].style.opacity = "0";
			news1_list[a].style.opacity = "0.9";
		}
	}
	//切换功能
	for (i = 0; i < news1_btn_li.length; i++) {
		news1_btn_li[i].index = i;
		news1_btn_li[i].onmouseover = function() {
			show2(this.index);
		}
	}
	
	
	
	
	var middle3_right_list = document.getElementsByClassName('heros');
	var middle3_right_btn_li = document.getElementsByClassName("hero-li")
	function show3(a) {
		//新闻轮播和标签相同
		for (i = 0; i < middle3_right_list.length; i++) {
			middle3_right_list[i].style.opacity = "0";
			middle3_right_list[a].style.opacity = "1";
		}
	}
	//切换功能
	for (i = 0; i < middle3_right_btn_li.length; i++) {
		middle3_right_btn_li[i].index = i;
		middle3_right_btn_li[i].onmouseover = function() {
			show3(this.index);
		}
	}
	
	
	var middle3_left_li = document.getElementsByClassName('middle3-left-1');
	var vid_btn_li = document.getElementsByClassName("video-btn-li")
	function show4(a) {
		for (i = 0; i < middle3_left_li.length; i++) {
			middle3_left_li[i].style.height = "0";
			middle3_left_li[a].style.height = "100%";
		}
	}
	//切换功能
	for (i = 0; i < vid_btn_li.length; i++) {
		vid_btn_li[i].index = i;
		vid_btn_li[i].onmouseover = function() {
			show4(this.index);
		}
	}
	
	
	
	var middle4_left_li = document.getElementsByClassName('middle4-left-1');
	var match_btn_li = document.getElementsByClassName("match-btn-li")
	function show5(a) {
		for (i = 0; i < middle4_left_li.length; i++) {
			middle4_left_li[i].style.height = "0";
			middle4_left_li[a].style.height = "100%";
		}
	}
	//切换功能
	for (i = 0; i < match_btn_li.length; i++) {
		match_btn_li[i].index = i;
		match_btn_li[i].onmouseover = function() {
			show5(this.index);
		}
	}
	
}
