// Query - Setup your dev environment
function createSearchForm() {
  $( 'body' ).prepend( '<form>\n<input type="text">\n<input type="submit" value="Submit">\n</form>\n<ul></ul>' );
}

function addNewArticle(id, title, snippet) {
  rows = '<li><p><span>' + id + '- </span><b>' + title + '</b></p><p>' + snippet + '</p</li>';

  $( 'ul' ).append(rows);
}

function queryWikipedia(search) {
  let req = new XMLHttpRequest();

  let url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=' + search + '&origin=*';
  req.open('GET', url, true);

  req.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {
      res = JSON.parse(req.response);
      res = (Object.values(res.query.pages)[0]);
      addNewArticle(res.pageid, res.title, res.extract);
    }
  };
  req.send();
}

function submit() {
  $('form').submit( function(e){
    let str = $( 'form input' ).first().val();
    queryWikipedia(str);
    e.preventDefault();
  });
}

$( document ).ready(function() {
  createSearchForm();
  submit();
});
