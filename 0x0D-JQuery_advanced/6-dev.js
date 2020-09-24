// Val, before, and prepend functions
function createFamilyTree() {
  $( 'body' ).append( '<table>\n<thead style=\"font-weight: bold; font-size: 2rem;\">\n<tr>\n<th>Firstname</th>\n<th>Lastname</th>\n</tr>\n</thead>\
  \n<tbody style=\"font-weight: 500; font-size: 1.5rem;\">\n</tbody>\n</table>' );
}

function addNewMember(firstName, lastName, position) {
  rows = '<tr><td>' + firstName + '</td>\n<td>' + lastName + '</td>\n<td style="background-color: orange;" class="row-x">' + '(x)' + '</td></tr>';

  if (position == 0) {
    $( 'table tbody' ).prepend( rows );
    rm();
  } else if (position == 1) {
    $( 'table tbody' ).append( rows );
    rm();
  }
}


function createForm() {
  $( 'body' ).prepend( '<div style="display: flex; flex-direction: row;">\n<input type="text" id="name">\n\
  <input type="text" id="lastname">\n<select id="pos" value="person"><option value="0" name="before">Before</option>\n\
  <option value="1" name="after">After</option>\n</select>\n<input type="submit" id="subform" value="Submit">\n</div>' );
}

function submit_btn() {
  $( '#subform' ).click(function() {
    let name = $( '#name' ).val();
    let lastname = $( '#lastname' ).val();
    let option = $( '#pos' ).val();

    addNewMember(name, lastname, option);
  });
}

function rm() {
  $('.row-x').on('click', function (e) {
    e.preventDefault();
    $(this).closest('tr').remove();
  });
}

$( document ).ready(function() {
  createFamilyTree();
  createForm();

  addNewMember('Guillaume', 'Salva', 1);
  addNewMember('Arielle', 'Snizt', 1);
  addNewMember('Fanette', 'Snizt', 1);
  addNewMember('Gerard', 'Snizt', 1);
  addNewMember('Victor', 'Salva', 1);
  submit_btn();
});