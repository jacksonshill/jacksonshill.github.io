// HANDLEBARS

$(function() {
    Handlebars.registerPartial("header", $("#header-partial").html());
});

$(function () {
  // Grab the template script
  var theTemplateScript = $("#address-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Define our data object
  var data={
    "city": "London",
    "street": "Baker Street",
    "number": "221B"
  };

  // Pass our data to the template
  var theCompiledHtml = theTemplate(data);

  // Add the compiled html to the page
  $('.content-placeholder').html(theCompiledHtml);
});
