// Click attribute and remove function
function createFamilyTree() {
  $( 'body' ).append( '<table>\n<thead style=\"font-weight: bold; font-size: 2rem;\">\n<tr>\n<th>Firstname</th>\n<th>Lastname</th>\n</tr>\n</thead>\
  \n<tbody style=\"font-weight: 500; font-size: 1.5rem;\">\n</tbody>\n</table>' );
}

function addNewMember(firstName, lastName) {
  rows = '<tr><td>' + firstName + '</td>\n<td>' + lastName + '</td>\n<td style="background-color: orange;" class="row-x">' + '(x)' + '</td></tr>';
  $( 'table tbody' ).append( rows );

  rm();
}

function rm() {
  $('.row-x').click(function () {
    $(this).closest('tr').remove();
  });
}

$( document ).ready(function() {
  createFamilyTree();

  addNewMember('Guillaume', 'Salva');
  addNewMember('Arielle', 'Snizt');
  addNewMember('Fanette', 'Snizt');
  addNewMember('Gerard', 'Snizt');
  addNewMember('Victor', 'Salva');
});