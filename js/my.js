function noselect(){return!1}function addHandler(e,t){document.attachEvent?document.attachEvent("on"+e,t):document.addEventListener&&document.addEventListener(e,t,!1)}function killSelection(){window.getSelection?window.getSelection().removeAllRanges():document.selection&&document.selection.clear&&document.selection.clear()}function noSelectionEvent(e){var e=e||window.event,t=e.keyCode||e.which;return e.ctrlKey&&(65==t||85==t||80==t||83==t)||123==t?(killSelection(),e.preventDefault?e.preventDefault():e.returnValue=!1,!1):void 0}function setCookie(e,t,n){var o=new Date;o.setTime(o.getTime()+864e5*n),n="; expires="+o.toGMTString(),document.cookie=e+"="+t+n}function getParam(e){return(e=RegExp("[?&]"+e+"=([^&]*)").exec(window.location.search))&&decodeURIComponent(e[1].replace(/\+/g," "))}function setyCookie(e,t,n){var o=new Date;o.setTime(o.getTime()+864e5*n),n="; expires="+o.toGMTString(),document.cookie=e+"="+t+n}function getyParam(e){return(e=RegExp("[?&]"+e+"=([^&]*)").exec(window.location.search))&&decodeURIComponent(e[1].replace(/\+/g," "))}function getGylid(){document.getElementById("yclid_c").value=(name=new RegExp("(?:^|;\\s*)yclid=([^;]*)").exec(document.cookie))?name.split(",")[1]:""}$(document).ready(function(){function e(e,t){var n=e+Math.random()*(t+1-e);return n=Math.floor(n)}$('a[href^="#"]').bind("click.smoothscroll",function(e){e.preventDefault();var t=this.hash;$(t);$("html, body").stop().animate({scrollTop:$(t).offset().top-60},500,"swing")}),$(".fancybox").fancybox(),$(".vopros").click(function(){$(this).next(".otvet").toggleClass("show")}),$("a.dom-video").click(function(){var e=$(this).data("src");$("#dom-video").children("iframe").attr("src",e)}),$("a.arrow-bottom-slide").click(function(){return $("html,body").animate({scrollTop:$(window).scrollTop()+$(window).height()},500),!1}),$(".forms .info span").text(e(5,9)),$(".part9 .toggle").click(function(){$(this).parent(".part9").find("ul.hide").toggleClass("show")}),function(){$(function(){$("#opinionVideo").click(function(e){if(e.target.classList.contains("opinion-video__preview","active")){var t=$(e.target),n=t.next().attr("data-src");t.next().attr("src",n),new Promise(function(e,n){t.next().on("load",function(){e()})}).then(function(e){t.removeClass("active")})}})}),$(function(){$("body").click(function(e){$(".modal-youtube").each(function(){this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}',"*")})})})}(),jQuery(window).scroll(function(){jQuery(window).scrollTop()<600?(jQuery(" nav ul li").removeClass("aktiv"),jQuery(" nav ul li:nth-child(0)").addClass("aktiv")):jQuery(window).scrollTop()<1300?(jQuery(" nav ul li").removeClass("aktiv"),jQuery(" nav ul li:nth-child(1)").addClass("aktiv")):jQuery(window).scrollTop()<2e3?(jQuery(" nav ul li").removeClass("aktiv"),jQuery(" nav ul li:nth-child(2)").addClass("aktiv")):jQuery(window).scrollTop()<3e3?(jQuery(" nav ul li").removeClass("aktiv"),jQuery(" nav ul li:nth-child(3)").addClass("aktiv")):jQuery(window).scrollTop()<5300?(jQuery(" nav ul li").removeClass("aktiv"),jQuery(" nav ul li:nth-child(4)").addClass("aktiv")):jQuery(window).scrollTop()<6600?(jQuery(" nav ul li").removeClass("aktiv"),jQuery(" nav ul li:nth-child(5)").addClass("aktiv")):jQuery(window).scrollTop()<10300?(jQuery(" nav ul li").removeClass("aktiv"),jQuery(" nav ul li:nth-child(6)").addClass("aktiv")):jQuery(window).scrollTop()<11500?(jQuery(" nav ul li").removeClass("aktiv"),jQuery(" nav ul li:nth-child(7)").addClass("aktiv")):jQuery(window).scrollTop()<19500?(jQuery(" nav ul li").removeClass("aktiv"),jQuery(" nav ul li:nth-child(8)").addClass("aktiv")):(jQuery(" nav ul li").removeClass("aktiv"),jQuery(" nav ul li:nth-child(10)").addClass("aktiv"))}),jQuery(window).scroll(function(){jQuery(window).scrollTop()>300?jQuery(" nav").addClass("aktive"):jQuery(" nav").removeClass("aktive")}),$(".toggle-otziv").click(function(){return $(this).parent("li").toggleClass("auto-height"),$(this).parent("li").find(".show-text-otziv").slideToggle(),$(this).parent("li").hasClass("auto-height")?$(this).text("Свернуть"):$(this).text("Читать далее"),!1}),setTimeout(function(){var e=$("#new-video-poselok").data("srid");$("#new-video-poselok iframe").attr("src",e);var t=$("#video_kovalev").data("srid");$("#video_kovalev iframe").attr("src",t);var n=$("#video_denis").data("srid");$("#video_denis iframe").attr("src",n)},6e3)}),document.ondragstart=noselect,document.onselectstart=noselect,document.oncontextmenu=noselect,addHandler("keydown",noSelectionEvent),addHandler("keyup",noSelectionEvent);var gclid=getParam("gclid");if(gclid){var gclsrc=getParam("gclsrc");(!gclsrc||-1!==gclsrc.indexOf("aw"))&&setCookie("gclid",gclid,90)}var yclid=getyParam("yclid");if(yclid){var yclsrc=getyParam("yclsrc");(!yclsrc||-1!==yclsrc.indexOf("aw"))&&setyCookie("yclid",yclid,90)}