$("#pp-show").click(function () {
    $("body").append('<style id="p1">#pp-show{display:none!important}.PopularPosts ul li:nth-child(1n+6),#pp-hide{display:block !important}</style>');
    $("#p2").remove()
});
$("#pp-hide").click(function () {
    $("body").append('<style id="p2">.PopularPosts ul li:nth-child(1n+6),#pp-hide{display:none!important}#pp-show{display:block!important}</style>');
    $("#p1").remove()
});