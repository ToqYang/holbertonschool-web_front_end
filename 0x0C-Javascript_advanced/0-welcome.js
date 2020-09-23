// Lexical scoping and welcome message
function welcome(firstName, lastName) {
	function displayFullName() {
		const fullName = `${firstName} ${lastName}`;
		alert(`Welcome ${fullName}!`);
	}

	alert(displayFullName());
}
