$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();


    var blanks = ["item1", "item2", "item3", "item4", "item5"];
    var arr = [];
    blanks.forEach(function(blank) {
      var items = $("#" + blank).val().toUpperCase();
      arr.push(items);
    });
    arr.sort();
    arr.map(function(string) {
      return $("#groceries").append("<li>" + string + "</li>");
    });
    // console.log();
  });
});
