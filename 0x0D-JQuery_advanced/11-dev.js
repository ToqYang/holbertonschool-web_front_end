// Post query
function addPostRow(data) {
  prgph = '<p><span>Post created with id ' + data.id + ', title: ' + data.title + ', author: ' + data.author + '</span></p>';
  $("body").append(prgph);
}

function listPosts() {
  $.get('http://localhost:3000/posts', function(data) {
    let len = data.length;
    for (let i = 0; i < len; ++i) {
       addPostRow(data[i]);
    }
  });
}

function buildForm() {
  mehtml = '<form action="sendform()">\n<div class="box">\n<label for="by">Author</label>\n<input name="uno" type="text" id="by">\n</div>';
  mehtml += '<div class="box">\n<label for="tit">Title</label>\n<textarea name="dos" id="tit" cols="12" rows="1"></textarea>\n</div>'
  mehtml += '<input type="submit" value="Submit">\n</form>'
  $( 'body' ).prepend( mehtml );
  sendForm();
}

function sendForm() {
  $( "form" ).submit(function( e ) {
    $( 'form' ).after( '<p class="info">About to send the query to the API</p>' );

    let values = $( this ).serializeArray();
    author = values[0].value;
    title = values[1].value;

    newarticle = {
      title: "",
      author: "",
    }

    newarticle.title = title;
    newarticle.author = author;
    $.post( 'http://localhost:3000/posts', newarticle)

    .done(function() {
      addPostRow(newarticle);
    })

    .fail(function () {
      alert('Error sending the POST query');
    });

    $( '.info' ).remove();
    e.preventDefault();
  });
}

// Document is ready
$( document ).ready(function() {
  listPosts();
  buildForm();
});
