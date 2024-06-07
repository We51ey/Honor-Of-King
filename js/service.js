window.onload = function() {
			var lists = document.getElementsByClassName("question-list")[0].children;
			var index=0;
			for (var i = 0; i < lists.length; i++) {
				
				var hd = lists[i].children[0];
				index = 1;
				hd.onmousedown=function(){
					index++;
					for(var i=0;i<lists.length;i++){
						var all = lists[i].children[1];
						all.style.height="0";
						if(lists[i].children[0]==this){
							var td = lists[i].children[1];							
						}
					}
					td.style.height="100%";
				}
			}
		}