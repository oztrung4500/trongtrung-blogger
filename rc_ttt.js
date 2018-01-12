function BacSiWindows_RCv3(data) {
    var STYLESHEET;
    STYLESHEET = '<ul class="BacSiWindows_RCv3">';
    var j = 0;
    for (; numComments > j; j++) {
        var nodeHref;
        var $t;
        var me;
        var desc;
        if (j == data.feed.entry.length) break;
        STYLESHEET += "<li>";
        var e = data.feed.entry[j];
        var i = 0;
        for (; i < e.link.length; i++)
            if ("alternate" == e.link[i].rel) nodeHref = e.link[i].href;
        var r = 0;
        for (; r < e.author.length; r++) {
            $t = e.author[r].name["$t"];
            me = e.author[r]["gd$image"].src
        }
        me = -1 != me.indexOf("/s1600/") ? me.replace("/s1600/", "/s" + avatarSize + "-c/") : -1 != me.indexOf("/s113/") ?
            me.replace("/s113/", "/s" + avatarSize + "-c/") : -1 != me.indexOf("/s512-c/") && 0 != me.indexOf("https:") ? "https:" + me.replace("/s512-c/", "/s" + avatarSize + "-c/") : -1 != me.indexOf("blogblog.com/img/b16-rounded.gif") ? "//1.bp.blogspot.com/-NAMZejK41So/T0evV0_SSUI/AAAAAAAACso/ol6-PKkZipA/s" + avatarSize + "/md_blogger_logo.png" : -1 != me.indexOf("blogblog.com/img/openid16-rounded.gif") ? "//4.bp.blogspot.com/-k0U7v1WpNRs/T0euKMHQi_I/AAAAAAAACsg/DNqzinhvxt4/s" + avatarSize + "/md_openid_logo.png" : -1 != me.indexOf("blogblog.com/img/blank.gif") ?
            -1 != defaultAvatar.indexOf("gravatar.com") ? defaultAvatar + "&s=" + avatarSize : defaultAvatar : me;
        if (1 == showAvatar) {
            desc = 1 == roundAvatar ? "bacsiwindows_avatar_RCv3" : "";
            STYLESHEET += '<div class="avatarImage ' + desc + '"><img class="' + desc + '" src="' + me + '" alt="' + $t + '" width="' + avatarSize + '" height="' + avatarSize + '"/></div>'
        }
        STYLESHEET += "<div class='BSW_rc_v3'><a href='" + nodeHref + "'><span class='bacsiwindows_user user_name_RC-BSWv3'>" + $t + "</span></a></a>";
        var title = e.content["$t"];
        var clean = title.replace(/(<([^>]+)>)/gi,
            "");
        if ("" != clean && clean.length > characters) {
            clean = clean.substring(0, characters);
            clean += "…"
        } else clean = clean;
        STYLESHEET += '<span class="comment_content_BacSiWindows_RCv3">' + clean + "</span><a class='_bacsiwindows_RCv3_reply_btn' href='" + nodeHref + "' style='margin:0 0 0 40px'>Trả lời</a><a class='_bacsiwindows_RCv3_reply_btn' href='javascript:like_btn_bacsiwindows' onClick='alert(&quot;Chức năng này hiện chưa khả dụng!&quot;)'>Thích</a>";
        STYLESHEET +=
            "</li>"
    }
    STYLESHEET += "";
    document.write(STYLESHEET)
}
var numComments = 5;
var avatarSize = 40;
var characters = 100;
var defaultAvatar = defaultAvatar || "https://4.bp.blogspot.com/-jmA-qIOJIFU/WfgKSYnhm5I/AAAAAAAAABQ/ElEIBlHd31gISODb3GlA9Z_JPRKiSzvYQCLcBGAs/s40/Logo-Bac-Si-Windows.png";
var showAvatar = "undefined" == typeof showAvatar ? true : showAvatar;
var roundAvatar = "undefined" == typeof roundAvatar ? true : roundAvatar;
var hideCredits = "undefined" == typeof hideCredits ? false : roundAvatar;