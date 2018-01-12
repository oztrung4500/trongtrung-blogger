(function ($) {
    $.tooltipsy = function (el, options) {
        this.options = options;
        this["$el"] = $(el);
        this.title = this["$el"].attr("title") || "";
        this["$el"].attr("title", "");
        this.random = parseInt(Math.random() * 1E4);
        this.ready = false;
        this.shown = false;
        this.width = 0;
        this.height = 0;
        this.delaytimer = null;
        this["$el"].data("tooltipsy", this);
        this.init()
    };
    $.tooltipsy.prototype.init = function () {
        var base = this;
        base.settings = $.extend({}, base.defaults, base.options);
        base.settings.delay = parseInt(base.settings.delay);
        if (typeof base.settings.content ===
            "function") base.readify();
        if (base.settings.showEvent === base.settings.hideEvent && base.settings.showEvent === "click") base["$el"].toggle(function (e) {
            if (base.settings.showEvent === "click" && base["$el"][0].tagName == "A") e.preventDefault();
            if (base.settings.delay > 0) base.delaytimer = window.setTimeout(function () {
                base.show(e)
            }, base.settings.delay);
            else base.show(e)
        }, function (event) {
            if (base.settings.showEvent === "click" && base["$el"][0].tagName == "A") event.preventDefault();
            window.clearTimeout(base.delaytimer);
            base.delaytimer =
                null;
            base.hide(event)
        });
        else base["$el"].bind(base.settings.showEvent, function (e) {
            if (base.settings.showEvent === "click" && base["$el"][0].tagName == "A") e.preventDefault();
            if (base.settings.delay > 0) base.delaytimer = window.setTimeout(function () {
                base.show(e)
            }, base.settings.delay);
            else base.show(e)
        }).bind(base.settings.hideEvent, function (event) {
            if (base.settings.showEvent === "click" && base["$el"][0].tagName == "A") event.preventDefault();
            window.clearTimeout(base.delaytimer);
            base.delaytimer = null;
            base.hide(event)
        })
    };
    $.tooltipsy.prototype.show = function (e) {
        var self = this;
        if (self.ready === false) self.readify();
        if (self.shown === false) {
            if (function (modified) {
                    var s = 0;
                    var field;
                    for (field in modified)
                        if (modified.hasOwnProperty(field)) s++;
                    return s
                }(self.settings.css) > 0) self["$tip"].css(self.settings.css);
            self.width = self["$tipsy"].outerWidth();
            self.height = self["$tipsy"].outerHeight()
        }
        if (self.settings.alignTo === "cursor" && e) {
            var xy = [e.pageX + self.settings.offset[0], e.pageY + self.settings.offset[1]];
            if (xy[0] + self.width > $(window).width()) var tip_css = {
                top: xy[1] + "px",
                right: xy[0] + "px",
                left: "auto"
            };
            else tip_css = {
                top: xy[1] + "px",
                left: xy[0] + "px",
                right: "auto"
            }
        } else xy = [function (strip) {
            if (self.settings.offset[0] < 0) return strip.left - Math.abs(self.settings.offset[0]) - self.width;
            else if (self.settings.offset[0] === 0) return strip.left - (self.width - self["$el"].outerWidth()) / 2;
            else return strip.left + self["$el"].outerWidth() + self.settings.offset[0]
        }(self.offset(self["$el"][0])), function (offset2) {
            if (self.settings.offset[1] < 0) return offset2.top - Math.abs(self.settings.offset[1]) -
                self.height;
            else if (self.settings.offset[1] === 0) return offset2.top - (self.height - self["$el"].outerHeight()) / 2;
            else return offset2.top + self["$el"].outerHeight() + self.settings.offset[1]
        }(self.offset(self["$el"][0]))];
        self["$tipsy"].css({
            top: xy[1] + "px",
            left: xy[0] + "px"
        });
        self.settings.show(e, self["$tipsy"].stop(true, true))
    };
    $.tooltipsy.prototype.hide = function (event) {
        var data = this;
        if (data.ready === false) return;
        if (event && event.relatedTarget === data["$tip"][0]) {
            data["$tip"].bind("mouseleave", function (event) {
                if (event.relatedTarget ===
                    data["$el"][0]) return;
                data.settings.hide(event, data["$tipsy"].stop(true, true))
            });
            return
        }
        data.settings.hide(event, data["$tipsy"].stop(true, true))
    };
    $.tooltipsy.prototype.readify = function () {
        this.ready = true;
        this["$tipsy"] = $('<div id="tooltipsy' + this.random + '" style="position:absolute;z-index:2147483647;display:none">').appendTo("body");
        this["$tip"] = $('<div class="' + this.settings.className + '">').appendTo(this.$tipsy);
        this["$tip"].data("rootel", this.$el);
        var name = this["$el"];
        var t = this["$tip"];
        this["$tip"].html(this.settings.content !=
            "" ? typeof this.settings.content == "string" ? this.settings.content : this.settings.content(name, t) : this.title)
    };
    $.tooltipsy.prototype.offset = function (parent) {
        var pickWinLeft = ot = 0;
        if (parent.offsetParent) {
            do
                if (parent.tagName != "BODY") {
                    pickWinLeft += parent.offsetLeft - parent.scrollLeft;
                    ot += parent.offsetTop - parent.scrollTop
                }
            while (parent = parent.offsetParent)
        }
        return {
            left: pickWinLeft,
            top: ot
        }
    };
    $.tooltipsy.prototype.destroy = function () {
        this["$tipsy"].remove();
        $.removeData(this.$el, "tooltipsy")
    };
    $.tooltipsy.prototype.defaults = {
        alignTo: "element",
        offset: [0, -1],
        content: "",
        show: function (elm, content) {
            content.fadeIn(100)
        },
        hide: function (event, elements) {
            elements.fadeOut(100)
        },
        css: {},
        className: "tooltipsy",
        delay: 200,
        showEvent: "mouseenter",
        hideEvent: "mouseleave"
    };
    $.fn.tooltipsy = function (options) {
        return this.each(function () {
            new $.tooltipsy(this, options)
        })
    }
})(jQuery);
//coppy