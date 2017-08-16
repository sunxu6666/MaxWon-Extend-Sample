var changeScoreTagSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABaCAYAAABzAJLvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphZTk2MjBkOC1hODhkLTFmNDItODFlYi01NWFlYThiYzMxY2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzVCQ0U5REUyRTgzMTFFN0ExMjVDQUJGQTIxMjVCMjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzVCQ0U5REQyRTgzMTFFN0ExMjVDQUJGQTIxMjVCMjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDplNGVhY2JjZC03MDBlLTI0NGItYjc0ZC04OTRjMzY0N2IzYmYiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDplOGQ4OTFmOS0yMGM2LTExZTctYmM4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";

var photoBGImgCss = "url(data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAyAAD/4QOPaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzMiA3OS4xNTkyODQsIDIwMTYvMDQvMTktMTM6MTM6NDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YWU5NjIwZDgtYTg4ZC0xZjQyLTgxZWItNTVhZWE4YmMzMWNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY1MDBBMEZGMkVFRjExRTc4ODhGOTgyMTVEN0QyRkI3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY1MDBBMEZFMkVFRjExRTc4ODhGOTgyMTVEN0QyRkI3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1LjUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZTc1ZWQxYjgtMGVjYS0yMDRhLWJhYjMtYTBjODE5YWNiOWU5IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZThkODkxZjktMjBjNi0xMWU3LWJjOGQtZTU0MmU2OWIwMDY4Ii8+IDwv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)";



window.onload = function () {
	var myScroll;
	var knf =false;
	//========================
	var baseUrl = "//wonapi.maxleap.cn/1.0/"
	var appInfo = getUrlQueryInfo();
	var memberId = appInfo.memId;
	var winh = parseInt($(window).height());
	var changeScoreTag = document.getElementById("changeScore");

	document.getElementById("divEnter").getElementsByTagName("table")[0].style.height=(winh-80)+"px";
	//========================
	//document.getElementById("scroller").getElementsByTagName("div")[0].innerHTML="";
	var bStartPos=false;
	loaded();
	function loaded () {
		myScroll = new IScroll('#wrapper', {
			probeType: 3,
			scrollbars: true,
			mouseWheel: true,
			click: true,
			shrinkScrollbars: 'clip',
			fadeScrollbars: true,
			freeScroll: true
		});
		
		myScroll.on('scroll', updatePosition);
		myScroll.on('scrollEnd', enddatePosition);
		myScroll.on('scrollStart', startPosition);
		initApp();
	}
	function startPosition(){bStartPos=true;}
	function updatePosition () {
		if((this.y>>0)>80){
			knf=true;
		}
		if (this.y > 0 && (this.pointY > window.innerHeight - 1) && bStartPos) {
			bStartPos=false;
			this.scrollTo(0, 0, 300);
		}
	}
	function enddatePosition(){
		if(knf){
			window.location.reload();
			//window.location.href=window.location.href+"?id="+10000*Math.random();
			knf=false;
		}
	}
	//初始化页面
	function initApp() {
		if (judgeIsLogin()) {
			getMemberInfoAndRender();
		}
	}
	//判断是否已经登录
	function judgeIsLogin() {
		if (appInfo && appInfo.memId && appInfo.sessionToken) {
			// 已经登录
			myScroll.refresh();
			$("#divEnter").hide();
			return true;
		} else {
			// 未登录, 要求用户登录
			document.getElementById("btEenter").onclick=function(){
				window.location.href="https://www.maxwon.cn/member";
			}
			return false;
		}
	}

	function renderPage(res) {
        //document.getElementById("nickname").innerText +="1_"
        document.getElementById("nickname").innerText = res.nickName;
        document.getElementById("username").innerText = res.phone;
        document.getElementById("balance").innerText = (res.balance / 100).toFixed(2);
        document.getElementById("integral").innerText = res.integral;
        if(res.icon!=""&&res.icon!=null){
            $("#photo").css("background-image","url('"+res.icon+"')");
        }else{
            $("#photo").css("background-image",photoBGImgCss);
        }
        document.getElementById("btnWDSY").onclick=function(){window.location.href="https://www.maxwon.cn/member/income"};
        document.getElementById("btnWDDD").onclick=function(){window.location.href="https://www.maxwon.cn/member/morder"};
        document.getElementById("btnWDHYK").onclick=function(){window.location.href="https://www.maxwon.cn/member/card"};
        document.getElementById("btnSHFW").onclick=function(){window.location.href="https://www.maxwon.cn/member/service"};
        document.getElementById("btnKF").onclick=function(){window.location.href="https://www.maxwon.cn/support"};
        document.getElementById("btnYHQ").onclick=function(){window.location.href="https://www.maxwon.cn/coupon"};
        document.getElementById("btnSZ").onclick=function(){window.location.href="https://www.maxwon.cn/member/setting"};
        getMemberResult();
    }

	//获取会员信息并渲染页面
	function getMemberInfoAndRender() {
		ajaxGet(baseUrl+"mems/" + memberId, {}, function (res) {
			if (res) {
                renderPage(res);
			}
		}, function (err) {
			alert("获取会员信息失败");
		});
	}

	//判断是否已签到
	function getMemberResult() {
		$.ajax({
			 type: 'POST',
			 url: "https://wonapi.maxleap.cn/1.0/mems/"+appInfo.memId+"/checkSign",
			 dataType: "json",
			 contentType: "application/json",
			 async: false,
			 headers : {'X-ML-Session-Token':appInfo.sessionToken,'X-ML-AppId':appInfo.appId},
			 success: function(data){
				if(data.result){
					changeScoreTag.src=changeScoreTagSrc;
				}
                 //绑定签到事件
				bindChangeScoreEvent();
			 }
		});
	}
	//绑定签到事件
	function bindChangeScoreEvent() {
		changeScoreTag.addEventListener("click", function (e) {
			if(this.src.toString().indexOf("qiandao2")==-1){
				$.ajax({
					 type: 'POST',
					 url: "https://wonapi.maxleap.cn/1.0/mems/"+appInfo.memId+"/sign",
					 dataType: "json", 
					 headers : {'X-ML-Session-Token':appInfo.sessionToken,'X-ML-AppId':appInfo.appId},
					 success: function(data){
						this.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABaCAYAAABzAJLvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphZTk2MjBkOC1hODhkLTFmNDItODFlYi01NWFlYThiYzMxY2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzVCQ0U5REUyRTgzMTFFN0ExMjVDQUJGQTIxMjVCMjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzVCQ0U5REQyRTgzMTFFN0ExMjVDQUJGQTIxMjVCMjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDplNGVhY2JjZC03MDBlLTI0NGItYjc0ZC04OTRjMzY0N2IzYmYiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDplOGQ4OTFmOS0yMGM2LTExZTctYmM4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";
						getMemberInfoAndRender();
					 }
				});
			}
		});
	}
	//获取地址栏信息
	function getUrlQueryInfo() {
		var appId, /*appKey,*/ sessionToken, memId;
		appId = getQueryString("appId");
		//appId = "58d9d4a863e54d0008b00de6";
		// appKey = getQueryString("apiKey");
		sessionToken = getQueryString("sessionToken");
		//sessionToken = "cub24PCMqI8CsUgEZK_VW6ADc6k34E9ggqsGlR9qPHK";
		memId = getQueryString("userid");
		//memId = 1;
		return {
			appId: appId,
			// appKey: appKey,
			sessionToken: sessionToken,
			memId: memId
		};
		//获取地址栏参数
		function getQueryString(name) {
			var prefix = 'maxleap_';
			name = prefix+name;
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", 'i');
			var result = window.location.search.substr(1).match(reg);
			if (result != null) {
				return unescape(result[2]);
			}
			return null;
		}
	}
	//ajax请求
	function ajax(url, data, callback, errorCallBack, type) {
		var xhr;
		type = type || 'get';
		if (window.ActiveXObject) {// code for IE5 and IE6
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		} else if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		}
		if (!xhr) {
			return
		}
		xhr.onreadystatechange = function () {
			//接受数据完毕
			if (xhr.readyState === 4) {
				if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
					if (xhr.responseText) {
						try {
							callback(JSON.parse(xhr.responseText));
							return;
						} catch (e) {
							errorCallBack(e);
						}
					}
					callback(xhr.responseText);
				} else {
					errorCallBack(xhr.responseText);
				}
			}
		}
		//simple
		//xhr.addEventListener("load", function () {
		// debugger
		//});
		//xhr.addEventListener("error", function () {
		//   debugger
		//});
		xhr.open(type, url);
		xhr.setRequestHeader("X-ML-AppId", appInfo.appId);
		// xhr.setRequestHeader("X-ML-ApiKey", appInfo.appKey);
		xhr.setRequestHeader("X-ML-Session-Token", appInfo.sessionToken);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(JSON.stringify(data) || null);
	}
	//ajax get 请求
	function ajaxGet(url, data, callback, errorCallBack) {
		return ajax(url, data, callback, errorCallBack, 'get');
	}
	//ajax put 请求
	function ajaxPut(url, data, callback, errorCallBack) {
		return ajax(url, data, callback, errorCallBack, 'put');
	}
}