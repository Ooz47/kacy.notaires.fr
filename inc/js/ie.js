var html = document.getElementById("html");
html.setAttribute("class", "ui-mobile landscape min-width-320px min-width-480px min-width-768px min-width-1024px");
			
var body = document.getElementById("body");
body.setAttribute("class", "ui-mobile-viewports ie");
//body.className += " ie";

var page = document.getElementById("page");
page.setAttribute("class", "ui-page ui-body-c ui-page-active");

var header = document.getElementById("header");
header.setAttribute("class", "ui-bar-a ui-header");

var title = document.getElementById("title");
title.setAttribute("class", "ui-title");

var title2 = document.getElementById("title2");
title2.setAttribute("class", "ui-title");

var footer = document.getElementById("footer");
footer.setAttribute("class", "ui-bar-a ui-footer");

var content = document.getElementById("content");
content.setAttribute("class", "ui-content");

var listview = document.getElementById("listview");
listview.setAttribute("class", "ui-listview");

var option = document.getElementById("option");
option.setAttribute("class", "ui-btn ui-btn-icon-right ui-li ui-btn-up-c");
var option2 = document.getElementById("option2");
option2.setAttribute("class", "ui-btn ui-btn-icon-right ui-li ui-btn-up-c");
var option3 = document.getElementById("option3");
option3.setAttribute("class", "ui-btn ui-btn-icon-right ui-li ui-btn-up-c");
var option4 = document.getElementById("option4");
if (option4) {
option4.setAttribute("class", "ui-btn ui-btn-icon-right ui-li ui-btn-up-c");
}
if (option5) {
option5.setAttribute("class", "ui-btn ui-btn-icon-right ui-li ui-btn-up-c");
}

var a1 = document.querySelector("#option > a");
a1.setAttribute("class", "ui-link-inherit");
var a2 = document.querySelector("#option2 > a");
a2.setAttribute("class", "ui-link-inherit");
var a3 = document.querySelector("#option3 > a");
a3.setAttribute("class", "ui-link-inherit");
var a4 = document.querySelector("#option4 > a");
if (a4) {
a4.setAttribute("class", "ui-link-inherit");
}
if (a5) {
a5.setAttribute("class", "ui-link-inherit");
}
var lang1 = document.querySelector("#lang1");
lang1.setAttribute("class", "ui-link");

var lang2 = document.querySelector("#lang2");
lang2.setAttribute("class", "ui-link");


var lien1 = document.querySelector("#lien1");
lien1.setAttribute("class", "ui-link");

var lien2 = document.querySelector("#lien2");
lien2.setAttribute("class", "ui-link");