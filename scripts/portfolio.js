!function e(t,a,i){function n(o,r){if(!a[o]){if(!t[o]){var l="function"==typeof require&&require;if(!r&&l)return l(o,!0);if(s)return s(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var d=a[o]={exports:{}};t[o][0].call(d.exports,function(e){var a=t[o][1][e];return n(a?a:e)},d,d.exports,e,t,a,i)}return a[o].exports}for(var s="function"==typeof require&&require,o=0;o<i.length;o++)n(i[o]);return n}({1:[function(e,t,a){e("./_jquery-wheelswipe"),function(e){function t(e){var t=this;if("string"!=typeof e){var i=new a(this,e);i.build(),t._carousel=i}else{var n=e,i=t._carousel;switch(n){case"getPage":return i.currentPage;case"setPage":return void i.snapToPage(arguments[1],!0)}}}function a(t,a){this.node=t,this.$carousel=e(t),this.opts=e.extend({},a||{}),this.opts.loadPage=this.opts.loadPage||function(){}}e.fn.carousel=function(){var a,i=arguments;return e(this).each(function(){a=t.apply(this,i)}),a},a.prototype.build=function(){var t=this;return this.$pages=this.$carousel.find(".page"),this.$pageScroller=e("<div>").addClass("page-scroll").append(this.$pages).appendTo(this.$carousel),this.currentPage=-1,this.loadedPages={},this.panning=!1,this.scrollX=0,this.numPages=this.$pages.length,this.preventDefaultBrowserBehaviors(),e(window).resize(function(){t.relayout()}),this.numPages<=1?void this.relayout():(this.$carousel.addClass("pannable"),this.buildPageNavigation(),this.relayout(),this.scrollTo(0,!1,!1),void this.setupSwipe())},a.prototype.setupSwipe=function(){var e=this;this.$carousel.wheelswipe(function(t){e.snapToPage(e.currentPage+t,!0)});var t=0,a=-1,i=!1,n=new Hammer(this.$carousel.get(0),{dragLockToAxis:!0});n.on("panend pan swipe",function(n){n.preventDefault(),n.srcEvent.preventDefault();var s=n.deltaX<0;switch(n.type){case"pan":if(!i){var o=n.deltaX-t;e.panning=!0,0>a&&(a=e.currentPage),e.$carousel.addClass("panning"),e.scrollTo(e.scrollX-o),t=n.deltaX}break;case"swipe":i=!0,t=0,s=0==(n.direction&Hammer.DIRECTION_RIGHT),e.snapToPage(a+(s?1:-1),!0),setTimeout(function(){e.panning=!1,a=-1,e.$carousel.removeClass("panning")},0),n.srcEvent.stopPropagation();break;case"panend":i||(t=0,e.snapToPage(e.currentPage,!0),setTimeout(function(){e.panning=!1,a=-1,e.$carousel.removeClass("panning")},0)),i=!1}})},a.prototype.preventDefaultBrowserBehaviors=function(){this.$carousel.on("dragstart",function(e){e.preventDefault()}).on("click",function(e){me.panning&&(e.preventDefault(),e.stopPropagation())}).on("wheel",function(e){Math.abs(e.originalEvent.deltaX)&&e.preventDefault()})},a.prototype.buildPageNavigation=function(){var t=this;this.$edgeClickerPrev=e("<div>").addClass("edge-clicker prev").appendTo(this.$carousel).click(function(){t.snapToPage(t.currentPage-1,!0)}),this.$edgeClickerNext=e("<div>").addClass("edge-clicker next").appendTo(this.$carousel).click(function(){t.snapToPage(t.currentPage+1,!0)}),this.$pageDots=e("<div>").addClass("page-dots").appendTo(this.$carousel);for(var a=function(){t.snapToPage(e(this).index(),!0)},i=0;i<this.numPages;i++)this.$pageDots.append(e("<div>").addClass("page-dot").click(a))},a.prototype.loadPageByIndex=function(e){0>e||e>=this.numPages||e in this.loadedPages||(this.loadedPages[e]=!0,this.opts.loadPage(this.$pages.eq(e)))},a.prototype.scrollTo=function(t,a,i){void 0===i&&(i=!0),void 0===a&&(a=!1),this.scrollX=Math.max(0,Math.min((this.pageWidth+this.pageSpacing)*(this.numPages-1),t)),this.$pageScroller.toggleClass("animate-scroll",a).css("transform","translate3d("+-this.scrollX+"px,0,0)");var n=Math.round(this.scrollX/this.pageWidth);if(this.currentPage!=n){this.currentPage=n,i&&(this.loadPageByIndex(this.currentPage-1),this.loadPageByIndex(this.currentPage),this.loadPageByIndex(this.currentPage+1));var s=this;this.$pageDots.find(".page-dot").each(function(t){e(this).toggleClass("active",t==s.currentPage)})}},a.prototype.snapToPage=function(e,t){this.scrollTo(e*(this.pageWidth+this.pageSpacing),t)},a.prototype.relayout=function(){this.pagePeek=window.screen.width<480?16:32,this.pageSpacing=16,this.pagerWidth=this.$carousel.width(),this.pageWidth=this.pagerWidth-2*(this.pagePeek+this.pageSpacing),this.$edgeClickerPrev&&(this.$edgeClickerPrev.css({width:this.pagePeek}),this.$edgeClickerNext.css({width:this.pagePeek})),this.$carousel.find(".page").css({width:this.pageWidth,minWidth:this.pageWidth,marginRight:this.pageSpacing}),this.$carousel.find(".page:first-child").css({marginLeft:this.pageSpacing+this.pagePeek}),this.$carousel.find(".page:last-child").css({marginRight:this.pagePeek})}}(jQuery)},{"./_jquery-wheelswipe":2}],2:[function(e,t,a){!function(e){e.fn.wheelswipe=function(t){t=t||function(){};var a,i,n;return e(this).on("wheel",function(e){var s=e.originalEvent.deltaX<0?-1:1,o=Math.abs(e.originalEvent.deltaX);return o<Math.abs(e.originalEvent.deltaY)?!0:n||30>o?(i=o,!1):((o>i||s!=a)&&(a=s,n=!0,setTimeout(function(){n=!1},300),t(s)),!1)}),this}}(jQuery)},{}],3:[function(e,t,a){function i(){$(".pages").carousel(),$(window).resize(function(){$(".media").each(function(){l($(this))})}),$(".media").each(function(){l($(this))})}function n(){function e(){$("body").removeClass("has-fullscreen"),i=null}function t(e){i=e;var t=e.find("img, video").first().clone(),n=e.find(".loading-spinner").clone();if(a.empty().append(t).append(n),t.is("video")){setTimeout(function(){a.addClass("loading")},10),t.on("canplay",function(){t.addClass("loaded"),a.addClass("loaded").removeClass("loading"),t.get(0).play()});var s=t.get(0);s.load()}setTimeout(function(){$("body").addClass("has-fullscreen")},10)}var a=$("<div>").addClass("fullscreen-overlay loader-parent").click(function(){e()}).appendTo("body"),i=null;$(".page:not(.no-fullscreen) .media").click(function(){a.removeClass("loaded loading"),$(this).parents(".panning").length>0||t($(this))}),$(document).on("keydown",function(t){27==t.keyCode&&e()}),window.loadFullscreenMedia=t,window.getCurrentFullscreenMedia=function(){return i}}function s(){$(document).on("keydown",function(e){if(37==e.keyCode||39==e.keyCode){var t=37==e.keyCode?-1:1;if($("body").hasClass("has-fullscreen")){var a=getCurrentFullscreenMedia();if(a){var i=a.parent(".page"),n=i[-1==t?"prev":"next"](".page:not(.no-fullscreen)");n.length&&loadFullscreenMedia(n.find(".media"))}}else{var s=$(window).height(),o=null,r=0;$(".pages").each(function(){var e=$(this).get(0).getBoundingClientRect(),t=e.bottom-e.top,a=Math.min(e.bottom,s)-Math.max(e.top,0),i=a/t;i>r&&(o=$(this),r=i)}),o&&o.carousel("setPage",o.carousel("getPage")+t)}}})}function o(){function e(){c($(i),!0)}function t(){var e=$(window).width(),t=$(window).height();n.each(function(){var a=$(this).get(0).getBoundingClientRect();a.bottom<0||a.right<0||a.left>e||a.top>t||($(this).addClass("was-visible"),n=$("section.project:not(.was-visible)"))})}var a,i=null;$(document).on("mouseenter",".page.video .media",function(){a&&(clearTimeout(a),a=0),i=this,a=setTimeout(e,100)}).on("mouseleave",".page.video .media",function(){a&&(clearTimeout(a),a=0),c($(this),!1)}).on("click",".page.video .media",function(){$(this).find("video").get(0).currentTime=0});var n=$("section.project:not(.was-visible)");t(),$(window).on("scroll resize",t)}function r(){$(".media video").on("resize",function(){l($(this).parents(".media"))}),$(".media img").on("load",function(){l($(this).parents(".media"))})}function l(e){var t=e.children().eq(0);if(t.length&&!e.parent(".page").hasClass("no-scale")){var a=e.width(),i=e.height(),n=t.get(0).offsetWidth,s=t.get(0).offsetHeight,o=1;o=n/s>a/i?a/n:i/s,o=Math.min(o,1),t.css("transform","scale("+o+")")}}function c(e,t){e.data("should-be-playing",t);var a=e.find("video");t?e.hasClass("loaded")?a.get(0).play():(e.addClass("loading"),a.off("canplay").on("canplay",function(){e.addClass("loaded").removeClass("loading"),e.data("should-be-playing")&&a.get(0).play()}),a.get(0).load()):a.get(0).pause()}e("./_jquery-carousel"),$(document).ready(function(){i(),r(),o(),n(),s(),FastClick.attach(document.body),$(".project a").attr("target","_blank")})},{"./_jquery-carousel":1}]},{},[3]);