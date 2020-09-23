// Closure Scope Chain
const globalVariable = "Welcome";

function outer() {
  alert(globalVariable);
  const course = "Holberton";
  const exclamation = "!";

  function inner() {
    alert(`${globalVariable} ${course}`);

    function inception() {
      alert(`${globalVariable} ${course}${exclamation}`);
    }
    inception();
  }

  inner();
}

outer();
