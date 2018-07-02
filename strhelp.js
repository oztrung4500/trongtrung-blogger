$(document).ready(function(){jQuery("#st-ads").appendTo(jQuery('a[name="more"]'))});
var loadingGif = 'https://lh5.googleusercontent.com/proxy/4bAJKgSJXhE1aVMmkJmOSE2GQuwAmXO58yABt59-J5wvyCx6Z4FyO-QfMOhJv1ledDFLN7PFrFejuAdq5rGy9bR5v4ZxRMItug=s0-d';
var text='TẢI THÊM BÀI VIẾT';
!function(a){function b(){h||(h=!0,d?(f.find("a").hide(),f.find("img").show(),a.ajax(d,{dataType:"html"}).done(function(b){var b=a("<div></div>").append(b.replace(k,"")),c=b.find("a.blog-pager-older-link");c?d=c.attr("href"):(d="",f.hide()),b=b.find(g).children(),a(g).append(b),f.find("img").hide(),f.find("a").show(),h=!1})):f.hide())}function c(){var a=Math.max(i.height(),j.height(),document.documentElement.clientHeight),c=i.scrollTop()+i.height();0>a-c&&b()}var d="",f=null,g="div.blog-posts",h=!1,i=a(window),j=a(document),k=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;a(document).ready(function(){if(d=a("a.blog-pager-older-link").attr("href")){var g=a('<a href="javascript:void(0)">'+text+'</a>');g.click(b),i.scroll(c),f=a('<div class="load-more"></div>');var img=$('<img src="'+loadingGif+'" style="display: none;">');f.append(g),f.append(img),f.insertBefore(a("#blog-pager")),a("#blog-pager").hide()}})}(jQuery);
function replaceText() {
    if (document.getElementById) {
        bodyText = document.getElementById("comments");
        theText = bodyText.innerHTML;
        theText = theText.replace(/\/=r/gi, "<img class='form_ozemoticon' src='https://1.bp.blogspot.com/-u8yosPY73V8/WkJVjYnwayI/AAAAAAAAAjM/jL40KsJKbAYur7CsGt7_YJKrcg3q3xVjQCLcBGAs/s1600/icon-cuoi-khinh-------BacSiWindows-Com.png'/>");
        theText = theText.replace(/:\)\)/gi, "<img class='form_ozemoticon' src='https://4.bp.blogspot.com/-ux9qbaP954c/Wj9fdW_UQ4I/AAAAAAAAAeE/orws_oXiiUs6Yg54CMcYrknFaJDrDRGpwCLcBGAs/s30/cuoi-chay-mo-hoi-_------BacSiWindows-Com.png'/>");
        theText = theText.replace(/;\)/gi, "<img class='form_ozemoticon' src='https://3.bp.blogspot.com/-KNV-LEGvjlA/Wj9euSw6_kI/AAAAAAAAAdo/8fjTbQBGPVsc9KqxnXaq6wtXp4bGDN6lgCLcBGAs/s30/nhay-mat-emoji-_----BacSiWindows-Com.png'/>");
        theText = theText.replace(/=\)\)/gi, "<img class='form_ozemoticon' src='https://1.bp.blogspot.com/-XgNCaZxi7DY/Wj9fdcIV-EI/AAAAAAAAAeI/EMrf9QjLr6gSSrlYhBX45P3QdKl_L2kBwCLcBGAs/s30/cuoi-ra-nuoc-mat-_----BacSiWindows-Com.png'/>");
        theText = theText.replace(/:\(\(/gi, "<img class='form_ozemoticon' src='https://4.bp.blogspot.com/-6wzuR6z9xWs/Wj9f0ZqG3nI/AAAAAAAAAeM/NhQ4TJbWwuAqHuwIVnSGiSKud_UbUZKaACLcBGAs/s30/khoc-cmnr-_--------BacSiWindows-Com.png'/>");
        theText = theText.replace(/&lt;3/gi, "<img class='form_ozemoticon' src='https://4.bp.blogspot.com/-ClraxROWNbo/WkB-oLESPYI/AAAAAAAAAfA/sR_3i8Kmk7sGKZzbZoDvoM8u3YDOWTUWACLcBGAs/s30/heart-emo-_----BacSiWindows-Com.png'/>");
        theText = theText.replace(/:v/gi, "<img class='form_ozemoticon' src='https://2.bp.blogspot.com/-O8c-moq--9k/Wj9edQA0hXI/AAAAAAAAAdk/Uh4B-i7MUOstJ_xoUwPenrCYnl5lnDp4wCLcBGAs/s30/pac-man-emoji-_----BacSiWindows-Com.png'/>");
        theText = theText.replace(/:\(/gi, "<img class='form_ozemoticon' src='https://4.bp.blogspot.com/-2PvUBPrCQeA/Wj9fHBWEC_I/AAAAAAAAAd0/lguX6Ifl9MoNfP33kl_flS9KAwyoPh39QCLcBGAs/s30/sad-emoji-_--_----BacSiWindows-Com.png'/>");
        theText = theText.replace(/==/gi, "<img class='form_ozemoticon' src='https://2.bp.blogspot.com/--X2hwKt6wbo/Wj9g4pvjqZI/AAAAAAAAAeg/6ZC1k2EO4XsopkyC-omRfTwks32uDALzQCLcBGAs/s30/emoji-mat-l-_----BacSiWindows-Com.png''/>");
        theText = theText.replace(/:\*/gi, "<img class='form_ozemoticon' src='https://1.bp.blogspot.com/-7iZXglOOZyg/WkCCtxO-cfI/AAAAAAAAAgY/Y5zO8vLD1I0puuspl56IUVZ48mpZJuY0gCLcBGAs/s30/kiss-_-----BacSiWindows-Com.png'/>");
        theText = theText.replace(/:D/gi, "<img class='form_ozemoticon' src='https://2.bp.blogspot.com/-Gy5qGO7Ax8s/Wj9fWezhGqI/AAAAAAAAAd8/tnV5uUs0T7MRQtwf-viTAtGFIyl6q3NfwCLcBGAs/s30/cuoi-nhe-rang-_------BacSiWindows-Com.png'/>");
        theText = theText.replace(/\^_\^/gi, "<img class='form_ozemoticon' src='https://1.bp.blogspot.com/-tolnCQWczZY/WkB-B5w_OLI/AAAAAAAAAe4/occafzZ_gHERU3smOd295SWEx3WB-saUwCLcBGAs/s30/cuoi-thoa-man-_--------BacSiWindows-Com.png'/>");
        theText = theText.replace(/\/=s/gi, "<img class='form_ozemoticon' src='https://3.bp.blogspot.com/-4YezCgQSKEY/WkCB6SjgoeI/AAAAAAAAAgM/VpkghtLDXq8yWeMvkgt5F4oRhJ0teRF_ACLcBGAs/s30/cuc-shit-_----------BacSiWindows-Com.png'/>");
        theText = theText.replace(/\/=ok/gi, "<img class='form_ozemoticon' src='https://3.bp.blogspot.com/-ha8qvV6BPVw/WkB_O8jxRII/AAAAAAAAAfI/Rea7zJEDQAI_XGUMGoke1pnL686xUpn5ACLcBGAs/s30/OK-_--------BacSiWindows-Com.png'/>");
        theText = theText.replace(/\/=hi/gi, "<img class='form_ozemoticon' src='https://3.bp.blogspot.com/-H99MzeSuYQE/WkCAPaC0mwI/AAAAAAAAAfk/SsHberFOHx4ULVE_NcsG4i5LZVZX111ngCLcBGAs/s30/hi_-_----BacSiWindows-Com.png'/>");
        theText = theText.replace(/\(y\)/gi, "<img class='form_ozemoticon' src='https://4.bp.blogspot.com/-y7-1FNKD9To/WkB_mx7YUaI/AAAAAAAAAfQ/eGjVJagChUgEi85bwgJ08Ixy8q-NMOHUwCLcBGAs/s30/like-_--------BacSiWindows.png'/>");
        theText = theText.replace(/:p/gi, "<img class='form_ozemoticon' src='https://1.bp.blogspot.com/-0Lv8dhINNjc/WkCDiSWTUrI/AAAAAAAAAg0/NqeiThMLpEguVNfqeIGdJQT4IGDMPPpTgCLcBGAs/s30/hahe-_--_---------BacSiWindows-Com.png'/>");
        theText = theText.replace(/\(yy\)/gi, "<img class='form_ozemoticon' src='https://1.bp.blogspot.com/-1FKLFedkrYs/WkB_mx3SGdI/AAAAAAAAAfM/xM-qLbvN99QvilvADLJcOfw31qmpk6bdgCLcBGAs/s30/dislike_-_---BacSiWindows-Com.png'/>");
        theText = theText.replace(/\/=l/gi, "<img class='form_ozemoticon' src='https://1.bp.blogspot.com/-P2HxqYDbbuA/WkCD_RmFioI/AAAAAAAAAhA/YViURS04COsCOCw8JBHglP5R0HnIBlSpQCLcBGAs/s30/liec-cmn-mat-_-------BacSiWindows-Com.png'/>");
        theText = theText.replace(/:\-\)/gi, "<img class='form_ozemoticon' src='https://1.bp.blogspot.com/-8xXw_ZvASlg/WkCDMCb6tnI/AAAAAAAAAgo/JpkViR7m7tghpR9y187RqcxEGym99OPEQCLcBGAs/s30/haiz-_---------BacSiWindows-Com.png'/>");
        theText = theText.replace(/\/=hl/gi, "<img class='form_ozemoticon' src='https://2.bp.blogspot.com/-UXCiTUUOmUM/WkCA7JFLW6I/AAAAAAAAAfs/NKu9vc77TwAYULp4oN52q6AEI4maFPCAQCLcBGAs/s30/hand-left-_-------BacSiWindows-Com.png'/>");
        theText = theText.replace(/\/=hr/gi, "<img class='form_ozemoticon' src='https://4.bp.blogspot.com/-__uQJusXEEE/WkCA7FbyUlI/AAAAAAAAAf0/qY8Q1nOkN8w_SpZRi9poiM1UrXpilzzCwCLcBGAs/s30/hand-right-_--------BacSiWindows-Com.png'/>");
        theText = theText.replace(/\/=hup/gi, "<img class='form_ozemoticon' src='https://2.bp.blogspot.com/-64z0uzn5I0Y/WkCA748T9hI/AAAAAAAAAf4/hAraWHgGC-AHD7oqDFejniia0fUdJPy8QCLcBGAs/s30/hand-up-_--------BacSiWindows-Com.png'/>");
        theText = theText.replace(/\/=hd/gi, "<img class='form_ozemoticon' src='https://2.bp.blogspot.com/-stw6F8kZNiE/WkCA7Os3mrI/AAAAAAAAAfw/KQoQne-BMG8g6GKBDrrXKoZ2MOw4r5KJgCLcBGAs/s30/hand-down-_-------BacSiWindows-Com.png'/>");
        theText = theText.replace(/\/=j/gi, "<img class='form_ozemoticon' src='https://2.bp.blogspot.com/-stw6F8kZNiE/WkCA7Os3mrI/AAAAAAAAAfw/KQoQne-BMG8g6GKBDrrXKoZ2MOw4r5KJgCLcBGAs/s30/hand-down-_-------BacSiWindows-Com.png'/>");
        theText = theText.replace(/\/=clap/gi, "<img class='form_ozemoticon' src='https://1.bp.blogspot.com/-qHoYM_5bgfU/WkB_rscqRyI/AAAAAAAAAfU/_jPSyWale4gAryHklV3x9ymg2vgZNzUTwCLcBGAs/s30/clap-hand-_----------BacSiWindows-Com.png'/>");
        theText = theText.replace(/\/=he/gi, "<img class='form_ozemoticon' src='https://4.bp.blogspot.com/-MphMmD88y1E/WkCCS30tMGI/AAAAAAAAAgQ/Px8O9UXGXPsB4Y7yvuWW7clWQsfwPQkzgCLcBGAs/s30/love-_-------BacSiWindows-Com.png'/>");
        theText = theText.replace(/\[img\].*?'.*?\[\/img\]/gi, "");
        theText = theText.replace(/\[img\]/gi, "<a target='blank' href='");
        theText = theText.replace(/\[\/img\]/gi, "'><b>[Xem Ảnh]</b></a>");
        theText = theText.replace(/l\u1ed3n/gi, "***");
        theText = theText.replace(/c\u1eb7c/gi, "***");
        theText =
            theText.replace(/c\u1eb7t/gi, "***");
        theText = theText.replace(/bu\u1ed3i/gi, "***");
        theText = theText.replace(/d\u00e1i/gi, "***");
        theText = theText.replace(/z\u00e1i/gi, "***");
        theText = theText.replace(/\u0111\u1ecbt/gi, "***");
        theText = theText.replace(/\u0111\u1ec9/gi, "**");
        theText = theText.replace(/\u0111\u0129/gi, "**");
        theText = theText.replace(/n\u1ee9ng/gi, "****");
        theText = theText.replace(/fuck/gi, "****");
        theText = theText.replace(/ch\u1ecbch/gi, "*****");
        theText = theText.replace(/n\u1ec7n/gi, "***");
        theText = theText.replace(/xo\u1ea1c/gi,
            "****");
        bodyText.innerHTML = theText
    }
}

function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.style.position = "fixed";
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.width = "2em";
    textArea.style.height = "2em";
    textArea.style.padding = 0;
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";
    textArea.style.background = "transparent";
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand("copy");
        alert("Đã sao chép liên kết!")
    } catch (s) {
        alert("Không thể sao chép liên kết!")
    }
    document.body.removeChild(textArea)
}

function CopyLink() {
    copyTextToClipboard(location.href)
}
replaceText(), $(".comment_content_BacSiWindows_RCv3,.deleted-comment").each(function () {
    var geoJSON_str = $(this).text();
    geoJSON_str = geoJSON_str.replace("Nhận xét này đã bị quản trị viên blog xóa.", "Bình luận này bị đánh dấu là spam.");
    geoJSON_str = geoJSON_str.replace("Nhận xét này đã bị tác giả xóa.", "Bình luận này đã bị ẩn.");
    $(this).text(geoJSON_str)
}), ! function ($) {
    var defaults = {
        topSpacing: 0,
        bottomSpacing: 0,
        className: "is-sticky",
        center: false
    };
    var $WINDOW = $(window);
    var $DOCUMENT = $(document);
    var sticked = [];
    var windowHeight = $WINDOW.height();
    var scroller = function () {
        var scrollTop = $WINDOW.scrollTop();
        var documentHeight = $DOCUMENT.height();
        var dwh = documentHeight - windowHeight;
        var extra = scrollTop > dwh ? dwh - scrollTop : 0;
        var i = 0;
        for (; i < sticked.length; i++) {
            var s = sticked[i];
            var elementTop = s.stickybsw_wrapper.offset().top;
            var elTop = elementTop - s.topSpacing - extra;
            if (elTop >= scrollTop) {
                if (null !== s.currentTop) {
                    s.stickyElement.css("position", "").css("top", "").removeClass(s.className);
                    s.currentTop = null
                }
            } else {
                var newTop = documentHeight - s.elementHeight - s.topSpacing - s.bottomSpacing - scrollTop - extra;
                if (0 > newTop) newTop = newTop + s.topSpacing;
                else newTop = s.topSpacing;
                if (s.currentTop != newTop) {
                    s.stickyElement.css("position", "fixed").css("top", newTop).addClass(s.className);
                    s.currentTop = newTop
                }
            }
        }
    };
    var fixedHandler = function () {
        windowHeight = $WINDOW.height()
    };
    if (window.addEventListener) {
        window.addEventListener("scroll",
            scroller, false);
        window.addEventListener("resize", fixedHandler, false)
    } else if (window.attachEvent) {
        window.attachEvent("onscroll", scroller);
        window.attachEvent("onresize", fixedHandler)
    }
    $.fn.sticky = function (s) {
        var o = $.extend(defaults, s);
        return this.each(function () {
            var $element = $(this);
            if (o.center) var _0xc8a3x6 = "margin:auto;";
            stickyId = $element.attr("id");
            $element.wrapAll('<div id="' + stickyId + 'Stickybsw_wrapper" style="' + _0xc8a3x6 + '"></div>').css("width", $element.width());
            var bottom_px = $element.outerHeight();
            var gotoEl = $element.parent();
            gotoEl.css("width", $element.outerWidth()).css("heightt", bottom_px).css("clear", $element.css("clear"));
            sticked.push({
                topSpacing: o.topSpacing,
                bottomSpacing: o.bottomSpacing,
                stickyElement: $element,
                currentTop: null,
                stickystartinhit_wrapper: gotoEl,
                elementHeight: bottom_px,
                className: o.className
            })
        })
    }
}(jQuery), $(document).ready(function () {
    $("#tabs-comments").sticky({
        topSpacing: 0,
        bottomSpacing: 0
    })
}), $(document).ready(function () {
    $("ul#tabs-comments li").click(function () {
        if (!$(this).hasClass("active")) {
            var admincoursecontents =
                $(this).index();
            var courseContentPage = admincoursecontents + 1;
            $("ul#tabs-comments li.active").removeClass("active");
            $(this).addClass("active");
            $("ul#tab li.active").removeClass("active");
            $("ul#tab li:nth-child(" + courseContentPage + ")").addClass("active")
        }
    })
});
