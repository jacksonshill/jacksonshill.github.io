// HANDLEBARS

var template = Handlebars.compile(document.getElementById('the-partial').innerHTML);
var header = Handlebars.compile(document.getElementById('the-header').innerHTML);
//var header = Handlebars.compile("partials/header.handlebars");
Handlebars.registerPartial('myName', header);
var templateData = template();
document.getElementById("container").innerHTML += (templateData);




