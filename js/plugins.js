(function(){var method;var noop=function(){};var methods=['assert','clear','count','debug','dir','dirxml','error','exception','group','groupCollapsed','groupEnd','info','log','markTimeline','profile','profileEnd','table','time','timeEnd','timeline','timelineEnd','timeStamp','trace','warn'];var length=methods.length;var console=(window.console=window.console||{});while(length--){method=methods[length];if(!console[method]){console[method]=noop;}}}());;window.Modernizr=function(a,b,c){function w(a){j.cssText=a}function x(a,b){return w(m.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var B in n)v(n,B)&&(s=B.toLowerCase(),e[s]=n[B](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=m,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document);var qualifyURL=function(url){var img=document.createElement('img');img.src=url;url=img.src;img.src=null;return url;};(function($,window,document,undefined){$.fn.visible=function(partial){if(!$(this).offset())
    return true;var $t=$(this),$w=$(window),viewTop=$w.scrollTop(),viewBottom=viewTop+ $w.height(),_top=$t.offset().top,_bottom=_top+ $t.height(),compareTop=partial===true?_bottom:_top,compareBottom=partial===true?_top:_bottom;return((compareBottom<=viewBottom)&&(compareTop>=viewTop));};var pluginName="finalTilesGallery",defaults={margin:10,minTileWidth:200,ignoreImageAttributes:true,imageSizeFactor:[[4000,.9],[1024,.8],[800,.7],[600,.4],[480,.2],[320,.1]],gridSize:10,allowEnlargement:true,autoLoadURL:null,autoLoadOffset:50,onComplete:function(){},onUpdate:function(){},debug:false};function Plugin(element,options){this.element=element;this.$element=$(element);this.settings=$.extend({},defaults,options);if(!this.settings.gridSize)
    this.settings.gridSize=5;this._defaults=defaults;this._name=pluginName;this.tiles=[];this._loadedImages=0;this.edges=[];this.currentWidth=0;this.currentImageSizeFactor=1;this.ajaxComplete=false;this.isLoading=false;this.currentPage=1;this.init();}
    $.extend(Plugin.prototype,{print:function(text){if(this.settings.debug)
        console.log(text);},setCurrentImageSizeFactor:function(){this.currentImageSizeFactor=1;var ww=$(window).width();for(var i=0;i<this.settings.imageSizeFactor.length;i++){if(this.settings.imageSizeFactor[i][0]>=ww)
        this.currentImageSizeFactor=this.settings.imageSizeFactor[i][1];}
        if(!this.currentImageSizeFactor)
            this.currentImageSizeFactor=1;this.print("current image size factor: "+ this.currentImageSizeFactor+" ("+ ww+")");},init:function(){var instance=this;this.$element.find(".ftg-items").css({position:'relative'});this.tiles=this.$element.find('.tile').not('.ftg-hidden');this.tiles.css({transition:'all .3s'});this.currentWidth=this.$element.width();this.print("this.currentWidth: "+ this.currentWidth);var _resizeTo=0;this.setCurrentImageSizeFactor();$(window).resize(function(){_resizeTo=setTimeout(function(){if(instance.currentWidth!=instance.$element.width()){clearTimeout(_resizeTo);instance.print("this.currentWidth",this.currentWidth);instance.currentWidth=instance.$element.width();instance.setCurrentImageSizeFactor();instance.refresh();}},500);});instance.isLoading=true;if(instance.settings.autoLoadURL){$(window).scroll(function(){if(!instance.ajaxComplete&&!instance.isLoading){if($(window).scrollTop()>=$(document).height()- $(window).height()- instance.settings.autoLoadOffset){instance.isLoading=true;$.get(instance.settings.autoLoadURL,{page:++instance.currentPage},function(html){if($.trim(html).length==0){instance.ajaxComplete=true;}else{instance.$element.find(".ftg-items").append(html);instance.tiles=instance.$element.find('.tile')
        instance.loadImage();}});}}});}
        this.setupFilters();this.edges.push({left:0,top:0,width:this.currentWidth,index:0});this.loadImage();},setupFilters:function(){var instance=this;instance.$element.find(".ftg-filters a").click(function(e){e.preventDefault();instance.$element.find(".ftg-filters a").removeClass("selected");$(this).addClass("selected");var ft=$(this).attr("href").replace("#ftg-set-","");if(ft=="ftgall"){instance.$element.find(".tile").removeClass("ftg-hidden");}else{instance.$element.find(".tile").not(".ftg-set-"+ ft).addClass("ftg-hidden").end().filter(".ftg-set-"+ ft).removeClass("ftg-hidden");}
        instance.refresh();});},printEdges:function(){this.$element.find(".edge").remove();for(i=0;i<this.edges.length;i++){var $e=$("<div class='edge' />");$e.append("top: "+ this.edges[i].top+"<br>");$e.append("left: "+ this.edges[i].left+"<br>");$e.append("width: "+ this.edges[i].width+"<br>");$e.css({left:this.edges[i].left,top:this.edges[i].top,marginTop:-25,marginLeft:20});this.$element.append($e);}},printEdge:function(edge){var $e=$("<div class='edge enlarged-"+edge.enlarged+"' />");$e.append("<b>"+ edge.index+" "+ edge.case+"</b><br>");$e.append("t: "+ Math.round(edge.top)+" l: "+ edge.left+"<br>");$e.append("width: "+ edge.width+"<br>");$e.append("idx: "+ edge.tileIndex+"<br>");$e.css({left:edge.left,top:edge.top,marginTop:-25,marginLeft:20});this.$element.append($e);},refresh:function(){this.$element.find(".edge").remove();this.edges=[{left:0,top:0,width:this.currentWidth}];this.tiles.removeClass("ftg-loaded ftg-enlarged");this.tiles=this.$element.find('.tile').not('.ftg-hidden');this._loadedImages=0;this.loadImage();},loadImage:function(){var instance=this;var $tile=this.tiles.eq(this._loadedImages);if($tile.children("iframe").length)
        $tile.children("iframe").addClass("item");var $item=$tile.find('.item');function next(){instance.add(instance._loadedImages);if(++instance._loadedImages<instance.tiles.length){instance.loadImage();}else{var height=instance.lowerEdgeTop();instance.print("lower edge top: "+ height);instance.$element.find(".ftg-items").height(height);instance.isLoading=false;instance.settings.onComplete();}}
        switch($item.get(0).tagName.toLowerCase()){case"img":var img=new Image();img.onload=function(){var iFactor=instance.currentImageSizeFactor;if($tile.data("ftg-ignore-size-factor"))
            iFactor=1;$item.attr("src",this.src);$item.data("width",img.width*iFactor);$item.data("height",img.height*iFactor);$item.data("owidth",img.width);$item.data("oheight",img.height);next();}
            img.onerror=function(){instance.print("error loading image: "+ img.src);next();}
            img.src=$item.data("src");$tile.data("ftg-type","image");break;case"iframe":$item.data("width",$item.attr("width"));$item.data("height",$item.attr("height"));$item.data("owidth",$item.attr("width"));$item.data("oheight",$item.attr("height"));$tile.data("ftg-type","iframe");next();break;default:$item.data("width",$item.data("width"));$item.data("height",$item.data("height"));$item.data("owidth",$item.data("width"));$item.data("oheight",$item.data("height"));$tile.data("ftg-type","generic");next();break;}},higherEdge:function(){var left=0;var _top=100000;var _left=0;var found=0;for(var i=0;i<this.edges.length;i++){if(this.edges[i].top<_top){found=i;_top=this.edges[i].top;}}
        return this.edges[found];},lowerEdgeTop:function(){var min=0;for(var i=0;i<this.edges.length;i++){if(this.edges[i].top>min){min=this.edges[i].top;}}
        return min;},alignEdge:function(edge,index){for(var i=0;i<this.edges.length;i++){if(this.edges[i].left+ this.edges[i].width+ this.settings.margin==edge.left){this.print("found edge on left",i);if(edge.top==this.edges[i].top){this.print("edges can be aligned [1]");return{side:'left',edge:this.edges[i]};}}}
        for(var i=0;i<this.edges.length;i++){if(this.edges[i].left- this.settings.margin==edge.left+ edge.width){this.print("found edge on right",i);if(edge.top==this.edges[i].top){this.print("edges can be aligned [2]");return{side:'right',edge:this.edges[i]};}}}
        return null;},removeEdge:function(edge){var tmp=[];for(var i=0;i<this.edges.length;i++){if(this.edges[i]!=edge)
        tmp.push(this.edges[i]);}
        this.edges=tmp;},add:function(tileIndex){var $t=this.tiles.eq(tileIndex);var $item=$t.find('.item');var w=$item.data('width');var h=$item.data('height');var hEdge=this.higherEdge();this.print(hEdge);hEdge.tileIndex=tileIndex;this.print(tileIndex+" ["+ $t.data("ftg-type")+"] ("+ w+"x"+ h+")");if(hEdge.top>0){hEdge.top+=this.settings.margin;}
        $t.css({left:hEdge.left,top:hEdge.top,position:'absolute'});hEdge.enlarged=false;if(hEdge.width<w+ this.settings.margin){hEdge.case='Te';this.print('Te',hEdge.width);var w2=hEdge.width;var h2=(h/w)*w2;if(w2+ hEdge.left- this.settings.margin==this.currentWidth){this.print("END");w2-=this.settings.margin;h2=(h/w)*w2;}
            w=w2;h=h2;}else if(hEdge.width>w){this.print('tE');if(hEdge.width- w>=this.settings.minTileWidth){hEdge.case='tE';this.print('tE1',hEdge.width,hEdge.left,this.currentWidth);var newEdge={left:hEdge.left+ w+ this.settings.margin,top:hEdge.top-(hEdge.top>0?this.settings.margin:0),width:hEdge.width- w- this.settings.margin,marginLeft:true,case:'NEW',index:hEdge.index+ 1}
            this.edges.push(newEdge);}else{hEdge.case='tE2';this.print('tE2');this.print("enlargement",hEdge.width,hEdge.left,this.currentWidth);var m=hEdge.left+ hEdge.width==this.currentWidth?0:this.settings.margin;var w2=hEdge.width;var h2=this.settings.allowEnlargement?(h/w)*w2:h;if(this.settings.allowEnlargement){$t.addClass("ftg-enlarged");hEdge.enlarged=true;}else{$t.find(".item").css({width:w,height:h});}
            w=w2;h=h2;}}
        hEdge.top+=h;var diff=hEdge.top%this.settings.gridSize;hEdge.top-=diff;h-=diff;hEdge.left=hEdge.left;hEdge.width=w;var printEdge=true;var aligned=this.alignEdge(hEdge,tileIndex);if(aligned){if(aligned.side=='left'){this.removeEdge(hEdge);aligned.edge.width+=w+ this.settings.margin;h=h-(hEdge.top- aligned.edge.top);hEdge.top-=h;printEdge=false;}else{this.removeEdge(aligned.edge);hEdge.width+=this.settings.margin+ aligned.edge.width;printEdge=false;}
            $t.height(h);}
        if(this.$element.find(".ftg-items").height()<hEdge.top)
            this.$element.find(".ftg-items").height(hEdge.top);if(this.settings.debug&&printEdge){this.printEdge(hEdge);}
        if($t.data("ftg-type")=="iframe"){$t.find("iframe").height(h);}
        this.print(w+"x"+ h);this.print("----");$t.css({width:w,height:h});var ratio=w/$item.data("width");var hdiff=($item.data("height")*ratio)- h;if(hdiff>0){$item.css({top:0-(hdiff/2)});}
        $t.addClass("ftg-loaded");}});$.fn[pluginName]=function(options){this.each(function(){if(!$.data(this,"plugin_"+ pluginName)){$.data(this,"plugin_"+ pluginName,new Plugin(this,options));}});return this;};$(function(){$(".ftg-social a").click(function(e){e.preventDefault();var social=$(this).data("social");var $tile=$(this).parents(".tile").first();var image=$tile.data("big");if(!image)
        image=$tile.find(".item").attr("src");var text=$.trim($tile.find(".caption").text());if(!text.length)
        text=document.title;if(social=="facebook"){var url="https://www.facebook.com/dialog/feed?app_id=1447224948871585&"+"link="+encodeURIComponent(location.href)+"&"+"display=popup&"+"name="+encodeURIComponent(document.title)+"&"+"caption=&"+"description="+encodeURIComponent(text)+"&"+"picture="+encodeURIComponent(qualifyURL(image))+"&"+"ref=share&"+"actions={%22name%22:%22View%20the%20gallery%22,%20%22link%22:%22"+encodeURIComponent(location.href)+"%22}&"+"redirect_uri=http://final-tiles-gallery.com/facebook_redirect.html";var w=window.open(url,"ftgw","location=1,status=1,scrollbars=1,width=600,height=400");w.moveTo((screen.width/2)-(300),(screen.height/2)-(200));}
        if(social=="twitter"){var w=window.open("https://twitter.com/intent/tweet?url="+ encodeURI(location.href.split('#')[0])+"&text="+ encodeURI(text),"ftgw","location=1,status=1,scrollbars=1,width=600,height=400");w.moveTo((screen.width/2)-(300),(screen.height/2)-(200));}
        if(social=="pinterest"){var url="http://pinterest.com/pin/create/button/?url="+ encodeURIComponent(location.href)+"&description="+ encodeURI(text);url+=("&media="+ encodeURIComponent(qualifyURL(image)));var w=window.open(url,"ftgw","location=1,status=1,scrollbars=1,width=600,height=400");w.moveTo((screen.width/2)-(300),(screen.height/2)-(200));}
        if(social=="google-plus"){var url="https://plus.google.com/share?url="+ encodeURI(location.href);var w=window.open(url,"ftgw","location=1,status=1,scrollbars=1,width=600,height=400");w.moveTo((screen.width/2)-(300),(screen.height/2)-(200));}});});})(jQuery,window,document);(function(){var a=jQuery,b=function(){function a(){this.fadeDuration=500,this.fitImagesInViewport=!0,this.resizeDuration=700,this.positionFromTop=50,this.showImageNumberLabel=!0,this.alwaysShowNavOnTouchDevices=!1,this.wrapAround=!1}return a.prototype.albumLabel=function(a,b){return"Image "+a+" of "+b},a}(),c=function(){function b(a){this.options=a,this.album=[],this.currentImageIndex=void 0,this.init()}return b.prototype.init=function(){this.enable(),this.build()},b.prototype.enable=function(){var b=this;a("body").on("click","a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]",function(c){return b.start(a(c.currentTarget)),!1})},b.prototype.build=function(){var b=this;a("<div id='lightboxOverlay' class='lightboxOverlay'></div><div id='lightbox' class='lightbox'><div class='lb-outerContainer'><div class='lb-container'><img class='lb-image' src='' /><div class='lb-nav'><a class='lb-prev' href='' ></a><a class='lb-next' href='' ></a></div><div class='lb-loader'><a class='lb-cancel'></a></div></div></div><div class='lb-dataContainer'><div class='lb-data'><div class='lb-details'><span class='lb-caption'></span><span class='lb-number'></span></div><div class='lb-closeContainer'><a class='lb-close'></a></div></div></div></div>").appendTo(a("body")),this.$lightbox=a("#lightbox"),this.$overlay=a("#lightboxOverlay"),this.$outerContainer=this.$lightbox.find(".lb-outerContainer"),this.$container=this.$lightbox.find(".lb-container"),this.containerTopPadding=parseInt(this.$container.css("padding-top"),10),this.containerRightPadding=parseInt(this.$container.css("padding-right"),10),this.containerBottomPadding=parseInt(this.$container.css("padding-bottom"),10),this.containerLeftPadding=parseInt(this.$container.css("padding-left"),10),this.$overlay.hide().on("click",function(){return b.end(),!1}),this.$lightbox.hide().on("click",function(c){return"lightbox"===a(c.target).attr("id")&&b.end(),!1}),this.$outerContainer.on("click",function(c){return"lightbox"===a(c.target).attr("id")&&b.end(),!1}),this.$lightbox.find(".lb-prev").on("click",function(){return b.changeImage(0===b.currentImageIndex?b.album.length-1:b.currentImageIndex-1),!1}),this.$lightbox.find(".lb-next").on("click",function(){return b.changeImage(b.currentImageIndex===b.album.length-1?0:b.currentImageIndex+1),!1}),this.$lightbox.find(".lb-loader, .lb-close").on("click",function(){return b.end(),!1})},b.prototype.start=function(b){function c(a){d.album.push({link:a.attr("href"),title:a.attr("data-title")||a.attr("title")})}var d=this,e=a(window);e.on("resize",a.proxy(this.sizeOverlay,this)),a("select, object, embed").css({visibility:"hidden"}),this.sizeOverlay(),this.album=[];var f,g=0,h=b.attr("data-lightbox");if(h){f=a(b.prop("tagName")+'[data-lightbox="'+h+'"]');for(var i=0;i<f.length;i=++i)c(a(f[i])),f[i]===b[0]&&(g=i)}else if("lightbox"===b.attr("rel"))c(b);else{f=a(b.prop("tagName")+'[rel="'+b.attr("rel")+'"]');for(var j=0;j<f.length;j=++j)c(a(f[j])),f[j]===b[0]&&(g=j)}var k=e.scrollTop()+this.options.positionFromTop,l=e.scrollLeft();this.$lightbox.css({top:k+"px",left:l+"px"}).fadeIn(this.options.fadeDuration),this.changeImage(g)},b.prototype.changeImage=function(b){var c=this;this.disableKeyboardNav();var d=this.$lightbox.find(".lb-image");this.$overlay.fadeIn(this.options.fadeDuration),a(".lb-loader").fadeIn("slow"),this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(),this.$outerContainer.addClass("animating");var e=new Image;e.onload=function(){var f,g,h,i,j,k,l;d.attr("src",c.album[b].link),f=a(e),d.width(e.width),d.height(e.height),c.options.fitImagesInViewport&&(l=a(window).width(),k=a(window).height(),j=l-c.containerLeftPadding-c.containerRightPadding-20,i=k-c.containerTopPadding-c.containerBottomPadding-120,(e.width>j||e.height>i)&&(e.width/j>e.height/i?(h=j,g=parseInt(e.height/(e.width/h),10),d.width(h),d.height(g)):(g=i,h=parseInt(e.width/(e.height/g),10),d.width(h),d.height(g)))),c.sizeContainer(d.width(),d.height())},e.src=this.album[b].link,this.currentImageIndex=b},b.prototype.sizeOverlay=function(){this.$overlay.width(a(window).width()).height(a(document).height())},b.prototype.sizeContainer=function(a,b){function c(){d.$lightbox.find(".lb-dataContainer").width(g),d.$lightbox.find(".lb-prevLink").height(h),d.$lightbox.find(".lb-nextLink").height(h),d.showImage()}var d=this,e=this.$outerContainer.outerWidth(),f=this.$outerContainer.outerHeight(),g=a+this.containerLeftPadding+this.containerRightPadding,h=b+this.containerTopPadding+this.containerBottomPadding;e!==g||f!==h?this.$outerContainer.animate({width:g,height:h},this.options.resizeDuration,"swing",function(){c()}):c()},b.prototype.showImage=function(){this.$lightbox.find(".lb-loader").hide(),this.$lightbox.find(".lb-image").fadeIn("slow"),this.updateNav(),this.updateDetails(),this.preloadNeighboringImages(),this.enableKeyboardNav()},b.prototype.updateNav=function(){var a=!1;try{document.createEvent("TouchEvent"),a=this.options.alwaysShowNavOnTouchDevices?!0:!1}catch(b){}this.$lightbox.find(".lb-nav").show(),this.album.length>1&&(this.options.wrapAround?(a&&this.$lightbox.find(".lb-prev, .lb-next").css("opacity","1"),this.$lightbox.find(".lb-prev, .lb-next").show()):(this.currentImageIndex>0&&(this.$lightbox.find(".lb-prev").show(),a&&this.$lightbox.find(".lb-prev").css("opacity","1")),this.currentImageIndex<this.album.length-1&&(this.$lightbox.find(".lb-next").show(),a&&this.$lightbox.find(".lb-next").css("opacity","1"))))},b.prototype.updateDetails=function(){var b=this;"undefined"!=typeof this.album[this.currentImageIndex].title&&""!==this.album[this.currentImageIndex].title&&this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast").find("a").on("click",function(){location.href=a(this).attr("href")}),this.album.length>1&&this.options.showImageNumberLabel?this.$lightbox.find(".lb-number").text(this.options.albumLabel(this.currentImageIndex+1,this.album.length)).fadeIn("fast"):this.$lightbox.find(".lb-number").hide(),this.$outerContainer.removeClass("animating"),this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration,function(){return b.sizeOverlay()})},b.prototype.preloadNeighboringImages=function(){if(this.album.length>this.currentImageIndex+1){var a=new Image;a.src=this.album[this.currentImageIndex+1].link}if(this.currentImageIndex>0){var b=new Image;b.src=this.album[this.currentImageIndex-1].link}},b.prototype.enableKeyboardNav=function(){a(document).on("keyup.keyboard",a.proxy(this.keyboardAction,this))},b.prototype.disableKeyboardNav=function(){a(document).off(".keyboard")},b.prototype.keyboardAction=function(a){var b=27,c=37,d=39,e=a.keyCode,f=String.fromCharCode(e).toLowerCase();e===b||f.match(/x|o|c/)?this.end():"p"===f||e===c?0!==this.currentImageIndex?this.changeImage(this.currentImageIndex-1):this.options.wrapAround&&this.album.length>1&&this.changeImage(this.album.length-1):("n"===f||e===d)&&(this.currentImageIndex!==this.album.length-1?this.changeImage(this.currentImageIndex+1):this.options.wrapAround&&this.album.length>1&&this.changeImage(0))},b.prototype.end=function(){this.disableKeyboardNav(),a(window).off("resize",this.sizeOverlay),this.$lightbox.fadeOut(this.options.fadeDuration),this.$overlay.fadeOut(this.options.fadeDuration),a("select, object, embed").css({visibility:"visible"})},b}();a(function(){{var a=new b;new c(a)}})}).call(this);