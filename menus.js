function idbcomments(person) {
    var b;
    b = '<ul class="idbcomments"><h2>Bình luận gần đây <a href="/cmt" target="blank">View All</a></h2>';
    var i = 0;
    for (; numComments > i; i++) {
        var href;
        var $t;
        var img;
        var desc;
        if (i == person["feed"]["entry"]["length"]) break;
        b += "<li>";
        var entry = person["feed"]["entry"][i];
        var linki = 0;
        for (; linki < entry["link"]["length"]; linki++)
            if ("alternate" == entry["link"][linki]["rel"]) href = entry["link"][linki]["href"];
        var ii = 0;
        for (; ii < entry["author"]["length"]; ii++) {
            $t =
                entry["author"][ii]["name"]["$t"];
            img = entry["author"][ii]["gd$image"]["src"]
        }
        img = -1 != img["indexOf"]("/s1600/") ? img["replace"]("/s50/", "/s" + avatarSize + "-c/") : -1 != img["indexOf"]("/s220/") ? img["replace"]("/s220/", "/s" + avatarSize + "-c/") : -1 != img["indexOf"]("/s512-c/") && 0 != img["indexOf"]("https:") ? "https:" + img["replace"]("/91/", "/s" + avatarSize + "-c/") : -1 != img["indexOf"]("blogblog.com/img/b16-rounded.gif") ? "//1.bp.blogspot.com/-7bkcAKdpGXI/UrbyQRqvSKI/AAAAAAAAFmI/oBv_yMeYnMQ/s" + avatarSize + "/blogger.png" :
            -1 != img["indexOf"]("blogblog.com/img/openid16-rounded.gif") ? "//2.bp.blogspot.com/-VgnInuIUKBU/UrbzyXTYWRI/AAAAAAAAFmU/3f_Vfj3TI6A/s" + avatarSize + "/openid.png" : -1 != img["indexOf"]("blogblog.com/img/blank.gif") ? -1 != defaultAvatar["indexOf"]("gravatar.com") ? defaultAvatar + "&s=" + avatarSize : defaultAvatar : img;
        if (1 == showAvatar) {
            desc = 1 == roundAvatar ? "avatarRound" : "";
            b += '<div class="avatarImage ' + desc + '"><a title="' + $t + '" href="' + href + '"><img class="' + desc + '" src="' + img + '" alt="' + $t + '" width="' + avatarSize + '" height="' +
                avatarSize + '"/></a></div>'
        }
        b += '<a style="display:none" href="' + href + '">' + $t + "</a>";
        var data = entry["content"]["$t"];
        var result = data["replace"](/(<([^>]+)>)/gi, "");
        if ("" != result && result["length"] > characters) {
            result = result["substring"](0, characters);
            result += "&hellip;";
            if (1 == showMorelink) result += '<a href="' + href + '">' + moreLinktext + "</a>"
        } else result = result;
        b += "<span>" + result + "</span>";
        b += "</li>"
    }
    b += "</ul>";
    var optsData = "";
    if (0 == hideCredits) optsData = "display:block;";
    b += "";
    document["write"](b)
}
var numComments = 13;
var showAvatar = true;
var avatarSize = 30;
var roundAvatar = true;
var characters = 5;
var showMorelink = false;
var defaultAvatar = "https://4.bp.blogspot.com/-jmA-qIOJIFU/WfgKSYnhm5I/AAAAAAAAABQ/ElEIBlHd31gISODb3GlA9Z_JPRKiSzvYQCLcBGAs/s35/Logo-Bac-Si-Windows.png";
var hideCredits = true;
numComments = numComments || 5;
avatarSize = avatarSize || 50;
characters = 70;
defaultAvatar = defaultAvatar || "https://4.bp.blogspot.com/-jmA-qIOJIFU/WfgKSYnhm5I/AAAAAAAAABQ/ElEIBlHd31gISODb3GlA9Z_JPRKiSzvYQCLcBGAs/s35/Logo-Bac-Si-Windows.png";
var moreLinktext = moreLinktext || "More";
showAvatar = "undefined" == typeof showAvatar ? true : showAvatar;
showMorelink = "undefined" == typeof showMorelink ? false : showMorelink;
roundAvatar = "undefined" == typeof roundAvatar ? true : roundAvatar;
hideCredits = "undefined" == typeof hideCredits ? false : roundAvatar;
! function (mod) {
    if ("function" == typeof define && define["amd"]) define(["jquery"], mod);
    else mod("object" == typeof module && "object" == typeof module["exports"] ? require("jquery") : jQuery)
}(function ($) {
    function init() {
        var y = padding["settings"];
        if (y["autoDispose"] && !$["contains"](document["documentElement"], this)) return $(this)["timeago"]("dispose"), this;
        var elems = next(this);
        return isNaN(elems["datetime"]) || (0 === y["cutoff"] || Math["abs"](fn(elems["datetime"])) < y["cutoff"] ? $(this)["text"](callback(elems["datetime"])) :
            $(this)["attr"]("title")["length"] > 0 && $(this)["text"]($(this)["attr"]("title"))), this
    }

    function next(element) {
        if (element = $(element), !element["data"]("timeago")) {
            element["data"]("timeago", {
                datetime: padding["datetime"](element)
            });
            var value = $["trim"](element["text"]());
            if (padding["settings"]["localeTitle"]) element["attr"]("title", element["data"]("timeago")["datetime"]["toLocaleString"]());
            else if (!!(value["length"] > 0))
                if (!(padding["isTime"](element) && element["attr"]("title"))) element["attr"]("title",
                    value)
        }
        return element["data"]("timeago")
    }

    function callback(t) {
        return padding["inWords"](fn(t))
    }

    function fn(event) {
        return (new Date)["getTime"]() - event["getTime"]()
    }
    $["timeago"] = function (val) {
        return callback(val instanceof Date ? val : "string" == typeof val ? $["timeago"]["parse"](val) : "number" == typeof val ? new Date(val) : $["timeago"]["datetime"](val))
    };
    var padding = $["timeago"];
    $["extend"]($["timeago"], {
        settings: {
            refreshMillis: 6E4,
            allowPast: true,
            allowFuture: false,
            localeTitle: false,
            cutoff: 0,
            autoDispose: true,
            strings: {
                prefixAgo: null,
                prefixFromNow: null,
                suffixAgo: "",
                suffixFromNow: "vừa đăng",
                inPast: "bất kỳ lúc nào",
                seconds: "vài giây trước",
                minute: "1 phút",
                minutes: "%d phút",
                hour: "1 giờ",
                hours: "%d giờ",
                day: "Hôm qua",
                days: "%d ngày",
                month: "1 tháng",
                months: "%d tháng",
                year: "1 năm",
                years: "%d năm",
                wordSeparator: " ",
                numbers: []
            }
        },
        inWords: function (index) {
            function fn(value,
                dataAndEvents) {
                var computed = $["isFunction"](value) ? value(dataAndEvents, index) : value;
                var r20 = match["numbers"] && match["numbers"][dataAndEvents] || dataAndEvents;
                return computed["replace"](/%d/i, r20)
            }
            if (!this["settings"]["allowPast"] && !this["settings"]["allowFuture"]) throw "timeago allowPast and allowFuture settings can not both be set to false.";
            var match = this["settings"]["strings"];
            var m = match["prefixAgo"];
            var eventName = match["suffixAgo"];
            if (this["settings"]["allowFuture"] && (0 > index && (m = match["prefixFromNow"],
                    eventName = match["suffixFromNow"])), !this["settings"]["allowPast"] && index >= 0) return this["settings"]["strings"]["inPast"];
            var n = Math["abs"](index) / 1E3;
            var from = n / 60;
            var result = from / 60;
            var deltaX = result / 24;
            var str = deltaX / 365;
            var y = 45 > n && fn(match["seconds"], Math["round"](n)) || (90 > n && fn(match["minute"], 1) || (45 > from && fn(match["minutes"], Math["round"](from)) || (90 > from && fn(match["hour"], 1) || (24 > result && fn(match["hours"], Math["round"](result)) || (42 > result && fn(match["day"], 1) || (30 > deltaX && fn(match["days"],
                Math["round"](deltaX)) || (45 > deltaX && fn(match["month"], 1) || (365 > deltaX && fn(match["months"], Math["round"](deltaX / 30)) || (1.5 > str && fn(match["year"], 1) || fn(match["years"], Math["round"](str)))))))))));
            var parentName = match["wordSeparator"] || "";
            return void 0 === match["wordSeparator"] && (parentName = " "), $["trim"]([m, y, eventName]["join"](parentName))
        },
        parse: function (node) {
            var data = $["trim"](node);
            return data = data["replace"](/\.\d+/, ""), data = data["replace"](/-/, "/")["replace"](/-/, "/"), data = data["replace"](/T/,
                " ")["replace"](/Z/, " UTC"), data = data["replace"](/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), data = data["replace"](/([\+\-]\d\d)$/, " $100"), new Date(data)
        },
        datetime: function (elem) {
            var r20 = padding["isTime"](elem) ? $(elem)["attr"]("datetime") : $(elem)["attr"]("title");
            return padding["parse"](r20)
        },
        isTime: function (elem) {
            return "time" === $(elem)["get"](0)["tagName"]["toLowerCase"]()
        }
    });
    var functions = {
        init: function () {
            functions["dispose"]["call"](this);
            var run = $["proxy"](init, this);
            run();
            var y = padding["settings"];
            if (y["refreshMillis"] >
                0) this["_timeagoInterval"] = setInterval(run, y["refreshMillis"])
        },
        update: function (value) {
            var arr = value instanceof Date ? value : padding["parse"](value);
            $(this)["data"]("timeago", {
                datetime: arr
            });
            if (padding["settings"]["localeTitle"]) $(this)["attr"]("title", arr["toLocaleString"]());
            init["apply"](this)
        },
        updateFromDOM: function () {
            $(this)["data"]("timeago", {
                datetime: padding["parse"](padding["isTime"](this) ? $(this)["attr"]("datetime") : $(this)["attr"]("title"))
            });
            init["apply"](this)
        },
        dispose: function () {
            if (this["_timeagoInterval"]) {
                window["clearInterval"](this._timeagoInterval);
                this["_timeagoInterval"] = null
            }
        }
    };
    $["fn"]["timeago"] = function (action, arrayValue) {
        var options = action ? functions[action] : functions["init"];
        if (!options) throw new Error("Unknown function name '" + action + "' for timeago");
        return this["each"](function () {
            options["call"](this, arrayValue)
        }), this
    };
    document["createElement"]("abbr");
    document["createElement"]("time")
}), jQuery(document)["ready"](function ($sanitize) {
    $sanitize("abbr.timeago")["timeago"]()
});
var home = "//trongttrungssd.blogspot.com/";
var perPage = 5;
$(document)["ready"](function () {
    $("#bsw_livesearchboxv2 input")["click"](function (synEvent) {
        synEvent["stopPropagation"]();
        $("#bsw_livesearchboxv2 input")["keyup"](function () {
            var val = $("#bsw_livesearchboxv2 input")["val"]();
            var media = new RegExp(val, "i");
            var r20 = '<div class="row">';
            r20 = '<div class="content_kq"><span>Kết quả tìm kiếm</span></div>';
            $["ajax"]({
                url: home + "feeds/posts/default?alt=json&max-results=6",
                dataType: "jsonp"
            })["done"](function (person) {
                $["each"](person["feed"]["entry"],
                    function (dataAndEvents, entry) {
                        if ("" != val && -1 != entry["title"]["$t"]["search"](media)) {
                            if (r20 += '<div class="bsw_livesearchv2_items">', void 0 != entry["media$thumbnail"]) var s36_c = entry["media$thumbnail"]["url"]["replace"](/\/s([\S]+)\//, "/s36-c/");
                            r20 += '<a href="' + entry["link"][4]["href"] + '" target="_blank"><img src="' + s36_c + '" /></a>';
                            r20 += '<h5><a target="_blank" href="' + entry["link"][4]["href"] + '">' + entry["title"]["$t"] + "</a></h5>";
                            r20 += "</div>"
                        }
                    });
                r20 += "</div>";
                $("#bsw-livesearchboxv2")["html"](r20)
            })
        })
    });
    $(document)["click"](function () {
        $("#bsw-livesearchboxv2")["html"]("")
    })
}), jQuery(document)["ready"](function ($) {
    $(".dropdown-toggle")["click"](function () {
        var _0x6331x6 = $(this)["parents"](".button-dropdown_bacsiwindows")["children"](".dropdown-menu_bacsiwindows")["is"](":hidden");
        $(".button-dropdown_bacsiwindows .dropdown-menu_bacsiwindows")["hide"]();
        $(".button-dropdown_bacsiwindows .dropdown-toggle")["removeClass"]("active");
        if (_0x6331x6) $(this)["parents"](".button-dropdown_bacsiwindows")["children"](".dropdown-menu_bacsiwindows")["toggle"]()["parents"](".button-dropdown_bacsiwindows")["children"](".dropdown-toggle")["addClass"]("active")
    });
    $(document)["bind"]("click", function (tags) {
        var emptyJ = $(tags["target"]);
        if (!emptyJ["parents"]()["hasClass"]("button-dropdown_bacsiwindows")) $(".button-dropdown_bacsiwindows .dropdown-menu_bacsiwindows")["hide"]()
    });
    $(document)["bind"]("click", function (tags) {
        var emptyJ = $(tags["target"]);
        if (!emptyJ["parents"]()["hasClass"]("button-dropdown_bacsiwindows")) $(".button-dropdown_bacsiwindows .dropdown-toggle")["removeClass"]("active")
    })
});