$('button').click(function() {
  $('h6').text(randomEl(adjectives));
  selectElementContents($('h6')[0]);
});

function randomEl(list) {
  var i = Math.floor(Math.random() * list.length);
  return list[i];
}

function selectElementContents(el) {
  var range = document.createRange();
  range.selectNodeContents(el);
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

var adjectives = ["Leeuw", "Dolfijn", "Tijger", "Aap", "Giraffe",];

$('button').click();