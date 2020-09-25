// Another Get API and Minified Jquery
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

// Document is ready
$( document ).ready(function() {
  listPosts();
});
