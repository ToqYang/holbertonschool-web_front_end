// HTML function
function createFamilyTree() {
  $( 'body' ).append( '<table>\n<thead style=\"font-weight: bold; font-size: 2rem;\">\n<tr>\n<th>Firstname</th>\n<th>Lastname</th>\n</tr>\n</thead>\
  \n<tbody style=\"font-weight: 500; font-size: 1.5rem;\">\n<tr>\n<td>Guillaume</td>\n<td>Salva</td>\n</tr>\n<tr>\n<td>Paulette</td>\n\
  <td>Salva</td>\n</tr>\n<tr>\n<td>Antoine</td>\n<td>Salva</td>\n</tr>\n</tbody>\n</table>' );
}

function replaceFamilyTree() {
  rows = '<tr><td>Gerard</td>\n<td>Bonissa</td></tr>';
  $( 'table tbody' ).html( rows );
}

$( document ).ready(function() {
  createFamilyTree();
  replaceFamilyTree();
});