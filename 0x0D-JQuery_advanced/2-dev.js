//  Creating multiple DOM elements at once
function createFamilyTree() {
  txt = "<table>\n<thead style=\"font-weight: bold; font-size: 2rem;\">\n<tr>\n<th>Firstname</th>\n<th>Lastname</th>\n</tr>\n</thead>\
        \n<tbody style=\"font-weight: 500; font-size: 1.5rem;\">\n<tr>\n<td>Guillaume</td>\n<td>Salva</td>\n</tr>\n<tr>\n<td>Paulette</td>\n\
        <td>Salva</td>\n</tr>\n<tr>\n<td>Antoine</td>\n<td>Salva</td>\n</tr>\n</tbody>\n</table>"

  $("body").append(txt);
}

$( document ).ready(function() {
  createFamilyTree();
});