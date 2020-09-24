// Pagination
function createSearchForm() {
  mehtml =  '<form>\n<input type="text">\n<input type="submit" value="Submit">\n</form>\n'
  mehtml += '<ul class="articles"></ul>\n<ul class="pagnum" style="display:flex; flex-direction:row; list-style: none;"></ul>'
  $( 'body' ).prepend( mehtml );
}

function addNewArticle(id, title, snippet) {
  rows = '<li><p><span>' + id + '- </span><b>' + title + '</b></p><p>' + snippet + '</p</li>';

  $( '.articles' ).append(rows);
}

function queryWikipedia(search, offset = 0) {
  let req = new XMLHttpRequest();

  let url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=' + search  + '&utf8=&format=json&origin=*&sroffset=' + offset;
  req.open('GET', url, true);

  // Ask at the API
  req.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {
      res = JSON.parse(req.response);
      totalItems = res.query.searchinfo.totalhits;

      // Clear to the news articles
      $( '.articles' ).html( '' );
      // Build articles
      for (let i = 0; i < 10; ++i) {
        let id = res.query.search[i].pageid;
        let title = res.query.search[i].title;
        let htmltxt = res.query.search[i].snippet;
        addNewArticle(id, title, htmltxt);
      }

      buildPagination(totalItems, 10, offset);
    }
  };
  req.send();
}


function buildPagination(numberOfItems, itemsPerPage, currentOffset) {
  $( '.pagnum' ).html( '' );

  // Build the list of numbers
  let total = numberOfItems / itemsPerPage;
  for (let i = 0; i < total; ++i) {
    let list = '<li class="page" style="cursor: pointer; font-size: 1rem; margin-left: .5rem; ';
    if (i != currentOffset) {
      list += '">' + i;
    } else {
      list += 'font-weight: bold; font-size: 2rem">' + currentOffset;
    }

    list += '</li>';
    $( '.pagnum' ).append(list);
  }
  press();
}

function submit() {
  $('form').submit( function(e){
    let str = $( 'form input' ).first().val();
    queryWikipedia(str, 0);
    localStorage.setItem("lastquery", str);
    e.preventDefault();
  });
}

// If press someone number going to offset page
function press() {
  $('.page').on('click', function (e) {
    let offset = $(this).text();
    console.log(offset);
    let q = localStorage.getItem("lastquery");
    queryWikipedia(q, offset);
    e.preventDefault();
  });
}

// Document is ready
$( document ).ready(function() {
  createSearchForm();
  submit();
});
